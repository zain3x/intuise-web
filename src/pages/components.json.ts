import { componentRegistry } from '../data/components';
export const GET = () =>
  new Response(JSON.stringify(componentRegistry, null, 2), {
    headers: { 'Content-Type': 'application/json; charset=utf-8' },
  });
