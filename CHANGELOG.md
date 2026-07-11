# Changelog

## Unreleased

- Added an isolated `/legacy/` Astro route as a manual visual reference for the previous Intuise site.
- Excluded unverified client logos, placeholder testimonials, and sensitive product imagery from the legacy reconstruction.

## Unreleased — Angular to Astro migration

### Added

- Astro 7 static architecture, React Solution Finder island, typed content data, design tokens, metadata, JSON-LD, sitemap, robots, llms.txt, 404 page, and Netlify configuration.
- New IA: Hero, Who We Help, Featured Case Study gate, Solution Finder, Why Intuise, Process, Trust, Intuise Games, Insights, FAQ, Contact, Footer.
- Safe contextual mailto utility with tests.
- Audit, provenance, architecture, SEO, Netlify, security, QA, migration, and rollback documentation.

### Changed

- Temporary logo treatment reverted from an unverified CSS mark to a centralized textual fallback.
- Hero now emphasizes “intuitive,” names the audiences and work types, and exposes the following section on mobile.
- Trust content uses verifiable delivery standards instead of unapproved testimonials or logos.
- Package manager metadata is aligned to the existing npm lockfile.

### Removed from production runtime

- Angular runtime, Angular CLI configuration, Tailwind/PostCSS configuration, Karma, Zone.js, and Angular SPA routing.
- WhatsApp as the primary conversion path.
- Unverified third-party logo strips and any new client metrics/outcome claims. Existing Kantara and Sanlog compositions remain in use as pre-Astro source-of-truth assets.

### Archived

- The complete pre-migration Angular source/config snapshot at `archive/angular-working-tree/`.

### Known unresolved

- Approved Intuise master logo, client permissions/NDA, case-study evidence, testimonials, Intuise Games destination, production analytics, and final production CSP verification.
