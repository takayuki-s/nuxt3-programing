<script setup lang="ts">
import { useField } from 'vee-validate'

const props = defineProps({
  name: String,
  type: String,
})

/**
 * Emit
 */
type Emits = {
  (e: 'updateValue', value: unknown | string): void
}
const emit = defineEmits<Emits>()

const { value, errorMessage } = useField(() => props.name)

const updateValue = (e) => {
  emit('updateValue', e.target.value)
}
</script>

<template>
  <input
    class="input"
    v-model="value"
    :type="type || 'text'"
    @input="updateValue"
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
