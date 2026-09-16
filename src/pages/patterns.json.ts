import { patternsRegistry } from '../data/components';
export const GET = () =>
  new Response(JSON.stringify(patternsRegistry, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
