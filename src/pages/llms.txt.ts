import { company, ecosystem } from '../data/ecosystem';
import { knowledge } from '../data/knowledge';
import {
  capabilities,
  primaryResources,
  productContexts,
} from '../data/discovery';
import { work } from '../data/work';
export function GET() {
  const text = [
    `# ${company.name}`,
    '',
    company.description,
    company.approach,
    '',
    `Contact: ${company.email}`,
    '',
    '## Primary',
    ...primaryResources.map(
      (r) => `- [${r.name}](${new URL(r.href, company.url)})`,
    ),
    '',
    '## Capabilities',
    ...capabilities.map(
      (c) => `- [${c.name}](${new URL(c.href, company.url)}): ${c.detail}`,
    ),
    productContexts,
    '',
    '## Selected work',
    ...work.map(
      (p) =>
        `- [${p.title}](${new URL(p.documentation, company.url)}): ${p.description}`,
    ),
    '',
    '## Services and ecosystem',
    ...ecosystem.map(
      (e) =>
        `- [${e.name}](${new URL(e.href, company.url)}): ${e.description} Status: ${e.status}.`,
    ),
    '',
    '## Public knowledge',
    ...knowledge.map(
      (k) => `- [${k.title}](${company.url}ai/${k.slug}/): ${k.description}`,
    ),
    '',
    '## Machine-readable resources',
    ...['components.json', 'tokens.json', 'patterns.json'].map(
      (f) => `- [${f}](${company.url}${f})`,
    ),
    '',
    'Components are in development. No installable package or MCP service is available. No application releases are listed yet. Insights are an editorial roadmap, not published articles.',
    '',
  ].join('\n');
  return new Response(text, {
    headers: { 'Content-Type': 'text/plain; charset=utf-8' },
  });
}
