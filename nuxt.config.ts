// https://nuxt.com/docs/api/configuration/nuxt-config
import { createResolver } from '@nuxt/kit';
import { COOKIE_LOCALE_KEY, DEFAULT_LANGUAGE, localeItems } from './i18n/constants';
import { options } from './plugins/primevue/config';

const { resolve } = createResolver(import.meta.url);

export default defineNuxtConfig({
  compatibilityDate: '2024-11-01',

  devtools: { enabled: false },

  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1, user-scalable=0',
      link: [{ rel: 'icon', type: 'image/x-icon', href: '/favicon.ico' }],
    },
  },

  vite: {
    css: {
      preprocessorOptions: {
        scss: {
          api: 'modern-compiler',
          additionalData: '@use "~/assets/styles/responsive.scss" as *;',
        },
      },
    },
  },

  css: [
    '~/assets/styles/main.scss',
  ],

  alias: {
    '@utils': resolve('./utilities/'),
    '@components': resolve('./components/'),
    '@composables': resolve('./composables/'),
    '@language-constants': resolve('./locales/constants'),
  },

  runtimeConfig: {
    apiBaseUrl: 'NUXT_API_BASE_URL',
  },

  modules: [
    '@vueuse/nuxt',
    '@vueuse/nuxt',
    '@nuxtjs/i18n',
    '@primevue/nuxt-module',
    '@nuxtjs/google-fonts',
  ],

  googleFonts: {
    families: {
      Inter: [400, 500, 600, 700],
    },
  },

  primevue: {
    autoImport: true,
    options,
  },

  i18n: {
    lazy: true,
    vueI18n: 'config.ts',
    defaultLocale: DEFAULT_LANGUAGE,
    strategy: 'prefix_except_default',
    locales: localeItems,
    bundle: {
      optimizeTranslationDirective: false,
    },
    compilation: {
      strictMessage: false,
    },
    detectBrowserLanguage: {
      useCookie: true,
      cookieKey: COOKIE_LOCALE_KEY,
      redirectOn: 'root',
    },
  },

  imports: {
    scan: false,
  },

  components: {
    dirs: [],
  },
});
