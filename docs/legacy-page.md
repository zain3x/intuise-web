# Legacy Visual Reference

## Purpose and URL

`/legacy/` is a static visual reference for the previous Intuise website. It supports design comparison and future refinement; it is not a second application or a canonical content source. The route is intentionally absent from public navigation and can only be reached by entering its URL manually.

## Visual source

- Primary source branch: local `main` at `a37fa58`.
- Candidate compared: local `develop` at `fc0bdbf`; it is an earlier Angular starting point and was not selected.
- Files read with `git show`: `src/app/app.component.html`, `src/app/app.component.scss`, `src/app/home/home.component.html`, `src/app/home/home.component.scss`, `src/app/home/home.component.ts`, `src/styles.scss`, and `src/variable.scss`.
- The archived equivalents in `archive/angular-working-tree/` remain the provenance and rollback snapshot.

No branch was checked out, merged, rebased, or cherry-picked.

## Asset decisions

### Reused

- `/assets/background.png`: legacy city hero atmosphere.
- `/assets/Background-2.png`: final legacy CTA atmosphere.
- `/assets/intuitive.svg`, `/assets/proffesional.svg`, `/assets/user_proven.svg`, `/assets/user_understand.svg`: existing value illustrations.

### Adapted

- Device showcase: replaced with a neutral CSS-rendered responsive interface composition because the old Prime/Kantara imagery is not approved for this route.
- Solution thumbnails: replaced with neutral gradient interface blocks.
- Placeholder copy: replaced with short neutral copy while preserving approximate line lengths and hierarchy.

### Skipped or requires approval

- `iphone-showcase.png`, `Device-Macbook-Pro.png`, and Kantara compositions: possible ownership/NDA concerns.
- `Photo-1.png` through `Photo-4.png`: photography ownership is unclear.
- `image_20.png` through `image_24.png`: Microsoft, ThinkPad, GitLab, GOTO, and an unidentified mark; no verified client relationship or permission.
- Original testimonial cards: contained placeholder people, quotes, and roles, so the area is represented by an explicit withheld-proof panel.

No asset was duplicated for the legacy route.

## Preserved visual elements

- Near-black background, bright tosca, muted gray text, and limited pink influence.
- Tight textual Intuise / UX Solution wordmark treatment.
- Sticky dark header, uppercase navigation, large uppercase hero, underline accent, gradient-border CTA, translucent cards, large vertical gaps, stepper, insight rhythm, atmospheric CTA, and multi-column footer.
- Section order: hero, solutions, values, process, proof area, insights, final contact, footer.

## Technical differences

- Astro static HTML replaces Angular templates and runtime.
- No Angular dependencies, Angular CLI, animations package, router, SPA fallback, iframe, or second build system.
- Native `details` provides the small-screen menu without JavaScript or hydration.
- Tailwind utility classes were rewritten as isolated CSS.
- Fake testimonials, unverifiable logos, and sensitive project imagery were not reproduced.

## Isolation and accessibility

`LegacyLayout.astro` loads only `legacy.css`; selectors are namespaced with `.legacy-*` and the body uses `.legacy-page`. The main site's global stylesheet is not imported. The page provides semantic landmarks, one H1, sequential headings, native links/details, visible focus, a skip link, contrast-safe copy, meaningful or decorative labeling, and a reduced-motion fallback.

## Responsive behavior

- Desktop: two-column hero, three solution cards, four value cards, horizontal process, editorial insight grid.
- Tablet: reduced hero visual, two-column cards, two-column footer.
- Mobile: copy precedes a smaller neutral device composition, cards stack, process becomes vertical, menu uses native details, and background attachment becomes static.

## Known limitations

- The page preserves atmosphere rather than exact Angular rendering.
- Original Work Sans/Inter are loaded from Google Fonts because local licensed files are unavailable.
- The CSS device placeholder does not reproduce any real product UI.
- Search-engine prevention is intentionally not implemented in this task and must be handled separately.

## Maintenance

To update the route, edit `src/pages/legacy/index.astro`, `src/styles/legacy.css`, and this record together. Re-run `npm run validate`, production build, and responsive QA.

To remove it, delete `src/pages/legacy/index.astro`, `src/layouts/LegacyLayout.astro`, `src/styles/legacy.css`, this documentation, and the three `docs/qa/legacy-*.png` screenshots; then remove the README/CHANGELOG references and rebuild.
