export default defineNuxtRouteMiddleware(async (to) => {
  /* if (typeof to.name === 'string') {
    const { error } = await useFetch('/api/Users/state');
    const { refresh, refreshToken, accessToken } = useUserAuth();
    if (error.value) {
      if (to.name.includes('login')) return true;
      await refresh();
      if (!refreshToken.value || !accessToken.value) return navigateTo('/login');
      return true;
    }
    if (!error.value) {
      if (to.name.includes('login')) return navigateTo('/');
      return true;
    }
  } */
});
