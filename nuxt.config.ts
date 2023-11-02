// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  plugins: [{ src: '@/plugins/mock', mode: 'client' }],
  css: ['/assets/css/style.css'],
})
