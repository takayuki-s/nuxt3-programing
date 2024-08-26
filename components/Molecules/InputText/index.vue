<script setup lang="ts">
import { useField } from 'vee-validate'

type Props = {
  name: string
  label: string
  type?: string
}

const props = defineProps<Props>()

/**
 * Emit
 */
type Emits = {
  (e: 'updateValue', value: string): void
}
const emit = defineEmits<Emits>()

const { value, errorMessage } = useField(() => props.name)

const updateValue = (e: Event) => {
  console.log('updateValue')
  if (e.target instanceof HTMLInputElement) {
    emit('updateValue', e.target.value)
  }
}
</script>

<template>
  <label>{{ props.label }}</label>
  <input
    class="input"
    v-model="value"
    :type="type || 'text'"
    @input="updateValue"
    @blur="updateValue"
  />
  <span class="error-message">{{ errorMessage }}</span>
</template>

<style scoped>
.input {
  width: 300px;
  height: 24px;
  background-color: white;
  padding: 5px;
  font-size: 16px;
}
.error-message {
  margin: 5px;
  font-size: 12px;
}
</style>
