// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  css: ['/assets/css/style.css'],
  storybook: {
    addons: [],
    stories: ['~/components/stories/**/*.stories.js'],
    port: 6006,
    parameters: {
      backgrounds: {
        default: 'light', // light or dark
      },
      controls: {
        expanded: true,
      },
      layout: 'centered',
    },
  },
})
