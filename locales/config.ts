import { DEFAULT_LANGUAGE } from './constants';

export default defineI18nConfig(() => {
  return {
    legacy: false,
    locale: DEFAULT_LANGUAGE,
    fallbackLocale: DEFAULT_LANGUAGE,
  };
});
