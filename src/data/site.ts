import type { SolutionOption } from '../types/site';

export const navigation = [
  ['Who we help', '#who-we-help'],
  ['Selected work', '#work'],
  ['Solutions', '#solutions'],
  ['Why Intuise', '#why-intuise'],
  ['Contact', '#contact'],
] as const;

export const audiences = [
  {
    icon: '/assets/user_understand.svg',
    title: 'Product teams',
    problem: 'Complex flows are slowing decisions and delivery.',
    outcome: 'Clearer journeys, interface systems, and build-ready decisions.',
  },
  {
    icon: '/assets/user_proven.svg',
    title: 'Operations teams',
    problem: 'Internal tools require too much training and workarounds.',
    outcome:
      'Focused workflows that reduce cognitive load and operational friction.',
  },
  {
    icon: '/assets/intuitive.svg',
    title: 'Growing businesses',
    problem: 'The website no longer explains the offer or supports growth.',
    outcome:
      'A credible, maintainable web experience built around real content.',
  },
  {
    icon: '/assets/proffesional.svg',
    title: 'Design & engineering',
    problem: 'Intent is lost between design files and production code.',
    outcome:
      'One connected system from product thinking through frontend delivery.',
  },
];

export const solutionOptions: SolutionOption[] = [
  {
    id: 'company-profile',
    label: 'Company profile',
    problem: 'Your offer is difficult to understand or trust.',
    direction:
      'A narrative-led, crawlable website with proof and clear conversion paths.',
    outcome: 'Clarity, credibility, and an easier content handover.',
    example: 'Positioning, services, proof, insights, and contact.',
  },
  {
    id: 'product-website',
    label: 'Product website',
    problem:
      'The product has depth, but the website does not make its value obvious.',
    direction:
      'Explain the problem, workflow, evidence, and product decisions progressively.',
    outcome: 'Faster understanding for buyers and product stakeholders.',
    example: 'Product story, feature journeys, docs, and conversion.',
  },
  {
    id: 'e-commerce',
    label: 'E-commerce',
    problem: 'Discovery and purchase decisions contain avoidable friction.',
    direction:
      'Prioritize product finding, comparison, reassurance, and checkout clarity.',
    outcome: 'A more confident path from browse to purchase.',
    example: 'Catalogue, detail, basket, checkout, and service states.',
  },
  {
    id: 'dashboard',
    label: 'Dashboard',
    problem: 'Dense information makes priorities and actions hard to see.',
    direction:
      'Use hierarchy, progressive disclosure, and task-oriented states.',
    outcome: 'Faster recognition, decisions, and recovery from exceptions.',
    example: 'Overview, filters, detail, empty, loading, and error states.',
  },
  {
    id: 'internal-tool',
    label: 'Internal tool',
    problem:
      'Teams rely on manual steps and inconsistent operational knowledge.',
    direction:
      'Map the real workflow, roles, decisions, and handoffs before designing UI.',
    outcome: 'A system teams can learn, operate, and maintain.',
    example: 'Role-based tasks, queues, approvals, and audit trails.',
  },
  {
    id: 'fnb',
    label: 'Café & F&B',
    problem:
      'Brand, menu, location, and ordering information are disconnected.',
    direction:
      'Connect the physical experience with a fast, local-first digital journey.',
    outcome: 'Clearer discovery and fewer steps to visit, order, or enquire.',
    example: 'Story, menu, locations, reservations, and campaigns.',
  },
];

export const differentiators = [
  [
    '01',
    'Enterprise-grade product thinking',
    'We frame users, operations, constraints, and decisions before polishing screens.',
  ],
  [
    '02',
    'Design-to-code continuity',
    'The same team carries intent into responsive frontend, reducing the handoff translation gap.',
  ],
  [
    '03',
    'AI-assisted, human-reviewed',
    'Automation accelerates exploration and production; people remain accountable for judgement and quality.',
  ],
  [
    '04',
    'A system you can continue',
    'Tokens, components, documentation, and handover are part of delivery—not an afterthought.',
  ],
] as const;

export const process = [
  [
    '01',
    'Understand',
    'Align on audience, evidence, constraints, and the decisions the experience must support.',
  ],
  [
    '02',
    'Shape',
    'Turn complexity into journeys, priorities, content structure, and a reviewable direction.',
  ],
  [
    '03',
    'Design & build',
    'Develop the interface system and production frontend as one connected body of work.',
  ],
  [
    '04',
    'Validate',
    'Review responsive behavior, accessibility, performance, content, and real task clarity.',
  ],
  [
    '05',
    'Handover',
    'Leave maintainable code, reusable foundations, decisions, and documentation with your team.',
  ],
] as const;

export const faqs = [
  [
    'Do you design and build?',
    'Yes. Intuise can support product framing and interface design, then carry approved decisions into responsive frontend.',
  ],
  [
    'How is AI used?',
    'As an internal accelerator for exploration, analysis, and production. Human review remains the quality and accountability gate.',
  ],
  [
    'Will our team own the output?',
    'The intended model is maintainable handover: code, design foundations, documentation, and decision context your team can continue.',
  ],
  [
    'Is accessibility included?',
    'Accessibility is treated as a product and engineering requirement, then verified within the agreed scope and target standard.',
  ],
];
