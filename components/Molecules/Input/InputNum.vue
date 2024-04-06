<script setup lang="ts">
import { ref } from 'vue'
const message = ref('')
const updateMessage = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    const inputValue = event.target.value.trim()
    if (/^\d+$/.test(inputValue)) {
      message.value = inputValue
    } else {
      const sanitizedValue = inputValue.replace(/[^\d]+/g, '')
      event.target.value = sanitizedValue
      message.value = sanitizedValue
    }
  }
}
</script>

<template>
  <p>Message is: {{ message }}</p>
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
