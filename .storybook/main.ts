import type { StorybookConfig } from '@storybook/vue3-vite'
const config: StorybookConfig = {
  stories: [
    '../components/stories/**/*.stories.mdx',
    '../components/stories/**/*.stories.@(js|jsx|ts|tsx)',
    '../components/**/*.stories.@(js|jsx|ts|tsx)',
  ],
  addons: [
    '@storybook/addon-essentials',
    'storybook-addon-nuxt',
    '@storybook/addon-controls',
  ],
  framework: '@storybook/vue3-vite',
  core: {
    builder: '@storybook/builder-vite',
  },
  docs: {
    autodocs: true,
  },
}
export default config
