---
name: 'template'
root: '.'
output: '.'
ignore: []
questions:
  name: 'コンポーネント名を入力してください'
  level:
    message: 'コンポーネントの粒度を選択してください'
    choices:
      - 'atoms'
      - 'molecules'
      - 'organisms'
      - 'templates'
---

# `components/{{ inputs.level }}/{{ inputs.name }}/index.vue`

```
<script setup lang="ts">
type Props = {
  content: Document
}
const props = defineProps<Props>()
</script>
<template>
</template>
```

# `components/{{ inputs.level }}/{{ inputs.name }}/index.stories.ts`

```
import type { Meta, StoryObj } from '@storybook/vue3'

import {{ inputs.name }} from './index.vue'

const meta: Meta<typeof {{ inputs.name }}> = {
  component: {{ inputs.name }},
}

export default meta
type Story = StoryObj<typeof {{ inputs.name }}>

export const Primary: Story = {
  render: (args) => ({
    components: { {{ inputs.name }} },
    setup() {
      return { args }
    },
    template: '<{{ inputs.name }} v-bind="args" />',
  }),
  args: {},
}
```

# `components/{{ inputs.level }}/{{ inputs.name }}/index.test.ts`

```
import { test } from 'vitest'

test('テスト', () => {})
```
