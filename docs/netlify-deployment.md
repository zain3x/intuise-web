# Netlify Deployment

- Build command: `npm run build`
- Publish directory: `dist`
- Node: latest Node 22 (local lint parser expects 22.22.3+)
- npm: 11.3.0
- Astro mode: static
- Adapter/functions/edge functions/forms: none
- SPA fallback: none
- Environment variables: none required

`netlify.toml` applies security headers globally and immutable caching to hashed `/_astro/` assets. Preserved legacy assets use a one-week cache because filenames are not content-hashed. Deploy Preview and branch deploy use the same deterministic build.

Manual verification: connect the existing Netlify site; confirm production domain/canonical; check preview noindex behavior in site settings; inspect response headers; verify CSP with Google Fonts and React hydration; confirm HTTPS/HSTS is managed as expected; check custom domain and redirects; then approve production deploy.

Rollback is documented in `rollback-plan.md`. No secret belongs in `netlify.toml`.
