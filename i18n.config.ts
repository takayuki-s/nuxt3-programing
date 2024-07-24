import { messages } from '@/locales/messages'
import { setInitialLocale } from '@/utils/i18n'

export default defineI18nConfig(() => ({
  legacy: false,
  lazy: true,
  locale: setInitialLocale(),
  availableLocales: ['ja', 'en'],
  messages,
  fallbackLocale: 'ja',
}))
