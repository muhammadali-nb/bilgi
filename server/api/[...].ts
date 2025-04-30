import { joinURL } from 'ufo';

export default defineEventHandler(async (event) => {
  const { apiBaseUrl } = useRuntimeConfig();

  const path = event.path.replace(/^\/api\//, 'api/');

  const target = joinURL(apiBaseUrl, path);
  const token = getCookie(event, 'accessToken');
  Object.assign(event.node.req.headers, { Authorization: `Bearer ${token}` });
  return proxyRequest(event, target);
});
