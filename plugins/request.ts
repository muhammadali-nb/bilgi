/*
export default defineNuxtPlugin(() => {
  const request = $fetch.create({
    async onResponse(event) {
      // if event auth - set refresh token and access token in cookie
      console.log(event);
    },
    async onResponseError(event) {
      console.log(event);
      // if (response.status === 401) {
      //   // const result = await $fetch('/refresh-token');
      //   // if success -> set cookies from result
      //   // else -> await nuxtApp.runWithContext(() => navigateTo('/login')) and delete cookies;
      // }
    },
    onRequest(event) {
      console.log(event);
    },
  });

  // Expose to useNuxtApp().$request
  return {
    provide: { request },
  };
});
*/
