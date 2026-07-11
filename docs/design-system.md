# Intuise Design System Foundation

## Purpose

This foundation turns repeated decisions from the current Astro implementation and the preserved Angular visual language into reusable tokens, primitives, and guidance. It is intentionally smaller than a general-purpose component library.

Living documentation: `/design-system/`

## Source hierarchy

1. The pre-redesign repository and preserved Angular archive remain the visual and asset source of truth.
2. `docs/ENC-PLAN.md` defines product and implementation intent.
3. `src/styles/tokens.css` is the code source of truth for foundation values.
4. `src/styles/global.css` contains shared primitives used by product pages.
5. `src/styles/design-system.css` styles documentation examples only.

## Foundations

- Color: brand tosca, limited pink/violet accents, neutral and surface scales, semantic status colors, borders, focus, and gradients.
- Typography: Manrope for display, Inter for interface/body text, and a 16px minimum body size.
- Spacing: a 4px base with named steps aligned to the existing 8/12/16/24/32/48/64/96px rhythm.
- Radius: small controls, 15px actions, 22px cards, 24px surfaces, and pills only for tags or segmented contexts.
- Depth: soft, elevated, hero, and floating shadows; elevation explains hierarchy rather than decorating every card.
- Layout: 1440px maximum container, fluid 20–80px gutters, 12/8/4 column references, and a 704px readable copy width.
- Motion: 160/300/520ms durations, restrained easing, CSS sticky layering, and a reduced-motion fallback.

## Components and patterns

The route documents semantic buttons, links, card hierarchies, form controls, segmented selection, Solution Finder states, iconography, and imagery. `src/components/ui/Button.astro` is the first reusable UI primitive. Add more production components only after a second real consumer appears.

## Accessibility baseline

- 4.5:1 minimum contrast for normal text and 3:1 for large text.
- 44px minimum touch target.
- Visible tosca focus ring with offset.
- Keyboard-operable native controls and meaningful document order.
- Reduced-motion support and no essential information dependent on animation.
- State communicated with text, labels, shape, or icons in addition to color.
- Meaningful images require concise alt text; decorative layers use empty alt.

## Brand status

The approved master logo is unavailable. `BrandLogo.astro` is the single source for the temporary textual header treatment: “Intuise” in brand tosca and “UX Solution” as a tightly grouped neutral descriptor. It must not be treated as a redraw or final logo.

## Indexing decision

The route uses `noindex, nofollow` and is filtered from the generated sitemap. It remains directly accessible for internal review. Revisit indexing only after the master logo, imagery rights, token naming, copy, and component guidance receive approval.

## Contribution rule

Before adding a token or primitive, confirm it solves a repeated need, reuses the existing visual language, includes relevant interaction states, and passes keyboard, contrast, responsive, and reduced-motion checks.
