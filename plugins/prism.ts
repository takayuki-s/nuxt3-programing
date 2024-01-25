import Prism from 'prismjs'
import { App } from 'vue'

// 使いたいテーマ
import 'prismjs/themes/prism-okaidia.css'

// 使いたい言語のシンタックス
import 'prismjs/components/prism-json'
import 'prismjs/components/prism-typescript'
import 'prismjs/components/prism-javascript'

const prismPlugin = {
  install(app: App) {
    app.config.globalProperties.$prism = Prism
  },
}

export default defineNuxtPlugin((nuxtApp) => {
  nuxtApp.vueApp.use(prismPlugin)
})
