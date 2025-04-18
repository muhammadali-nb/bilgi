export default defineNuxtRouteMiddleware((to) => {
  if (typeof to.name !== 'string' || to.name.includes('/admin')) return;
  const pageName = to.name.split('__')[0].replaceAll('-', '.');
  console.log(pageName);
});
