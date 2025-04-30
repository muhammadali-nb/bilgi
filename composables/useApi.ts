import type { UseFetchOptions } from 'nuxt/app';

export function useApi<T>(url: string | (() => string), options: UseFetchOptions<T> = {}) {
  const headers = useRequestHeaders(['cookie']);
  return useFetch(url,
    {
      $fetch,

      async onResponseError({ response, request, options }) {
        // if (import.meta.server || event.response._data.error || (!event.response.ok && typeof event.response._data === 'string')) return;
        // $toast.error(event.error.message)
        if (response.status === 401) {
          try {
            // const result = await $fetch('/api/refresh-token', { method: 'post', body: { token: 'asdasd' } });
            /* if (result.token) {
                // await $fetch(request, options);
                return request;
              }
              else {
                // go to login page
              } */
          }
          catch (e) {
            // go to login page
          }
        }
        // return event.request;
      },

      onResponse(event) {
        if (import.meta.server) return;
        if (!event.response.ok && typeof event.response._data === 'string') {
          // $toast.error(event.response._data);
        }
      },

      ...options,
      headers,
      watch: false,
      immediate: false,
      retry: false,
    },
  );
}

// import type { UseFetchOptions } from 'nuxt/app'
//
// export function useCustomFetch<T>(
//   url: string | (() => string),
//   options: UseFetchOptions<T> = {},
// ) {
//   return useFetch(url, {
//     ...options,
//     $fetch: useNuxtApp().$customFetch,
//   })
// }
