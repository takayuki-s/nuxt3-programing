<script setup lang="ts">
import { useForm, useFormValues } from 'vee-validate'
import * as yup from 'yup'

import InputText from '@/components/Molecules/InputText/index.vue'

/**
 * Types
 */
type FormValue = {
  name: string
  email: string
  phone: string
  postcode: string
  address: string
}

/**
 * Emits
 */
type Emits = {
  (e: 'submit'): void
}
const emit = defineEmits<Emits>()

/**
 * Refs
 */
const modelValue = defineModel<FormValue>({ required: true })

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

/**
 * Methods
 */
const onSubmit = handleSubmit((values) => {
  alert(JSON.stringify(values, null, 2))
})
</script>

<template>
  <div>
    <h1>バリデーションテスト（必須）</h1>
    <form class="validation-form-field" @submit="onSubmit">
      <InputText
        name="name"
        @update-value="(value: string) => (modelValue.name = value)"
      />
      <InputText
        name="email"
        type="email"
        @update-value="(value) => (modelValue.email = value)"
      />
      <InputText
        name="phone"
        @update-value="(value) => (modelValue.phone = value)"
      />
      <InputText
        name="postcode"
        @update-value="(value) => (modelValue.postcode = value)"
      />
      <InputText
        name="address"
        @update-value="(value) => (modelValue.address = value)"
      />
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
}
</style>
