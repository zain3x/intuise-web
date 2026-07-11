# Intuise.com ENC Plan

Status: Migration implemented; manual brand/content approvals remain
Last audited: 11 July 2026
Current implementation: Astro static site on `feature/refresh-intuise-web`
Pre-migration source: `archive/angular-working-tree/`

## Source of truth

Use the following precedence whenever sources conflict:

1. The complete pre-implementation working tree—code, content, assets, routes, styles, and rendered behavior—is the master source of truth for what exists today. A redesign task must inventory and preserve these sources before replacing anything.
2. Verified client approvals, public URLs, analytics, and written permissions are the source of truth for claims and proof.
3. `docs/intuise-master-prompt-dan-catatan-meeting.docx` is the ENC brief: intended positioning, experience, content direction, and target architecture.
4. Unverified statements remain `TODO` and must not be published as facts.

The ENC brief does not retroactively describe the pre-migration site. Implemented Astro behavior is now current repository truth; unverified case-study claims, testimonials, logos, metrics, and Article/Case Study schema remain TODO until evidence and permission are recorded. Git `HEAD` is retained as provenance for committed behavior, but it must not silently override the archived pre-existing working tree.

## Existing state summary

- The current site is an Angular 19 single-page application, not Astro. React is not present.
- The application builds successfully. The production initial bundle is approximately 337.5 kB raw / 90.8 kB estimated transfer.
- The page currently contains: fixed navigation, hero, two selected-work entries, capabilities, design-engineering bridge, four-step process, about/fit, WhatsApp contact CTA, and footer.
- The current visual system already has a distinctive dark editorial direction, tosca signal color, oversized Manrope typography, grid/ruler motifs, strong whitespace, and restrained motion.
- The visible header mark in the audited working tree is not a stored logo asset. It is drawn by `.brand-mark` CSS. The committed `HEAD` version used a typographic “INTUISE / UX Solution” wordmark. Neither should be treated as permission to redesign the identity; the approved master logo asset must be located or supplied before logo changes.
- Existing source assets include portfolio imagery, device mockups, UX illustrations, backgrounds, solution-state icons, Sanlog imagery, and five small logo files. The logo files visually contain Microsoft, ThinkPad, GOTO, GitLab, and another mark; their role and usage permission are unverified and they must not be presented as clients or partners without approval.
- Current content positions Intuise around product design, UX engineering, design systems, and frontend implementation.
- Current portfolio content names Kantara DSM and Santoso Logistic. Permission, NDA status, public URLs, and exact claims are not recorded in the repo.
- Existing SEO includes title, description, canonical URL, robots directive, Open Graph basics, and Twitter metadata. There is no verified sitemap, robots.txt file, JSON-LD, article/case-study schema, or social preview image in the inspected implementation.
- Accessibility foundations include semantic landmarks and headings, a skip link, visible focus treatment, reduced-motion CSS, descriptive image alt text, an accessible mobile-menu button, and Escape-to-close behavior.
- The working tree already contains extensive uncommitted edits and deletions. These changes must be preserved and reviewed before architectural migration.

Audit evidence:

- [Desktop hero](audit/01-current-desktop.png)
- [Selected work](audit/02-current-selected-work.png)
- [Mobile hero](audit/03-current-mobile.png)

## Keep / Improve / Add / Remove

| Keep                                                                                     | Improve                                                                                                 | Add                                                                                                    | Remove                                                                                               |
| ---------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------- | ------------------------------------------------------------------------------------------------------ | ---------------------------------------------------------------------------------------------------- |
| Approved Intuise logo/wordmark and existing brand identity; do not redraw it             | Rewrite hero so “intuitif” is the main emphasis and the audience/outcome is clear within five seconds   | Who We Help relevance layer                                                                            | The CSS-drawn replacement mark once the approved logo asset is restored                              |
| Dark editorial visual language and tosca signal color                                    | Audit and map every existing asset to keep/reuse/archive before sourcing anything new                   | Asset inventory with provenance, usage, permission, and destination                                    | Kantara from public surfaces if NDA/permission cannot be verified                                    |
| Strong typographic hierarchy, whitespace, and precision motifs                           | Reduce mobile hero height toward 60–70vh while preserving a visible next-section cue                    | One verified featured case study using problem → decisions → solution → verified outcome               | Unverified claims, client details, metrics, and testimonials                                         |
| Fixed navigation, skip link, focus styles, semantic headings, and reduced-motion support | Align navigation labels and anchors with the proposed IA                                                | Interactive “What Are You Building?” solution finder                                                   | WhatsApp as the primary conversion path once the email CTA is implemented                            |
| Current portfolio imagery where usage rights are verified                                | Resolve mobile hero density and ensure the visual does not push the next section too far below the fold | Why Choose Us with four evidence-backed differentiators                                                | Duplicate or decorative content that does not support positioning, proof, exploration, or conversion |
| Four-step process structure as the basis for the final 3–5 stages                        | Replace generic capability copy with explicit problems, decisions, services, and outcomes               | Testimonials/trust, Intuise Games highlight, Insights, FAQ/design principles, and contextual email CTA | Angular-only scaffolding only after an approved Astro migration ADR and parity check                 |
| Current design tokens as visual reference during migration                               | Complete metadata, structured data, canonical/OG assets, sitemap, robots.txt, and internal linking      | Loading, error, empty, active, hover, focus, and selected states where behavior requires them          | Stale generated README text and dead project-route artifacts during the documentation/cleanup task   |

