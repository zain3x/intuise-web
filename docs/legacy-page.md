# Legacy Visual Reference

## Purpose and URL

`/legacy/` is a static visual reference for the previous Intuise website. It supports design comparison and future refinement; it is not a second application or a canonical content source. The route is intentionally absent from public navigation and can only be reached by entering its URL manually.

## Visual source

- Branches compared: local `main` at `a37fa58` and `develop` at `fc0bdbf`. Both contain an older Tailwind-oriented direction that does not match the final pre-migration QA screenshots.
- Primary visual source: `archive/angular-working-tree/`, captured from the final Angular working tree immediately before migration.
- Files used: `src/app/app.component.html`, `src/app/app.component.scss`, `src/app/home/home.component.html`, `src/app/home/home.component.scss`, `src/app/home/home.component.ts`, `src/styles.scss`, and `src/variable.scss` inside the archive.
- Visual checks: `docs/audit/01-current-desktop.png`, `02-current-selected-work.png`, and `03-current-mobile.png`.

No branch was checked out, merged, rebased, or cherry-picked.

## Asset decisions

### Reused

- `/assets/background.png`: legacy city hero atmosphere.
- `src/assets/hero/frontimage.png`: existing product composition reused through Astro import for the framed hero panel.

### Adapted

- Hero work panel: uses the approved current interface composition in place of the archived Kantara image.
- Project thumbnails: replaced with neutral CSS interface compositions.
- Placeholder copy: replaced with short neutral copy while preserving approximate line lengths and hierarchy.

### Skipped or requires approval

- `iphone-showcase.png`, `Device-Macbook-Pro.png`, and Kantara compositions: possible ownership/NDA concerns.
- `Photo-1.png` through `Photo-4.png`: photography ownership is unclear.
- `image_20.png` through `image_24.png`: Microsoft, ThinkPad, GitLab, GOTO, and an unidentified mark; no verified client relationship or permission.
- Original project names and detailed claims are replaced with neutral descriptions.

No asset was duplicated for the legacy route.

## Preserved visual elements

- Near-black, warm paper/fog surfaces, bright tosca, muted gray text, and restrained grid lines.
- Tight textual Intuise / UX Solution wordmark treatment.
- Fixed dark header, editorial Manrope hero, framed selected-work panel, light project sections, capability rows, design/engineering bridge statement, four-step process, about geometry, signal contact section, and minimal footer.
- Section order: hero, selected work, services, advantage bridge, approach, about, contact, footer.

## Technical differences

- Astro static HTML replaces Angular templates and runtime.
- No Angular dependencies, Angular CLI, animations package, router, SPA fallback, iframe, or second build system.
- Native `details` provides the small-screen menu without JavaScript or hydration.
- Archived component SCSS was translated into scoped Astro styles.
- Fake testimonials, unverifiable logos, and sensitive project imagery were not reproduced.

## Isolation and accessibility

`LegacyLayout.astro` loads the existing legacy base stylesheet, while the refined page styles are Astro-scoped and rooted at `.legacy-root`. The main site's global stylesheet is not imported. The page provides semantic landmarks, one H1, sequential headings, native links/details, visible focus, a skip link, contrast-safe copy, meaningful or decorative labeling, and a reduced-motion fallback.

## Responsive behavior

- Desktop: two-column hero, alternating two-column project rows, capability matrix, horizontal process, and editorial about/contact layouts.
- Tablet: narrower hero panel, balanced project columns, and two-column process.
- Mobile: copy precedes the framed product visual, project rows stack, capability rows simplify, process becomes vertical, and menu uses native details.

## Known limitations

- The page preserves atmosphere rather than exact Angular rendering.
- Manrope and Inter are loaded from Google Fonts because local licensed files are unavailable.
- Sensitive archived project imagery is represented through the approved current composition or neutral CSS art, so visual fidelity is structural rather than pixel-identical.
- Search-engine prevention is intentionally not implemented in this task and must be handled separately.

## Maintenance

To update the route, edit `src/pages/legacy/index.astro`, `src/layouts/LegacyLayout.astro`, and this record together. Shared legacy base CSS should change only when the layout shell itself changes. Re-run `npm run validate`, production build, and responsive QA.

To remove it, delete `src/pages/legacy/index.astro`, `src/layouts/LegacyLayout.astro`, `src/styles/legacy.css`, this documentation, and the three `docs/qa/legacy-*.png` screenshots; then remove the README/CHANGELOG references and rebuild.
