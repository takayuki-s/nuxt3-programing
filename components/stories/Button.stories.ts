// Button.stories.ts

// Replace vue3 with vue if you are using Storybook for Vue 2
import type { Meta, StoryObj } from '@storybook/vue3'

import Button from '../Atom/Button.vue'

const meta: Meta<typeof Button> = {
  component: Button,
}

export default meta
type Story = StoryObj<typeof Button>

/*
 *👇 Render functions are a framework specific feature to allow you control on how the component renders.
 * See https://storybook.js.org/docs/vue/api/csf
 * to learn how to use render functions.
 */
export const Primary: Story = {
  render: (args) => ({
    components: { Button },
    setup() {
      return { args }
    },
    template: '<Button v-bind="args" />',
  }),
  args: {
    primary: true,
    label: 'Button',
  },
}

// export const Primary: Story = {
//   render: () => ({
//     components: { Button },
//     template: '<Button background="#ff0" label="Button" />',
//   }),
// }

export const Secondary: Story = {
  render: () => ({
    components: { Button },
    template: '<Button background="#ff0" label="😄👍😍💯" />',
  }),
}

export const Tertiary: Story = {
  render: () => ({
    components: { Button },
    template: '<Button background="#ff0" label="📚📕📈🤓" />',
  }),
}
