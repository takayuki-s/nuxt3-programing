<script setup>
import { useField } from 'vee-validate'
import * as yup from 'yup'

const { value, errorMessage } = useField(
  'test',
  yup.string().required('この項目は必須です'),
)
</script>

<template>
  <div class="p-5 validation-field">
    <h1>バリデーションテスト（必須）</h1>
    <input type="text" v-model="value" />
    <p>{{ errorMessage }}</p>
  </div>
</template>

<style scoped>
.validation-field {
  input {
    height: 30px;
    padding: 5px;
    font-size: 16px;
  }
}
</style>
