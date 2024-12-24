import Counter from '../index.vue'
import type { Meta, StoryFn } from '@storybook/vue3'

export default {
  title: 'Components/Counter',
  component: Counter,
} as Meta<typeof Counter>

// ストーリーのテンプレート
const Template: StoryFn<typeof Counter> = (args) => ({
  components: { Counter },
  setup() {
    return { args }
  },
  template: '<Counter v-bind="args" />',
})

// デフォルトストーリー
export const Default = Template.bind({})
Default.args = {}
