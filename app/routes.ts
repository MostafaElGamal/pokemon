import { type RouteConfig, index, route } from '@react-router/dev/routes';

export default [
  index('modules/pokemon/pages/home.tsx'),
  route('/:id', 'modules/pokemon/pages/details.tsx'),

  // 404 Fallback
  route('*', 'modules/404/index.tsx'),
] satisfies RouteConfig;
