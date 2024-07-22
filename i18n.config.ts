import { messages } from '@/locales/messages'

export default defineI18nConfig(() => ({
  legacy: false,
  lazy: true,
  locale: 'ja',
  availableLocales: ['ja', 'en'],
  messages,
  fallbackLocale: 'ja',
}))
