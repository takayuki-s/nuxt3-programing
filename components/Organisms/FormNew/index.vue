<script setup lang="ts">
import { useForm } from 'vee-validate'
import * as yup from 'yup'

import InputText from '@/components/Molecules/InputText/index.vue'
import Button from '@/components/Atoms/Button/index.vue'

/**
 * Types
 */
type ModelValue = {
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
const modelValue = defineModel<ModelValue>({ required: true })

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
  emit('submit')
})
</script>

<template>
  <div>
    <h1>バリデーションテスト（必須）</h1>
    <form class="validation-form-field" @submit="onSubmit">
      <InputText
        label="名前"
        name="name"
        @update-value="(value) => (modelValue.name = value)"
      />
      <InputText
        label="メールアドレス"
        name="email"
        type="email"
        @update-value="(value) => (modelValue.email = value)"
      />
      <InputText
        label="電話番号"
        name="phone"
        @update-value="(value) => (modelValue.phone = value)"
      />
      <InputText
        label="郵便番号"
        name="postcode"
        @update-value="(value) => (modelValue.postcode = value)"
      />
      <InputText
        label="住所"
        name="address"
        @update-value="(value) => (modelValue.address = value)"
      />
      <Button
        class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-1/6"
        :class="{
          'opacity-50 cursor-not-allowed hover:bg-blue-500': !meta.valid,
        }"
        text="送信"
        :disabled="!meta.valid"
        @click="handleSubmit"
      />
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
