/**
 * Constants
 */
const LOCAL_STORAGE_KEY = 'nuxt-i18n-language'

const AVAILABLE_LOCALES = ['ja', 'en']

export const saveLocale = (locale: string) => {
  if (!AVAILABLE_LOCALES.includes(locale)) {
    return
  }
  localStorage.setItem(LOCAL_STORAGE_KEY, locale)
}

export const getLocale = () => {
  return localStorage.getItem(LOCAL_STORAGE_KEY)
}

export const setInitialLocale = () => {
  return 'ja'
}
