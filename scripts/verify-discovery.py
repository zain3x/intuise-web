"""Validate built HTML or the same route set served by a deploy, without JavaScript."""
import argparse
import json
import re
from pathlib import Path
from html.parser import HTMLParser
from urllib.parse import urlsplit, unquote
from urllib.request import urlopen
import xml.etree.ElementTree as ET

class Page(HTMLParser):
    def __init__(self, text):
        super().__init__()
        self.ids, self.links, self.labels, self.headings = [], [], [], []
        self.meta, self.canonical, self.title, self.schemas = {}, [], '', []
        self.in_title = self.in_json = False
        self.json_text = ''
        self.feed(text)
    def handle_starttag(self, tag, attrs):
        a = dict(attrs)
        if 'id' in a: self.ids.append(a['id'])
        if tag == 'a' and 'href' in a: self.links.append(a['href'])
        if 'aria-labelledby' in a: self.labels += a['aria-labelledby'].split()
        if re.fullmatch('h[1-6]', tag): self.headings.append(int(tag[1]))
        if tag == 'meta': self.meta[a.get('name', a.get('property', ''))] = a.get('content')
        if tag == 'link' and a.get('rel') == 'canonical': self.canonical.append(a['href'])
        if tag == 'title': self.in_title = True
        if tag == 'script' and a.get('type') == 'application/ld+json': self.in_json = True
    def handle_data(self, data):
        if self.in_title: self.title += data
        if self.in_json: self.json_text += data
    def handle_endtag(self, tag):
        if tag == 'title': self.in_title = False
        if tag == 'script' and self.in_json:
            parsed = json.loads(self.json_text)
            self.schemas.extend(parsed if isinstance(parsed, list) else [parsed])
            self.json_text, self.in_json = '', False

def verify(base=None):
    root = Path('dist')
    def read(route):
        if base:
            with urlopen(base.rstrip('/') + route, timeout=30) as response:
                assert response.status == 200, (route, response.status)
                return response.read().decode('utf-8')
        path = root / route.lstrip('/')
        return (path / 'index.html' if path.is_dir() else path).read_text(encoding='utf-8')
    paths = ['/' + p.relative_to(root).as_posix().removesuffix('index.html') for p in root.rglob('*.html') if p.name != '404.html']
    pages = {r: Page(read(r)) for r in paths}
    errors, titles, descriptions = [], set(), set()
    public = {r:p for r,p in pages.items() if 'noindex' not in p.meta.get('robots', '')}
    def check(ok, *message):
        if not ok: errors.append(message)
    for route, page in public.items():
        check(page.headings.count(1) == 1, route, 'primary H1')
        check(len(page.ids) == len(set(page.ids)), route, 'duplicate IDs')
        check(all(i in page.ids for i in page.labels), route, 'missing ARIA reference')
        check(all(b <= a+1 for a,b in zip(page.headings,page.headings[1:])), route, 'heading hierarchy')
        check(page.title and page.title not in titles, route, 'unique title')
        check(page.meta.get('description') and page.meta['description'] not in descriptions, route, 'unique description')
        titles.add(page.title); descriptions.add(page.meta.get('description'))
        check(page.canonical == ['https://intuise.com'+route], route, 'canonical')
        check(page.meta.get('og:url') == 'https://intuise.com'+route, route, 'OG URL')
        check(page.meta.get('og:title') == page.title, route, 'OG title')
        check(page.meta.get('og:description') == page.meta.get('description'), route, 'OG description')
        check(bool(page.meta.get('og:image')), route, 'OG image')
        nodes = {n.get('@id'):n for n in page.schemas if n.get('@id')}
        check('https://intuise.com/#organization' in nodes, route, 'organization entity')
        for node in page.schemas:
            check(bool(node.get('@type')),route,'schema type')
            if node.get('@type') == 'Service': check(node.get('provider',{}).get('@id') in nodes, route, 'service provider')
        for href in page.links:
            u = urlsplit(href)
            if u.scheme or u.netloc: continue
            target = unquote(u.path) or route
            if target in pages:
                check(not u.fragment or unquote(u.fragment) in pages[target].ids,route,'fragment',href)
            else: check((root / target.lstrip('/')).is_file(),route,'local destination',href)
    sitemap = {n.text for n in ET.fromstring(read('/sitemap-0.xml')).iter() if n.tag.endswith('loc')}
    check(sitemap == {'https://intuise.com'+r for r in public}, 'sitemap coverage and exclusions')
    check('Allow: /' in read('/robots.txt'), 'robots allow')
    llms = read('/llms.txt')
    for destination in re.findall(r'\]\((https://intuise.com[^)]+)\)', llms):
        u = urlsplit(destination)
        check(u.path in pages or (root/u.path.lstrip('/')).is_file(), 'llms destination',destination)
    registry = json.loads(read('/components.json'))
    for component in registry['components']:
        html = read(component['documentation'])
        for key in component['content']: check('id="'+key+'"' in html, component['name'],'documentation section',key)
    for resource in ['/tokens.json','/patterns.json']: json.loads(read(resource))
    check('AI-first' in read('/'), 'homepage static entity text')
    check('Human' in read('/fix-your-ui-ux/') or 'human' in read('/fix-your-ui-ux/'), 'human review guidance')
    if base: ET.fromstring(read('/sitemap.xml'))
    result = {'base':base or 'dist','publicPages':len(public),'sitemapURLs':len(sitemap),'errors':errors}
    print(json.dumps(result,indent=2))
    return result

if __name__ == '__main__':
    parser = argparse.ArgumentParser(); parser.add_argument('--base'); parser.add_argument('--output')
    args = parser.parse_args(); result = verify(args.base)
    if args.output: Path(args.output).write_text(json.dumps(result,indent=2),encoding='utf-8')
    raise SystemExit(bool(result['errors']))
