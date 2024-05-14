index.vuestyles.css CSS CSS vue
<script setup lang="ts">
import { ref } from 'vue'
import {
  ComboboxAnchor,
  ComboboxContent,
  ComboboxEmpty,
  ComboboxGroup,
  ComboboxInput,
  ComboboxItem,
  ComboboxItemIndicator,
  ComboboxLabel,
  ComboboxRoot,
  ComboboxSeparator,
  ComboboxTrigger,
  ComboboxViewport,
} from 'radix-vue'
import { Icon } from '@iconify/vue'
import './style.css'

/**
 * Props
 */
type Props = {
  additionalFruit: string
}
const props = withDefaults(defineProps<Props>(), {
  additionalFruit: 'Orange',
})

/**
 * Constants
 */
const item = ref('')
const options = [
  'Apple',
  'Banana',
  'Blueberry',
  'Grapes',
  'Pineapple',
  props.additionalFruit,
]
const vegetables = ['Aubergine', 'Broccoli', 'Carrot', 'Courgette', 'Leek']
</script>

<template>
  <ComboboxRoot v-model="item" class="ComboboxRoot">
    <ComboboxAnchor class="ComboboxAnchor">
      <ComboboxInput class="ComboboxInput" placeholder="Placeholder..." />
      <ComboboxTrigger>
        <Icon icon="radix-icons:chevron-down" class="ComboboxIcon" />
      </ComboboxTrigger>
    </ComboboxAnchor>

    <ComboboxContent class="ComboboxContent">
      <ComboboxViewport class="ComboboxViewport">
        <ComboboxEmpty class="ComboboxEmpty" />

        <ComboboxGroup>
          <ComboboxLabel class="ComboboxLabel"> Fruits </ComboboxLabel>

          <ComboboxItem
            v-for="(option, index) in options"
            :key="index"
            class="ComboboxItem"
            :value="option"
          >
            <ComboboxItemIndicator class="ComboboxItemIndicator">
              <Icon icon="radix-icons:check" />
            </ComboboxItemIndicator>
            <span>
              {{ option }}
            </span>
          </ComboboxItem>
          <ComboboxSeparator class="ComboboxSeparator" />
        </ComboboxGroup>

        <ComboboxGroup>
          <ComboboxLabel class="ComboboxLabel"> Vegetables </ComboboxLabel>
          <ComboboxItem
            v-for="(option, index) in vegetables"
            :key="index"
            class="ComboboxItem"
            :value="option"
          >
            <ComboboxItemIndicator class="ComboboxItemIndicator">
              <Icon icon="radix-icons:check" />
            </ComboboxItemIndicator>
            <span>
              {{ option }}
            </span>
          </ComboboxItem>
        </ComboboxGroup>
      </ComboboxViewport>
    </ComboboxContent>
  </ComboboxRoot>
  <div>選んだもの: {{ item }}</div>
</template>
