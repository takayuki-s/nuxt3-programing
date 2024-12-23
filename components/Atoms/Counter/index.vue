<script setup lang="ts">
import { ref } from 'vue'

// カウントを管理する変数
const count = ref(0)

// カウントを増やす
const increment = () => {
  count.value++
}

// カウントを減らす
const decrement = () => {
  if (count.value > 0) {
    count.value--
  }
}
</script>

<template>
  <div class="counter">
    <p>Current Count: {{ count }}</p>
    <button @click="increment">+</button>
    <button @click="decrement" :disabled="count <= 0">-</button>
  </div>
</template>

<style scoped>
.counter {
  text-align: center;
  font-family: Arial, sans-serif;
}

button {
  margin: 0 5px;
  padding: 5px 10px;
  font-size: 16px;
  cursor: pointer;
}

button:disabled {
  cursor: not-allowed;
  opacity: 0.5;
}
</style>
