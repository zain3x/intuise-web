import { describe, expect, it } from 'vitest';
import { buildProjectMailto } from './mailto';

describe('buildProjectMailto', () => {
  it('encodes the selected project context', () => {
    const result = buildProjectMailto('Internal tool & dashboard');
    expect(result).toContain('mailto:rindra@intuise.com');
    expect(result).toContain('Internal%20tool%20%26%20dashboard');
  });

  it('strips line breaks from untrusted labels', () => {
    const result = buildProjectMailto('Dashboard\r\nBcc: attacker@example.com');
    expect(decodeURIComponent(result)).not.toContain('\r');
    expect(decodeURIComponent(result)).not.toContain('\nBcc:');
  });
});
