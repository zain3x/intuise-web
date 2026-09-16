export const documentationSections = [
  ['purpose', 'Purpose'],
  ['whenToUse', 'When to use'],
  ['whenNotToUse', 'When not to use'],
  ['anatomy', 'Anatomy'],
  ['variants', 'Variants'],
  ['states', 'States'],
  ['responsiveBehavior', 'Responsive behavior'],
  ['touchBehavior', 'Touch behavior'],
  ['desktopBehavior', 'Desktop behavior'],
  ['inputs', 'Inputs and props'],
  ['outputs', 'Outputs and events'],
  ['slots', 'Slots and content regions'],
  ['dependencies', 'Dependencies'],
  ['examples', 'Examples'],
  ['limitations', 'Limitations'],
  ['incompatibilities', 'Incompatibilities'],
  ['migrationNotes', 'Migration notes'],
  ['accessibility', 'Accessibility'],
  ['designTokens', 'Design tokens'],
  ['implementationNotes', 'Implementation notes'],
  ['relatedComponents', 'Related components'],
] as const;
type DocumentationKey = (typeof documentationSections)[number][0];
export interface ComponentEntry {
  slug: string;
  name: string;
  category: string;
  status: 'Preview';
  platforms: string[];
  responsive: boolean;
  touchFirst: boolean;
  documentation: string;
  source: string;
  content: Record<DocumentationKey, string>;
}
export const components: ComponentEntry[] = [
  {
    slug: 'action-link',
    name: 'Action link',
    category: 'Navigation',
    status: 'Preview',
    platforms: ['web'],
    responsive: true,
    touchFirst: true,
    documentation: '/components/action-link/',
    source: 'src/styles/global.css',
    content: {
      purpose:
        'Give a navigation destination clear priority. This preview documents the action links already used by the Intuise website; it is not a released component package.',
      whenToUse:
        'Use for a clear next destination such as exploring a service or opening an email enquiry.',
      whenNotToUse:
        'Do not use a link to submit a form, toggle a state, or open an in-page disclosure. Use a native button for actions.',
      anatomy:
        'A native anchor with a real href, a descriptive visible label, and an optional decorative directional arrow.',
      variants:
        'Signal uses the brand accent for a primary destination. Dark works on light surfaces. Secondary is reserved for dark surfaces.',
      states:
        'Default, hover, keyboard focus, and activated navigation. Links have no native disabled state; omit unavailable destinations and explain availability in text. No loading state is implemented in this preview.',
      responsiveBehavior:
        'Links size to their labels on wide screens and fill the available action group on narrow screens. Labels wrap without fixed heights.',
      touchBehavior:
        'The existing button class provides a 3.25rem minimum height. Keep adjacent destinations separated and do not rely on hover to reveal the label.',
      desktopBehavior:
        'Tab focuses the anchor and Enter follows its destination. Hover feedback supplements the visible label. The action group can remain inline when space permits.',
      inputs:
        'Native anchor attributes: href is required for navigation; class selects button plus a documented visual variant. This CSS primitive has no component-specific JavaScript props.',
      outputs:
        'Native browser navigation and standard anchor events only. No custom events are emitted.',
      slots:
        'Visible descriptive link text and an optional decorative arrow marked aria-hidden. There is no framework-specific slot API.',
      dependencies:
        'Website tokens.css and the button rules in global.css. No runtime JavaScript or framework dependency is required by this CSS primitive.',
      examples:
        '<a class="button button-signal" href="/components/">Explore components</a>. The live preview above uses the same destination and CSS classes.',
      limitations:
        'A website preview, not a distributed component package. Disabled and loading behavior are not implemented. Responsive stacking depends on the surrounding action-group layout.',
      incompatibilities:
        'Do not nest interactive elements inside the anchor or apply button-only behaviors to it. Secondary styling is intended for dark surfaces and must not be used on light backgrounds without a contrast review.',
      migrationNotes:
        'No package migration path exists yet. Preserve href, accessible text, focus styles, token dependencies, and reduced-motion behavior when porting this primitive to another framework.',
      accessibility:
        'Use an anchor for navigation, a meaningful label, and a visible focus indicator. Decorative arrows are aria-hidden. Signal colors need dark text. The preview uses a deeper teal focus ring on light surfaces. No formal accessibility certification is claimed.',
      designTokens:
        '--brand-primary, --brand-primary-deep, --ink, --text-on-dark, --duration-fast, --focus-ring. Current website values are generated from src/styles/tokens.css and available at /tokens.json.',
      implementationNotes:
        'Use class="button button-signal" or class="button button-dark" on an anchor with a real href. The CSS primitive is framework independent; this website renders it with Astro. Reduced motion removes the hover translation. Package distribution and cross-platform adapters are in development.',
      relatedComponents:
        'No additional component entries are published yet. Button actions and navigation patterns will be documented when their implementation and behavior are reviewed.',
    },
  },
];
export const componentRegistry = {
  schemaVersion: 1,
  status: 'in-development',
  description:
    'Intuise website implementation previews. Not a complete or installable library.',
  components,
};
export const patternsRegistry = {
  schemaVersion: 1,
  status: 'in-development',
  patterns: [
    {
      id: 'progressive-product-direction',
      name: 'Progressive product direction',
      status: 'website-implementation',
      purpose:
        'Help visitors select a project type and understand the suggested direction.',
      source: 'src/components/interactive/SolutionFinder.tsx',
      documentation: '/ux/#directions',
      rules: [
        'Keep selection keyboard accessible with native radio inputs.',
        'Expose the selected direction as text.',
        'Keep core directions available when JavaScript is disabled.',
        'Use an explicit enquiry link after the visitor reviews the direction.',
      ],
    },
  ],
};
