# Intuise ecosystem implementation

> Historical implementation notes. The subsequent AI discovery changes and production deployment on 16 September 2026 are recorded in [AI discovery deployment](ai-discovery-deployment.md), which supersedes the local-only publishing status and earlier page counts below.

## Audit and design decisions

The repository is a static Astro site with a single React Solution Finder island. The live site at https://intuise.com was inspected before implementation. Existing navigation used homepage-only fragments; BaseLayout defaulted every canonical to the homepage. A sitemap, robots.txt, Organization/WebSite/Service metadata, and a static llms.txt already existed.

Preserved: hero assets and layout, Manrope/Inter typography, paper/fog/ink/cyan tokens, existing spacing and motion, audience content, both case studies, Solution Finder, Why Intuise, process, trust, FAQ, contact, and the editorial roadmap. The hero introduction now explicitly identifies the studio.

Ecosystem follows Solution Directions and precedes Why Intuise. Its editorial composition uses a focused service panel and a compact navy Games branch rather than identical cards. The original public Games studies are retained at /games/ in GameStudies.astro. The user's pre-existing IntuiseGames.astro edit remains untouched. The original /#games anchor now targets the Games ecosystem entry. Homepage editorial topics and the Insights roadmap share one data source.

No new framework, library package, image assets, or interactive island was introduced. The small shared navigation script closes the native mobile details menu on navigation or Escape and restores focus on Escape.

## Source of truth

| Source | Consumers |
| --- | --- |
| src/data/ecosystem.ts | Ecosystem, Apps, About, Components principles/taxonomy, Insights, AI knowledge, llms.txt |
| src/data/components.ts | Component detail pages, components.json, patterns.json |
| src/data/knowledge.ts | /ai/ and /ai/[topic]/, discovery links in llms.txt |
| src/styles/tokens.css | Website CSS and generated tokens.json |
| src/data/site.ts | Shared navigation, homepage and UX service directions/process |

JSON endpoints are generated at build time, not served by runtime functions. schemaVersion is explicit. Token values retain CSS expressions, units, and aliases; this is a CSS custom-property registry, not a claim of DTCG compliance. Raw CSS imports are enabled in Vitest so token tests exercise real source values.

The single Action link preview documents the actual website CSS primitive and all requested documentation sections. It does not represent an installable library or native mobile/desktop implementation. The registry reports web support only; responsive browser layouts cover touch and desktop use. Accessibility guidance is a design contract, not certification.

## Routes and publishing

- Public overview and services: /, /ux/, /fix-your-ui-ux/, /components/, /apps/, /games/, /insights/, /about/.
- Public preview: /components/action-link/.
- Knowledge: /ai/, /ai/company/, /ai/products/, /ai/component-library/, /ai/design-principles/.
- Machine resources: /llms.txt, /components.json, /tokens.json, /patterns.json.
- /apps/[product] uses getStaticPaths from approved product data. It currently generates no product detail pages. Unknown products/components resolve to the existing 404.
- The design-system page remains noindex and excluded from the sitemap.

New pages use unique title/description/canonical, WebPage and BreadcrumbList metadata. UX and Fix Your UI/UX also use Service. Existing homepage Organization and WebSite remain. No Article or SoftwareApplication schema is added because no reviewed article or approved app listing was supplied.

To publish a component, add a typed registry entry with reviewed implementation, all documentation fields, and an accurate status. To publish an app, add approved information to products in ecosystem.ts. Add app-specific structured data only when real application details support it. Future packaging, templates, pricing, subscriptions, MCP/API access, and native adapters require separate implementation; none are advertised as available.

## Verification and limits

- Astro check: 0 errors, 0 warnings, 0 hints.
- ESLint passed. Five unit tests passed, including documentation/registry parity, real CSS token export, and ecosystem discovery consistency.
- Static build: 16 HTML pages; sitemap has 14 public HTML routes.
- Built HTML checked for local destinations, fragment IDs, duplicate IDs, ARIA label references, heading order, canonical URLs, descriptions, and sitemap coverage. No errors found.
- Browser responsive checks: homepage, Fix Your UI/UX, Components, and Action link at 1920×1080, 1366×768, 1024×768, 768×1024, and 390×844. No horizontal overflow. Additional supporting routes checked at mobile width.
- Mobile menu opens, Escape closes and returns focus, and navigating closes the menu. Existing Dashboard selection in Solution Finder still updates its direction. Component documentation anchors work. Browser console inspection returned no warnings/errors.
- Homepage case-study images initially reported as pending in the automated snapshot because they are lazy loaded. Scrolling to the work section confirmed all three loaded successfully. This is not an asset failure.
- New pages use static semantic HTML; core content and resources do not depend on client-side JS. Reduced-motion CSS is inherited. Contrast/focus treatment on light editorial surfaces uses the existing deeper teal token.
- This is browser viewport QA and accessibility sanity checking, not physical-device testing, formal accessibility certification, or a measured Lighthouse/Core Web Vitals audit. Existing hero assets and external font loading remain.

Screenshots and machine check results are in snapshots/ecosystem-2026-09-15/. The evidence index is snapshots/ecosystem-2026-09-15/README.md.

Implementation is local on the existing feature/refresh-intuise-web branch. No commit, push, or production deployment was performed. Pre-existing editor changes, games-site/, remote attachments, and other snapshots remain outside this change's scope.
