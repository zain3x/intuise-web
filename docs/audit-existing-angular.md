# Existing Angular and Working Tree Audit

Audit date: 11 July 2026
Branch: `feature/refresh-intuise-web`
Baseline commit: `a37fa58`
Node/npm observed: Node `v22.14.0`, npm `11.3.0`

## Repository state before migration

No files were staged. The working tree already contained modified Angular configuration, package metadata, application shell, home page, routes, styles, tests, and deletions of the Sanlog detail route. Untracked state included `.claude/settings.local.json`, `.netlify/state.json`, the ENC plan, meeting DOCX, and audit screenshots. These are pre-existing user changes and were not reset.

Modified: `angular.json`, `package.json`, application shell files, route files, home component files, `src/index.html`, and `src/styles.scss`. Deleted before migration: the four `src/app/project/web-sanlog/*` files. Untracked before migration: `.claude/`, `.netlify/`, and `docs/`.

## Existing architecture and behavior

- Angular 19 SPA with one active route (`/`) and wildcard redirect.
- Fixed header, responsive menu, single long-form landing page, and footer.
- Sections: Hero, Selected Work, Capabilities, Advantage bridge, Process, About/Fit, Contact.
- Client interaction was limited to the menu and in-page anchors.
- Contact used WhatsApp. Content named Kantara DSM and Santoso Logistic without a repository-based approval record.
- Production build before migration passed at 337.52 kB raw initial assets / 90.78 kB estimated transfer.

## Visual system

- Dark ink surfaces, warm paper/fog sections, bright tosca signal color.
- Manrope display typography and Inter body typography loaded from Google Fonts.
- Oversized editorial headings, grid/ruler motifs, thin borders, strong whitespace, and restrained hover movement.
- Focus outline, skip link, semantic headings, alt text, and reduced-motion overrides existed.
- Working-tree `.brand-mark` was CSS-drawn and is not approved brand authority. Committed `HEAD` used a textual wordmark.

## Deployment and security baseline

- No tracked `netlify.toml` existed. `.netlify/state.json` was local untracked state and is not deployment configuration.
- Angular output was `dist/intuise-web`; no verified SPA redirect or security-header policy existed in tracked files.
- No application secrets, API calls, analytics, or forms were found. Angular analytics contained a CLI analytics UUID.
- Google Fonts were a third-party request; the new static build should document this privacy/performance tradeoff.

## Keep / Reuse / Adapt / Archive / Remove

| Element                                 | Decision                                | Reason                                                             |
| --------------------------------------- | --------------------------------------- | ------------------------------------------------------------------ |
| Tosca/dark/paper palette                | KEEP                                    | Recognizable existing brand language                               |
| Typography hierarchy and whitespace     | ADAPT                                   | Preserve character while improving mobile density                  |
| Abstract `Background-2.png`             | REUSE                                   | Brand-compatible, no visible client claim                          |
| Portfolio/device/client screenshots     | ARCHIVE / REQUIRES APPROVAL             | Potential NDA, ownership, and claim risk                           |
| Third-party logos `image_20`–`image_24` | ARCHIVE / REQUIRES APPROVAL             | Relationship and public-use status unverified                      |
| CSS `.brand-mark`                       | REMOVE FROM PRODUCTION                  | Newly invented mark, not brand authority                           |
| Textual wordmark                        | TEMPORARY FALLBACK                      | Most conservative existing treatment until master logo is supplied |
| Angular runtime/config                  | ARCHIVE THEN REMOVE                     | Replaced by Astro static architecture after verified snapshot      |
| Skip link, focus, reduced motion        | KEEP                                    | Strong accessibility foundation                                    |
| Kantara and Santoso public claims       | REMOVE FROM PRODUCTION PENDING APPROVAL | No repository evidence of permission or verified outcome           |

## Migration risks and TODO

- BLOCKING BRAND: approved master Intuise logo is still missing.
- BLOCKING PROOF: client permission, NDA status, names, screenshots, and outcomes are not verified.
- MANUAL: production domain, Netlify site settings, analytics, and CSP behavior require dashboard/browser verification.
- NON-BLOCKING: archived Angular snapshot remains available at `archive/angular-working-tree/` for rollback and provenance.

The complete pre-migration source/config snapshot was copied to `archive/angular-working-tree/` before Angular runtime files were replaced.
