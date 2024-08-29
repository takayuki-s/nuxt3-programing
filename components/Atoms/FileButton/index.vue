<script setup lang="ts">
import { ref } from 'vue'

import Button from '@/components/Atoms/Button/index.vue'

/**
 * Props
 */
type Props = {
  modelValue?: File | null
  accept?: string
  readonly?: boolean
  disabled?: boolean
  loading?: boolean
}
const props = withDefaults(defineProps<Props>(), {
  modelValue: undefined,
  accept: undefined,
  readonly: false,
  disabled: false,
  loading: false,
})

/**
 * Emits
 */
type Emits = {
  'update:modelValue': [file?: File]
}
const emit = defineEmits<Emits>()

/**
 * Ref
 */
const inputElement = ref<HTMLInputElement | null>(null)
</script>

<template>
  <input
    ref="inputElement"
    type="file"
    :accept="props.accept"
    :readonly="props.readonly"
    :disabled="props.disabled"
  />

  <Button> 添付 </Button>
</template>

<style scoped>
.input {
  display: none;
}

.button {
  width: auto;
}
</style>
