<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'

import InputText from '@/components/Molecules/InputText/index.vue'

/**
 * Emits
 */
type Emits = {
  (e: 'submit'): void
}
const emit = defineEmits<Emits>()

/**
 * Validation
 */
const schema = yup.object({
  name: yup.string().required('入力してください'),
  email: yup
    .string()
    .required('入力してください')
    .email('メールアドレスの形式ではありません'),
  phone: yup.number().typeError('数字を入力してください'),
  postcode: yup.number().typeError('数字を入力してください'),
  address: yup.string().required('入力してください'),
})
const { handleSubmit, meta } = useForm({
  validationSchema: schema,
})

const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
  <div>
    <h1>バリデーションテスト（必須）</h1>
    <form class="validation-form-field" @submit="onSubmit">
      <InputText name="name" />
      <InputText name="email" type="email" />
      <InputText name="phone" />
      <InputText name="postcode" />
      <InputText name="address" />
      <button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-1/6"
        :class="{
          'opacity-50 cursor-not-allowed hover:bg-blue-500': !meta.valid,
        }"
        :disabled="!meta.valid"
        @click="handleSubmit"
      >
        Button
      </button>
    </form>
  </div>
</template>

<style scoped>
.validation-form-field {
  display: flex;
  flex-direction: column;
  gap: 5px;

  .input-area {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
}
</style>
