<script setup lang="ts">
import { ref } from 'vue'
import InputNum from '@/components/Molecules/InputNum/index.vue'
import Accordion from '@/components/Molecules/Accordion/index.vue'
import Combobox from '@/components/Molecules/Combobox/index.vue'
import Progress from '@/components/Molecules/Progress/index.vue'
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
  <main class="p-5 flex flex-col gap-3">
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
      class="w-1/4"
      :value="value"
      @update-value="(inputValue) => updateValue(inputValue)"
    />
    <p>Parent component valueWithDefineModel is: {{ valueWithDefineModel }}</p>
    <InputNumDefineModel v-model="valueWithDefineModel" />
    <div>
      <Accordion />
    </div>
    <div>
      <Combobox :additional-items="['beef', 'pork', 'chicken']" />
    </div>
    <div>
      <Progress :progress-value="50" />
    </div>
  </main>
</template>

<style scoped></style>
