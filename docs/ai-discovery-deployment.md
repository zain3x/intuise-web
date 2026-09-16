# AI discovery deployment — 16 September 2026

## Production

- URL: https://intuise.com/
- Netlify site: `intuise`, ID `b4b48ea9-a4ef-4943-83cd-029f856ab829`.
- Published deploy: `6aaa135dfe77d220db611bf1` at 10:58 WIB.
- Deploy record: https://app.netlify.com/projects/intuise/deploys/6aaa135dfe77d220db611bf1
- The exact verified draft was published through the official Netlify API using the existing authenticated CLI session. The plugin connector required reauthentication; CLI status did not finish.
- Only the built dist directory was uploaded. Redirects and headers were generated from the existing Netlify configuration and included in the artifact.
- Production was deployed from the local build before the source commit; deployment and Git delivery are separate operations.

## Implemented

- Shared studio identity, capabilities, product contexts, and resource links in `src/data/discovery.ts`.
- Human-readable AI-first positioning with explicit human review; content remains available in static HTML.
- Stable Organization and WebSite entity references, page-specific WebPage/BreadcrumbList, supported Service and CreativeWork schemas, unique metadata and correct canonicals.
- Work index and two existing case-study detail pages, plus a dedicated Contact page. No invented clients or outcome metrics.
- Expanded component documentation and JSON registry covering behavior, inputs, outputs, slots, dependencies, examples, limitations, incompatibilities, and migration notes.
- Generated llms.txt, AI knowledge pages, component/token/pattern JSON, and sitemap.xml alias. Component-library aliases redirect to the canonical Components page.

## Existing preserved

- Hero image assets, CSS, sticky layout, overlap, stacking order, and foreground motion.
- Production desktop and mobile hero measurements match the pre-change live site exactly at the tested scroll positions. Both image URLs remain unchanged and loaded successfully.
- Existing visual language, core homepage sections, case-study evidence, Solution Finder, and existing Netlify proxy/security configuration.
- Pre-existing editor configuration and Games component edits were preserved.

## Verification

- Astro check: zero errors, warnings, or hints across 50 files.
- ESLint: passed. Unit tests: five passed across two files.
- Production build: passed, 20 HTML pages including non-public pages.
- Static, draft HTTP, and production HTTP discovery checks: no errors; 18 public pages and 18 sitemap URLs.
- Canonicals, unique titles/descriptions, OG consistency, JSON-LD syntax/entity references, internal destinations/fragments, headings, IDs, ARIA references, robots, llms, sitemap, and registry parity checked.
- Browser: seven key routes at 1440px and 390px; no horizontal overflow. Mobile navigation Escape behavior and focus return passed. No browser console warnings/errors observed.
- Production hero desktop/mobile comparison passed. This is targeted browser verification, not a formal accessibility certification or Core Web Vitals benchmark.

Evidence is in `snapshots/ai-discovery-2026-09-16/`, especially:

- `production-verification.json`
- `production-hero-comparison.json`
- `production-desktop-overlap.png`
- `production-mobile-overlap.png`
- `draft-browser-checks.json`

## Limits and future integration

- Components remains an early foundation with one documented real CSS Action link primitive, not an installable package or native adapter library.
- App detail pages await approved product data. No unsupported SoftwareApplication or Article schema was invented.
- No new MCP server, backend, or agent execution API was added. Static structured resources provide a foundation for future integrations.
- Discovery, entity understanding, services, Components, and Fix Your UI/UX now have crawlable content and linked machine-readable resources. Indexing and inclusion in AI answers are controlled by external systems and are not guaranteed.
