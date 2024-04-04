<script setup lang="ts">
import { ref } from 'vue'
import Async from '@/components/Organisms/Async.vue'
const message = ref('')
const updateMessage = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    const inputValue = event.target.value.trim()
    if (/^\d+$/.test(inputValue)) {
      message.value = inputValue
    } else {
      message.value = ''
    }
  }
}
</script>

<template>
  <main class="p-5">
    <h1>message</h1>
    <Suspense timeout="0">
      <template #default>
        <Async />
      </template>
      <template #fallback>
        <div>loading</div>
      </template>
    </Suspense>
    <br />
    <p>Message is: {{ message }}</p>
    <input
      class="text"
      :value="message"
      @input="(e) => updateMessage(e)"
      placeholder=""
    />
  </main>
</template>

<style scoped>
.text {
  height: 30px;
  padding: 5px;
  font-size: 16px;
}
</style>
