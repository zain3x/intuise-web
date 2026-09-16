export const company = {
  name: 'Intuise',
  alternateNames: ['Intuise UX', 'Intuise UX Solution'],
  description:
    'Intuise UX / Intuise UX Solution is an AI-first product design and frontend engineering studio focused on intuitive, maintainable digital products.',
  approach:
    'AI accelerates research, exploration, and production. Product judgement, design decisions, and quality remain human-reviewed.',
  url: 'https://intuise.com/',
  email: 'rindra@intuise.com',
};

export const ecosystem = [
  {
    id: 'ux',
    name: 'Intuise UX',
    role: 'The studio',
    description:
      'Product strategy, UX/UI design, design systems, and frontend implementation.',
    href: '/ux/',
    cta: 'Explore UX services',
    status: 'Service',
  },
  {
    id: 'fix',
    name: 'Fix Your UI/UX',
    role: 'A focused starting point',
    description:
      'Your product works. Let’s make it easier to use. Focused reviews and improvements for friction, confusing workflows, and interface debt.',
    href: '/fix-your-ui-ux/',
    cta: 'Fix my UI/UX',
    status: 'Service',
  },
  {
    id: 'components',
    name: 'Intuise Components',
    role: 'The reusable foundation',
    description:
      'Responsive interface foundations connecting product decisions, design tokens, and production code.',
    href: '/components/',
    cta: 'Explore components',
    status: 'In development',
  },
  {
    id: 'apps',
    name: 'Intuise Apps',
    role: 'Products in practice',
    description:
      'Applications and experiments built with the same product thinking and interface-system principles.',
    href: '/apps/',
    cta: 'Explore apps',
    status: 'In development',
  },
  {
    id: 'games',
    name: 'Intuise Games',
    role: 'Room to experiment',
    description:
      'Original games and playful interface studies across mobile, web, and spatial experiences.',
    href: '/games/',
    cta: 'Explore Intuise Games',
    status: 'Experimental',
  },
] as const;

export const principles = [
  [
    'Responsive by default',
    'Shape hierarchy and density around available space, rather than shrinking a desktop layout.',
  ],
  [
    'Touch-first',
    'Give controls enough room, visible feedback, and alternatives to hover.',
  ],
  [
    'Desktop complete',
    'Support keyboard navigation, precise input, and information-rich workflows.',
  ],
  [
    'Framework-agnostic foundations',
    'Keep UX rules, tokens, and semantic behavior independent of a framework. Implementation examples name their actual dependencies; framework adapters are not yet available.',
  ],
  [
    'Accessibility conscious',
    'Use semantic elements, meaningful labels, contrast, and explicit focus and error states.',
  ],
  [
    'Maintainable',
    'Keep decisions, tokens, and implementation understandable for the next team.',
  ],
  [
    'Design-to-code',
    'Connect design intent with actual states and behavior. Adapt implementation to the framework.',
  ],
  [
    'Generative-ready',
    'Describe purpose, constraints, and UX rules alongside code so people and agents can reason from the same source.',
  ],
] as const;

export const taxonomy = [
  'Foundations',
  'Inputs',
  'Navigation',
  'Feedback',
  'Data Display',
  'Overlays',
  'Layout',
  'Advanced Product Patterns',
] as const;
export const decisionFlow = [
  'Product decisions',
  'UX patterns',
  'Design tokens',
  'Components',
  'Responsive behavior',
  'Production code',
];

export const insightTopics = [
  [
    'Design and code as one decision system',
    'How implementation constraints can improve product decisions.',
  ],
  [
    'AI speed still needs a human gate',
    'Where automation helps, and where judgement must remain accountable.',
  ],
  [
    'Performance is part of the interface',
    'Why loading, stability, and responsiveness shape trust and comprehension.',
  ],
] as const;

export interface Product {
  slug: string;
  name: string;
  description: string;
  status: 'Preview' | 'Available';
  url?: string;
}
// Only add approved public product information. Empty means no detail routes are published.
export const products: Product[] = [];