## Proposed single-page information architecture

1. **Navigation** — Work, Solutions, Why Intuise, Process, Insights, Contact.
2. **Hero** — who Intuise helps, what it improves, enterprise-grade design-to-code outcome, and “intuitif” emphasis; primary CTA opens solution exploration, secondary CTA goes to contact.
3. **Who We Help** — recognizable business/product contexts linked to relevant proof or demos.
4. **Featured Case Study** — one public, permission-cleared case with problem, decisions, solution, and verified outcome.
5. **What Are You Building?** — selectable solution types, relevant demo/mini-case, and contextual “Request a Similar Solution” action.
6. **Why Choose Us** — enterprise-grade product thinking, no design-to-code translation gap, AI-assisted speed with human review, and systems the client can continue.
7. **Our Process** — Understand → Shape → Design & Build → Validate → Handover.
8. **Testimonials / Trust** — verified quotes, logos, public links, credentials, or evidence; omit rather than fabricate.
9. **Intuise Games Highlight** — one exploratory card linking to the separate site.
10. **Did You Know / Insights** — crawlable articles or summaries on UX, product, frontend, AI-assisted workflow, and future interfaces.
11. **FAQ / Design Principles** — direct answers that clarify engagement model, handover, accessibility, AI use, and collaboration.
12. **Final Contact CTA** — short email action to `rindra@intuise.com`, prefilled with solution-finder context when available.
13. **Footer** — entity information, internal navigation, contact, legal/copyright, and separate Intuise Games link.

## Blocking verification and TODOs

- `TODO — BLOCKING CASE STUDY`: confirm whether Kantara may appear publicly, which details are permitted, and whether its current imagery is licensed for the website.
- `TODO — BLOCKING BRAND`: identify the approved Intuise master logo/wordmark file and its variants. Do not create or ship a replacement mark until this is resolved.
- `TODO — BLOCKING ASSET CLAIMS`: confirm what the Microsoft, ThinkPad, GOTO, GitLab, and unidentified logo files represent and whether they may be displayed publicly.
- `TODO — BLOCKING CASE STUDY`: confirm whether the public logistics project should be called Sanlog, Santoso Logistic, or another approved name; provide its public URL and approved claims.
- `TODO — BLOCKING TRUST`: provide approved testimonials, names/roles, company attribution, logos, and permission. If unavailable, replace this section with verifiable trust signals.
- `TODO — BLOCKING LINK`: provide the final Intuise Games URL and approved description.
- `TODO — CONTENT FREEZE`: confirm whether the public website remains English-only or needs Indonesian/localized content.
- `TODO — OUTCOME PROOF`: provide verified qualitative outcomes, measurable results, or permission to use non-metric evidence for the featured case.
- `TODO — INSIGHTS`: identify existing articles or approve initial topics; do not create implied publication history.

## Reviewable implementation tasks

1. **Baseline and preservation** — inventory the dirty working tree, capture the current page, document the existing IA/tokens/components, identify the approved logo, catalogue every existing asset, and tag all unverifiable content. Verification: clean build, desktop/mobile baseline screenshots, and an approved Keep/Reuse/Archive asset matrix.
2. **Content and evidence gate** — resolve case-study, NDA, testimonial, language, Intuise Games, and outcome TODOs. Verification: written approval matrix with source links.
3. **Architecture ADR** — compare preserving Angular with migrating to Astro plus React islands; select the migration path, deployment model, URL compatibility, and rollback strategy. Verification: approved ADR before framework changes.
4. **Content model and SEO map** — define section copy contracts, metadata, schema entities, internal links, sitemap, robots, canonical, and Open Graph requirements. Verification: content/schema checklist without fabricated claims.
5. **Visual direction review** — produce at most three visual directions grounded in the current design; select one before implementation. Verification: explicit direction approval and Keep/Change rationale.
6. **Foundations vertical slice** — implement navigation, base tokens, responsive type/spacing, focus behavior, and the revised hero. Verification: mobile/desktop visual QA, keyboard pass, reduced-motion pass, and five-second clarity review.
7. **Proof vertical slice** — implement Who We Help and one verified Featured Case Study. Verification: claim-by-claim evidence check and responsive/a11y QA.
8. **Solution finder vertical slice** — implement static crawlable solution content plus a React island only for selection/state/context handoff. Verification: keyboard interaction, selected/loading/error/empty states, no-JavaScript fallback, and contextual mailto output.
9. **Differentiation and process slice** — implement Why Choose Us and the five-stage process using evidence-backed copy. Verification: hierarchy, scanability, and content review.
10. **Trust and exploration slice** — implement verified trust, Intuise Games card, Insights, and FAQ. Verification: outbound links, permissions, structured data, and static HTML availability.
11. **Conversion and footer slice** — replace the primary WhatsApp path with the short contextual email CTA and complete footer entity/navigation content. Verification: encoded mailto content and fallback behavior.
12. **Release QA and handover** — run responsive, keyboard, screen-reader semantics, contrast, Lighthouse/performance, schema, metadata, link, content, and deployment checks; update README, CHANGELOG, architecture, QA, and handover docs. Verification: human review gate before deployment.

## Audit limits

This audit validates the rendered landing page, repository structure, build output, semantic DOM, and visible responsive states. It does not establish full WCAG compliance, production analytics, real-device behavior, client permission, NDA status, content accuracy, or production SEO indexing. Those require separate evidence and testing.
