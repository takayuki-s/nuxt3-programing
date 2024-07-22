/**
 * Constants
 */
const LOCAL_STORAGE_KEY = 'nuxt-i18n-language'

const AVAILABLE_LOCALES = ['ja', 'en']

export const setLocale = (locale: string) => {
  if (!AVAILABLE_LOCALES.includes(locale)) {
    return
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, locale)
}
