<script setup lang="ts">
import { ref } from 'vue'

/**
 * Props
 */
type Props = {
  value: number | string
}
const props = withDefaults(defineProps<Props>(), {
  value: '',
})

/**
 * Emits
 */
const emit = defineEmits<{
  (e: 'updateValue', value: number | string): void
}>()

const message = ref('')
const updateMessage = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    const inputValue = event.target.value.trim()
    if (/^\d+$/.test(inputValue)) {
      message.value = inputValue
      emit('updateValue', inputValue)
    } else {
      const sanitizedValue = inputValue.replace(/[^\d]+/g, '')
      console.log(sanitizedValue)
      event.target.value = sanitizedValue
      message.value = sanitizedValue
      emit('updateValue', sanitizedValue)
    }
  }
}
</script>

<template>
  <p>Child component Message is: {{ message }}</p>
  <input
    class="text"
    :value="message"
    @input="(e) => updateMessage(e)"
    placeholder=""
  />
</template>

<style scoped>
.text {
  height: 30px;
  padding: 5px;
  font-size: 16px;
}
</style>
