// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    { src: '@/plugins/mock', mode: 'client' },
    { src: '@/plugins/vue-dompurify-html', mode: 'client' },
    { src: '@/plugins/prism' },
  ],
  css: ['/assets/css/style.css'],
  modules: ['@nuxtjs/tailwindcss', '@nuxt-alt/markdown-it'],
  vite: {
    vue: {
      script: {
        defineModel: true,
        propsDestructure: true,
      },
    },
  },
  markdownit: {
    runtime: true,
  },
})
