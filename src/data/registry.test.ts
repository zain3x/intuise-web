import { describe, expect, it } from 'vitest';
import {
  components,
  documentationSections,
  componentRegistry,
} from './components';
import { ecosystem, products } from './ecosystem';
import { GET as componentResponse } from '../pages/components.json';
import { GET as tokenResponse } from '../pages/tokens.json';
import { GET as llmsResponse } from '../pages/llms.txt';

describe('public knowledge contracts', () => {
  it('serializes the same complete documentation consumed by detail pages', async () => {
    expect(await componentResponse().json()).toEqual(componentRegistry);
    expect(new Set(components.map((c) => c.slug)).size).toBe(components.length);
    for (const entry of components) {
      expect(entry.documentation).toBe(`/components/${entry.slug}/`);
      for (const [key] of documentationSections)
        expect(entry.content[key].length).toBeGreaterThan(0);
    }
  });
  it('exports actual CSS tokens including aliases and expressions', async () => {
    const result = await tokenResponse().json();
    expect(result.tokens['--brand-primary'].value).toBe('#13c6d4');
    expect(result.tokens['--focus-ring'].value).toBe(
      '3px solid var(--brand-primary)',
    );
    expect(result.tokens['--step-3'].value).toContain('clamp(');
  });
  it('keeps discovery consistent with public status and destinations', async () => {
    const text = await llmsResponse().text();
    for (const branch of ecosystem)
      expect(text).toContain(`https://intuise.com${branch.href}`);
    expect(text).toContain('in development');
    expect(products).toEqual([]);
  });
});
