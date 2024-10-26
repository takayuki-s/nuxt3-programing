<script setup lang="ts">
import { ref } from 'vue'
import Button from '@/components/Atoms/Button/index.vue'

const first = ref('')
const second = ref('')
const third = ref('')
const result = ref([])

const callApi = async () => {
  const members = [first.value, second.value, third.value].filter(
    (member) => member,
  )

  if (members.length > 0) {
    const res = await fetch('/api/playwright/form', {
      method: 'POST',
      body: JSON.stringify({ members }),
      headers: { 'Content-Type': 'application/json' },
    })

    if (res.ok) {
      const data = await res.json()
      result.value = data.result
    }
  }
}
</script>

<template>
  <div>
    <label htmlFor="first">1人目:</label>
    <input
      type="text"
      v-model="first"
      id="first"
      name="first"
      placeholder="1人目の名前を入力"
    />
    <br />
    <label htmlFor="second">2人目:</label>
    <input
      type="text"
      v-model="second"
      id="second"
      name="second"
      placeholder="2人目の名前を入力"
    />
    <br />
    <label htmlFor="third">3人目:</label>
    <input
      type="text"
      v-model="third"
      id="third"
      name="third"
      placeholder="3人目の名前を入力"
    />
    <br />
    <Button text="シャッフル" @click="callApi" />
    <br />
    <label for="result">結果</label>
    <output id="result">{{ result.join(' → ') }}</output>
  </div>
</template>
