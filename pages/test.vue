<script setup lang="ts">
import { ref } from 'vue'
import InputNum from '@/components/Molecules/InputNum/index.vue'
import Async from '@/components/Organisms/Async.vue'

/**
 * Refs
 */
const value = ref<number | string>('')

/**
 * Methods
 */
const updateValue = (inputValue: number | string) => {
  console.log('hello')
  value.value = inputValue
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
    <p>Parent component Message is: {{ value }}</p>
    <InputNum
      :value="value"
      @update-value="(inputValue) => updateValue(inputValue)"
    />
  </main>
</template>

<style scoped></style>
