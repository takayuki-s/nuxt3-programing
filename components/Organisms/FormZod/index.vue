<script setup lang="ts">
import InputSlotForm from '@/components/Atoms/InputSlotForm/index.vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'
import z from 'zod'

/**
 * Emits
 */
type Emits = {
  (e: 'updateIsValid', value: boolean): void
  (e: 'updateFormData', value: {}): void
  (e: 'submit'): void
}
const emit = defineEmits<Emits>()

/**
 * Validation
 */
const createUserSchema = z.object({
  name: z.string().nonempty(),
  email: z.string().email().nonempty(),
})

/**
 * Methods
 */
const handleSubmit = () => {
  if (!isValid.value) {
    return
  }
  emit('submit')
}
</script>

<template>
  <div class="validation-form-field">
    <h1>バリデーションテスト（必須）</h1>
    <InputSlotForm label="名前" :error-message="errors.name">
      <input
        v-model="name"
        @blur="handleChangeName"
        @input="handleChangeName"
      />
    </InputSlotForm>
    <InputSlotForm label="メールアドレス" :error-message="errors.email">
      <input
        v-model="email"
        @blur="handleChangeEmail"
        @input="handleChangeEmail"
      />
    </InputSlotForm>
    <InputSlotForm label="電話番号" :error-message="errors.phone">
      <input
        v-model="phone"
        @blur="handleChangePhone"
        @input="handleChangePhone"
      />
    </InputSlotForm>
    <InputSlotForm label="郵便番号" :error-message="errors.postcode">
      <input
        v-model="postcode"
        @blur="handleChangePostcode"
        @input="handleChangePostcode"
      />
    </InputSlotForm>
    <InputSlotForm label="住所" :error-message="errors.address">
      <input
        class="address"
        v-model="address"
        @blur="handleChangeAddress"
        @input="handleChangeAddress"
      />
    </InputSlotForm>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-1/6"
      :class="{ 'opacity-50 cursor-not-allowed hover:bg-blue-500': !isValid }"
      :disabled="!isValid"
      @click="handleSubmit"
    >
      Button
    </button>
  </div>
</template>

<style scoped>
.validation-form-field {
  display: flex;
  flex-direction: column;
  gap: 5px;

  input {
    height: 24px;
    width: 300px;
    padding: 5px;
    font-size: 16px;
    background-color: white;
  }
  .input-area {
    display: flex;
    flex-direction: column;
    margin-bottom: 10px;
  }
}
.error-message {
  margin: 5px;
  font-size: 12px;
}
</style>
