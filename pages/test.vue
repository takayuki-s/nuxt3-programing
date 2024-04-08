<script setup lang="ts">
import { ref } from 'vue'
import InputNum from '@/components/Molecules/InputNum/index.vue'
import InputNumDefineModel from '@/components/Molecules/InputNumDefineModel/index.vue'
import Async from '@/components/Organisms/Async.vue'

/**
 * Refs
 */
const value = ref<number | string>('')
const valueWithDefineModel = ref<number | string>('')

/**
 * Methods
 */
const updateValue = (inputValue: number | string) => {
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
    <p>Parent component value is: {{ value }}</p>
    <InputNum
      :value="value"
      @update-value="(inputValue) => updateValue(inputValue)"
    />
    <p>Parent component valueWithDefineModel is: {{ valueWithDefineModel }}</p>
    <InputNumDefineModel v-model="valueWithDefineModel" />
  </main>
</template>

<style scoped></style>
