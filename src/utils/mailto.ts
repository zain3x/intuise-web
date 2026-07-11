export const CONTACT_EMAIL = 'rindra@intuise.com';

export function buildProjectMailto(projectType?: string): string {
  const safeType = (projectType ?? 'General project')
    .replace(/[\r\n]+/g, ' ')
    .slice(0, 100);
  const subject = `Intuise project enquiry — ${safeType}`;
  const body = [
    'Hello Intuise,',
    '',
    `I would like to discuss: ${safeType}`,
    '',
    'What we are building:',
    'Current challenge:',
    'Target outcome:',
    'Preferred timeline:',
  ].join('\n');

  return `mailto:${CONTACT_EMAIL}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
}
