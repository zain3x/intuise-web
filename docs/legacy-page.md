# Legacy Angular Project

## Purpose and URL

`/legacy/` preserves the former Intuise website as an independently deployed Angular application. The primary website remains Astro, and the route is not linked from public navigation.

## Source

- Repository: `https://github.com/zain3x/intuise-legacy`
- Code authority: the former `main` branch snapshot at commit `a37fa58`
- Local sibling: `../intuise-legacy`
- The tracked `legacy/` directory in this repository is a migration snapshot, not a production build input.

## Deployment architecture

1. `intuise-web` builds and deploys the Astro site independently.
2. `intuise-legacy` builds and deploys the Angular site independently.
3. Netlify routes `/legacy` and `/legacy/*` from the primary site to the legacy project.

Angular uses `<base href="/legacy/">`, publishes beneath a `/legacy/` artifact directory, and resolves assets from `/legacy/assets/`.

## Isolation

- Angular dependencies and configuration live in the `intuise-legacy` repository.
- Astro does not import Angular code or CSS.
- Either project can deploy and roll back without rebuilding the other.
- The public route remains on `intuise.com`, so users do not cross origins.

## Validation

- Run `npm run validate` in this repository for the Astro application.
- Run `npm run build` in `intuise-legacy` for the Angular application.
- Use Netlify draft deploys to verify `/`, `/design-system/`, `/legacy/`, the Angular JavaScript bundle, and `/legacy/assets/` before production.

## Maintenance

Make all legacy changes in `zain3x/intuise-legacy`. Keep the Netlify path contract and Angular base path aligned at `/legacy/`.

## Deferred work

- Search-engine exclusion and sitemap handling.
- Third-party logo and testimonial permission audit.
- Sensitive project/asset review.
- Pixel-level refinements against the supplied screenshot.
