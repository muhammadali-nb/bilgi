export default defineNuxtRouteMiddleware(async (to) => {
  console.log('Check auth middleware:', to.path);
  /*
  const token = useCookie('token');

  const chechUser = () => new Promise(resolve => setTimeout(() => resolve(token.value), 10));

  const result = await chechUser();// await $fetch('check/auth', { params: { token: token.value } });

  if (to.path.includes('/admin')) {
    if (result) {
      if (to.path.includes('/auth')) return navigateTo('/admin/bid');
      return true;
    }
    if (to.path.includes('/auth')) return true;
    return navigateTo('/admin/auth');
  }

  if (result) {
    if (to.path.includes('/login')) return navigateTo('/');
    return true;
  }
  if (to.path.includes('/login')) return true;
  return navigateTo('/login');
  */
});
