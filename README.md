# Intuise.com

Static-first Intuise UX landing experience built with Astro, TypeScript, and one React island for the interactive Solution Finder.

## Stack and prerequisites

- Node 22 (Netlify uses the latest Node 22 release; local lint tooling currently expects Node 22.22.3 or newer)
- npm 11
- Astro static output
- React only for `SolutionFinder.tsx`

## Commands

```bash
npm install
npm run dev
npm run build
npm run preview
npm run validate
npm run security:audit
```

`validate` runs Astro check, ESLint, Prettier check, unit tests, and the production build. Output is written to `dist/`.

## Design system

Run the site and open `http://localhost:4321/design-system/` for the living foundation documentation. The route documents color, typography, spacing, layout, controls, cards, Solution Finder behavior, imagery, motion, and accessibility. It is intentionally `noindex, nofollow` and excluded from the sitemap while the master logo and asset approvals remain unresolved.

Tokens live in `src/styles/tokens.css`, shared primitives in `src/styles/global.css`, and route-specific documentation layout in `src/styles/design-system.css`. Keep the system small: add a token or component only when it solves a repeated product need.

## Structure

```text
src/components/       Static brand/layout components and the React island
src/data/             Typed navigation, content, and Solution Finder options
src/layouts/          Shared metadata, schema, header, and footer shell
src/pages/            Static routes
src/styles/           Design tokens and global responsive styles
src/utils/            Safe contextual mailto generation
public/assets/        Preserved legacy assets; not all are approved for use
archive/              Pre-migration Angular working-tree snapshot
docs/                 Audit, architecture, QA, security, and handover records
```

## Editing content

- Landing copy and Solution Finder options: `src/data/site.ts` and `src/pages/index.astro`.
- Case studies: existing Kantara/Sanlog naming and compositions are treated as pre-Astro source truth. Do not add further imagery, metrics, outcomes, or client claims until the approval TODOs in `docs/asset-inventory.md` are resolved.
- Insights: current cards are explicitly an editorial roadmap, not published articles. Add reviewed pages before adding Article schema.
- Solution Finder: keep data typed in `src/data/site.ts`; keep mailto generation centralized in `src/utils/mailto.ts`.

## Logo status

The approved Intuise master logo was not found. `BrandLogo.astro` is a centralized, temporary textual wordmark based on existing repository treatment. Do not recreate a symbol or treat the archived CSS `.brand-mark` as approved.

## Netlify

- Build: `npm run build`
- Publish: `dist`
- Output: fully static; no adapter, Functions, Edge Functions, or SPA fallback
- Node: 22

Connect the existing Netlify site, run a Deploy Preview, and complete the manual checks in `docs/netlify-deployment.md`. No secrets are required by the current application.

## Security and limitations

The site sends no form data to a backend. Contact uses encoded `mailto:` links. CSP and security headers are configured in `netlify.toml`, but production header behavior and external Google Fonts require Deploy Preview verification. Client permissions, NDA status, testimonials, project outcomes, third-party logos, and the master logo remain manual approval blockers.
