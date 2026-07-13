# Legacy Angular Project

## Purpose and URL

`/legacy/` preserves the former Intuise website as an independently built Angular application. The primary website remains Astro. The route is not linked from the primary navigation.

## Source

- Visual authority: the user-supplied full-page screenshot of the former live Intuise.com.
- Code authority: branch `main` at commit `a37fa58`.
- Source location: `legacy/`.
- No branch checkout, merge, rebase, or cherry-pick was used; the selected files were exported read-only from the commit.

## Build architecture

1. `npm run build:astro` creates the primary static site in `dist/`.
2. `npm run build:legacy` installs and builds the independent Angular project.
3. `scripts/assemble-legacy.mjs` replaces the Astro placeholder route output with the Angular browser build at `dist/legacy/`.

Angular uses `<base href="/legacy/">`, and legacy assets resolve from `/legacy/assets/`. No iframe or second server is required in production.

## Isolation

- Angular dependencies and configuration live only in `legacy/`.
- Astro does not import Angular code or CSS.
- The legacy bundle does not alter the Astro homepage, design system, or global styles.
- The legacy project has its own `package.json` and lockfile.

## Assets and provenance

The legacy assets reproduce files present in the previously public `main` snapshot. They are kept inside `legacy/src/assets/` to avoid collisions with current Astro assets. A follow-up review is still required for third-party marks, testimonial imagery, client/project permissions, and photography provenance.

## Validation

Run `npm run validate`. The command checks the Astro application, tests it, builds both projects, and assembles the final output. Then run `npm run preview` and verify `/`, `/design-system/`, and `/legacy/`.

## Maintenance

Update the archive from within `legacy/`. Do not add Angular dependencies to the root application. If the Angular output path changes, update `scripts/assemble-legacy.mjs`.

To remove the route, delete `legacy/`, remove the legacy build and assembly scripts from the root `package.json`, delete `scripts/assemble-legacy.mjs`, and rebuild.

## Deferred work

- Search-engine exclusion and sitemap handling.
- Third-party logo and testimonial permission audit.
- Sensitive project/asset review.
- Pixel-level refinements against the supplied screenshot.
