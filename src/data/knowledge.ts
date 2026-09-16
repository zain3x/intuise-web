import { company, ecosystem, principles, products } from './ecosystem';
import { componentRegistry } from './components';
import { capabilities, productContexts } from './discovery';
import { audiences } from './site';
export const knowledge = [
  {
    slug: 'company',
    title: 'Company',
    description:
      'Public facts about Intuise UX Solution: studio identity, capabilities, target teams, human-reviewed AI practice, and contact details.',
    sections: [
      {
        title: 'What is Intuise?',
        items: [
          company.description,
          company.approach,
          'Based in Jakarta, Indonesia. Working remotely.',
          `Contact: ${company.email}`,
        ],
      },
      {
        title: 'Capabilities',
        items: capabilities.map((c) => `${c.name}: ${c.detail}`),
      },
      {
        title: 'Who we help',
        items: [
          ...audiences.map((a) => `${a.title}: ${a.problem} ${a.outcome}`),
          productContexts,
        ],
      },
    ],
    links: [
      { label: 'About the studio', href: '/about/' },
      { label: 'Services', href: '/ux/' },
      { label: 'Selected work', href: '/work/' },
      { label: 'Contact', href: '/contact/' },
    ],
  },
  {
    slug: 'products',
    title: 'Services and products',
    description:
      'The Intuise ecosystem, current services, and development status.',
    sections: ecosystem
      .map((e) => ({
        title: String(e.name),
        items: [e.description, `Status: ${e.status}`],
      }))
      .concat([
        {
          title: 'Published applications',
          items: products.length
            ? products.map((p) => `${p.name}: ${p.description}`)
            : [
                'No application detail pages are published in this registry yet.',
              ],
        },
      ]),
    links: ecosystem.map((e) => ({ label: e.name, href: e.href })),
  },
  {
    slug: 'component-library',
    title: 'Component library',
    description: componentRegistry.description,
    sections: [
      {
        title: 'Availability',
        items: [
          'In development. No public package, complete library, or MCP server is offered here.',
        ],
      },
      {
        title: 'Source of truth',
        items: [
          'Component documentation and components.json are generated from the same typed registry.',
          'Website tokens are read from the actual CSS token file at build time.',
          'These resources describe current website implementations, not unverified native platform support.',
        ],
      },
    ],
    links: [
      { label: 'Components overview', href: '/components/' },
      { label: 'Component registry JSON', href: '/components.json' },
      { label: 'Website tokens JSON', href: '/tokens.json' },
      { label: 'Patterns JSON', href: '/patterns.json' },
    ],
  },
  {
    slug: 'design-principles',
    title: 'Design principles',
    description: 'The interface principles used across the Intuise practice.',
    sections: principles.map(([title, detail]) => ({ title, items: [detail] })),
    links: [{ label: 'Read component documentation', href: '/components/' }],
  },
];
