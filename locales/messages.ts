import ja from './ja.json'
import en from './en.json'
import aboutJa from './about/ja.json'
import aboutEn from './about/en.json'
import validationJa from './validation/ja.json'
import validationEn from './validation/en.json'

export const messages = {
  ja: { ...ja, ...aboutJa, ...validationJa },
  en: { ...en, ...aboutEn, ...validationEn },
}
