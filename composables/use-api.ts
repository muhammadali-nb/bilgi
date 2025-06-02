import type { UseFetchOptions } from 'nuxt/app';
import { useUserAuth } from '@composables/auth';
import { useToastStore } from '@store/toast';
import { navigateTo } from 'nuxt/app';

export function useApi<T>(url: string | (() => string), options: UseFetchOptions<T> = {}) {
  const headers = useRequestHeaders(['cookie']);
  const nuxtApp = useNuxtApp();
  const { refresh, accessToken, refreshToken } = useUserAuth();
  const $toast = useToastStore();

  return useFetch(url,
    {
      $fetch,
      async onResponseError({ response, request, options, error }) {
        if (import.meta.server || !response || response.status !== 401) return;
        $toast.error('Не удалось выполнить авторизацию. Пожалуйста, попробуйте снова.');
        if (response.status === 401) {
          try {
            await refresh();
            if (!accessToken.value || !refreshToken.value) {
              await nuxtApp.runWithContext(() => navigateTo('/login'));
              if (document) document.location.reload();
            }
          }
          catch (e) {
            await nuxtApp.runWithContext(() => navigateTo('/login'));
          }
        }
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
      retry: 1,
      retryStatusCodes: [401],
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
