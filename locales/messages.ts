import ja from './ja.json'
import en from './en.json'
import aboutJa from './about/ja.json'
import aboutEn from './about/en.json'

export const messages = {
  ja: { ...ja, ...aboutJa },
  en: { ...en, ...aboutEn },
}
