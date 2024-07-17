// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    { src: '@/plugins/mock', mode: 'client' },
    { src: '@/plugins/vue-dompurify-html', mode: 'client' },
    { src: '@/plugins/prism' },
  ],
  css: ['/assets/css/style.css'],
  modules: ['@nuxtjs/tailwindcss', 'radix-vue/nuxt', '@nuxtjs/i18n'],
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
  i18n: {
    strategy: 'prefix_except_default',
    defaultLocale: 'ja',
    locales: ['ja', 'en'],
  },
})
