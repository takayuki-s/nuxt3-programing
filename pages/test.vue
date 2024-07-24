<script setup lang="ts">
import { ref } from 'vue'
import InputNum from '@/components/Molecules/InputNum/index.vue'
import Accordion from '@/components/Molecules/Accordion/index.vue'
import Combobox from '@/components/Molecules/Combobox/index.vue'
import Progress from '@/components/Molecules/Progress/index.vue'
import DatePicker from '@/components/Molecules/DatePicker/index.vue'
import Dialog from '@/components/Molecules/Dialog/index.vue'
import Toast from '@/components/Molecules/Toast/index.vue'
import Switch from '@/components/Molecules/Switch/index.vue'
import Async from '@/components/Organisms/Async.vue'
import { saveLocale } from '@/utils/i18n'

/**
 * Refs
 */
const value = ref<number | string>('')
const valueWithDefineModel = ref<number | string>('')
const name = ref('')
const username = ref('')

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
    <div class="w-max">
      <DatePicker />
    </div>
    <div>
      <Dialog
        :labels="['name', 'username']"
        v-model:name="name"
        v-model:username="username"
      />
      <p>name: {{ name }}</p>
      <p>username: {{ username }}</p>
    </div>
    <div>
      <Toast />
    </div>
    <div>
      <Switch />
    </div>
    <button @click="saveLocale('ja')">locale: ja</button>
    <button @click="saveLocale('en')">locale: en</button>
    <div>{{ $t('test') }}</div>
  </main>
</template>

<style scoped></style>
