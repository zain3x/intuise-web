# Brand Migration

## Preserved

- Tosca signal color, near-black ink, warm paper/fog surfaces, dark-to-tosca abstract gradient, Manrope display hierarchy, Inter body copy, thin grid lines, editorial scale, generous whitespace, and restrained motion.
- Immersive two-column desktop hero and a strong tosca emphasis on “intuitive.”
- Existing SVG value icons, Kantara/Sanlog compositions, city background, and abstract gradient are reused from the pre-Astro source of truth; all other legacy media remain available in the archive/inventory.

## Adapted

- Mobile hero removes the large visual panel to avoid clipping; the next section remains visible as a scroll cue.
- Precision/grid language is recreated through layout lines while the visual background reuses `Background-2.png`.
- Client proof is replaced by a transparent publication gate until permission and outcomes are verified.
- The migrated visual language is codified as a small foundation in `src/styles/tokens.css` and documented at `/design-system`. Existing landing-page decisions remain the baseline consumer; this does not introduce a new brand direction.

## Archived / unresolved

- Unused device screenshots and third-party logos are preserved but excluded from production. Kantara and Sanlog compositions that already appeared in the pre-Astro working tree are reused without adding new metrics or outcomes; final client permission remains a manual approval item.
- No master Intuise logo was found. `src/components/brand/BrandLogo.astro` is a TEMPORARY textual fallback. In the header, “Intuise” uses brand tosca and “UX Solution” is a tightly grouped neutral descriptor to preserve the older visual treatment. This is not a redraw or a final logo. The CSS `.brand-mark` is archived evidence, not brand authority.
- Google-hosted Manrope and Inter remain for continuity. Local font licensing/files were not available.

Manual approval is required for the logo, photography ownership, client imagery, third-party marks, and any future magenta/violet expansion.
