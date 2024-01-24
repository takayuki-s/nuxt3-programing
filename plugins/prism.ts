import Prism from 'prismjs'

// 使いたいテーマ
import 'prismjs/themes/prism-okaidia.css'

// 使いたい言語のシンタックス
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(Prism)
})
