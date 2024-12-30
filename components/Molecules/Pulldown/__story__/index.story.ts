import Pulldown from './Pulldown.vue'
import { Meta, StoryFn } from '@storybook/vue3'

// Storybook のメタ情報
export default {
  title: 'Components/Pulldown',
  component: Pulldown,
  argTypes: {
    options: {
      control: { type: 'array' },
      description: 'プルダウンメニューの選択肢',
    },
    modelValue: {
      control: { type: 'text' },
      description: '現在選択されている値',
    },
    placeholder: {
      control: { type: 'text' },
      description: 'デフォルトで表示されるプレースホルダー',
    },
  },
} as Meta<typeof Pulldown>

// テンプレート
const Template: StoryFn<typeof Pulldown> = (args) => ({
  components: { Pulldown },
  setup() {
    return { args }
  },
  template: '<Pulldown v-bind="args" />',
})

// ストーリー定義
export const Default = Template.bind({})
Default.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  modelValue: '',
  placeholder: '-- Select an option --',
}

export const Preselected = Template.bind({})
Preselected.args = {
  options: ['Option 1', 'Option 2', 'Option 3'],
  modelValue: 'Option 2',
  placeholder: '-- Select an option --',
}

export const EmptyOptions = Template.bind({})
EmptyOptions.args = {
  options: [],
  modelValue: '',
  placeholder: '-- No options available --',
}

export const LongOptions = Template.bind({})
LongOptions.args = {
  options: Array.from({ length: 100 }, (_, i) => `Option ${i + 1}`),
  modelValue: '',
  placeholder: '-- Select an option --',
}
