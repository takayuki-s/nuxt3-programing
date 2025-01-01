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
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  color: #333;
  font-family: 'Arial', sans-serif;
}

p {
  font-size: 24px;
  font-weight: bold;
  margin-bottom: 20px;
}

button {
  margin: 0 10px;
  padding: 10px 20px;
  font-size: 18px;
  font-weight: bold;
  border: none;
  border-radius: 5px;
  background-color: #007bff;
  color: white;
  cursor: pointer;
  transition:
    background-color 0.3s ease,
    transform 0.2s ease;
}

button:hover {
  background-color: #0056b3;
  transform: translateY(-2px);
}

button:active {
  background-color: #004085;
  transform: translateY(0);
}

button:disabled {
  background-color: #d6d6d6;
  color: #9a9a9a;
  cursor: not-allowed;
  transform: none;
}

button:disabled:hover {
  transform: none;
}
</style>
