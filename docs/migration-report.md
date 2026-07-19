# Migration Report

The former Angular visual direction is preserved as an independently deployed application at `/legacy/`. Its dependencies, source, build, and release lifecycle live in `zain3x/intuise-legacy`; the main website remains Astro and Netlify composes the applications at the route boundary. See `docs/legacy-page.md` for source and provenance decisions.

Angular is no longer the production runtime. The pre-existing working tree was archived before replacement. Astro generates static HTML; React is limited to one idle-hydrated Solution Finder island.

Preserved: full source/assets archive, visual palette, typography hierarchy, abstract gradient, city background, existing Kantara/Sanlog compositions, UX illustrations, editorial spacing, focus/skip-link/reduced-motion behavior, and maintainable single-page orientation.

Removed from the primary production build: Angular CLI/runtime/testing, SPA routing, and Tailwind PostCSS. Those tools now live in the independent legacy repository.

Added: modular Astro shell, typed content, safe mailto utility/test, complete target IA, static SEO/AI-discovery foundation, Netlify config, security headers, asset provenance, QA evidence, and rollback documentation.

Remaining blockers: master logo, client/NDA permission, verified case outcome, testimonials, Intuise Games URL, language approval, production analytics, and Netlify dashboard validation.
