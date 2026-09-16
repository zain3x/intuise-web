import { company } from './ecosystem';

export const capabilities = [
  {
    name: 'UX Strategy',
    detail:
      'Frame the audience, product decisions, journeys, and constraints before designing screens.',
    href: '/ux/#capabilities',
  },
  {
    name: 'Product Design',
    detail:
      'Connect user needs, information architecture, and interaction decisions into coherent workflows.',
    href: '/ux/#capabilities',
  },
  {
    name: 'UI/UX Design',
    detail:
      'Make hierarchy, navigation, interface states, and task completion clearer.',
    href: '/ux/#capabilities',
  },
  {
    name: 'Design Systems',
    detail:
      'Define shared tokens, interface patterns, and documented decisions that teams can maintain.',
    href: '/ux/#capabilities',
  },
  {
    name: 'Frontend Development',
    detail:
      'Carry approved designs into responsive production interfaces with accessibility and handover in scope.',
    href: '/ux/#capabilities',
  },
  {
    name: 'UX Audit / Fix Your UI/UX',
    detail:
      'Review an existing interface and propose actionable, implementation-ready improvements.',
    href: '/fix-your-ui-ux/',
  },
  {
    name: 'Component Library',
    detail:
      'Develop reusable UI foundations with explicit behavior and design-to-code guidance. In development.',
    href: '/components/',
  },
];

export const productContexts =
  'We work on enterprise SaaS, internal tools, HRIS, and operations and logistics products, where connected workflows and interface consistency matter.';

export const primaryResources = [
  { name: 'Home', href: '/' },
  { name: 'Services', href: '/ux/' },
  { name: 'Work and case studies', href: '/work/' },
  { name: 'Component Library', href: '/components/' },
  { name: 'Fix Your UI/UX', href: '/fix-your-ui-ux/' },
  { name: 'Apps', href: '/apps/' },
  { name: 'About', href: '/about/' },
  { name: 'Contact', href: '/contact/' },
];

export const organizationId = `${company.url}#organization`;
export const websiteId = `${company.url}#website`;
export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'Organization',
  '@id': organizationId,
  name: 'Intuise UX Solution',
  alternateName: ['Intuise', 'Intuise UX'],
  url: company.url,
  email: company.email,
  description: company.description,
};
export const websiteSchema = {
  '@context': 'https://schema.org',
  '@type': 'WebSite',
  '@id': websiteId,
  name: company.name,
  url: company.url,
  inLanguage: 'en',
  publisher: { '@id': organizationId },
};
