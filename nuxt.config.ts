// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [
    { src: '@/plugins/mock', mode: 'client' },
    { src: '@/plugins/vue-dompurify-html', mode: 'client' },
  ],
  css: ['/assets/css/style.css'],
  modules: ['@nuxtjs/tailwindcss'],
})
