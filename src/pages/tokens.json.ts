import css from '../styles/tokens.css?raw';
// Read the real CSS declarations. Preserve expressions, aliases and units instead of inventing a second token set.
export function GET() {
  const tokens = Object.fromEntries(
    [...css.matchAll(/(--[\w-]+)\s*:\s*([^;]+);/g)].map(([, name, value]) => [
      name,
      { value: value.trim() },
    ]),
  );
  return new Response(
    JSON.stringify(
      {
        schemaVersion: 1,
        status: 'website-implementation',
        source: 'src/styles/tokens.css',
        format: 'CSS custom properties; values may contain CSS expressions',
        tokens,
      },
      null,
      2,
    ),
    { headers: { 'Content-Type': 'application/json; charset=utf-8' } },
  );
}
