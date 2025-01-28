<script setup lang="ts">
import { defineEmits } from 'vue'
import InputSlotForm from '@/components/Atoms/InputSlotForm/index.vue'
import { useForm, useField } from 'vee-validate'
import { z } from 'zod'

/**
 * Emits
 */
type Emits = {
  (e: 'updateIsValid', value: boolean): void
  (e: 'updateFormData', value: Record<string, any>): void
  (e: 'submit', value: Record<string, any>): void
}
const emit = defineEmits<Emits>()

/**
 * Validation Schema using Zod
 */
const createUserSchema = z.object({
  name: z.string().nonempty('名前は必須です'),
  email: z
    .string()
    .email('有効なメールアドレスを入力してください')
    .nonempty('メールアドレスは必須です'),
  phone: z.string().optional(),
  postcode: z.string().optional(),
  address: z.string().optional(),
})

/**
 * VeeValidate Integration
 */
const { setFieldError, isSubmitting } = useForm({
  initialValues: {
    name: '',
    email: '',
    phone: '',
    postcode: '',
    address: '',
  },
  validate: (values) => {
    const result = createUserSchema.safeParse(values)
    if (result.success) {
      return {} // No errors
    }
    // Map Zod errors to vee-validate errors
    const errors: Record<string, string> = {}
    result.error.errors.forEach((err) => {
      if (err.path.length > 0) {
        errors[err.path[0]] = err.message
      }
    })
    return errors
  },
})

const { value: name, errorMessage: nameError } = useField('name')
const { value: email, errorMessage: emailError } = useField('email')
const { value: phone, errorMessage: phoneError } = useField('phone')
const { value: postcode, errorMessage: postcodeError } = useField('postcode')
const { value: address, errorMessage: addressError } = useField('address')

/**
 * Submission
 */
const handleSubmit = () => {
  if (!isValid.value) {
    return
  }
  emit('submit')
}

/**
 * Manually trigger validation for specific fields
 */
const validateField = async (field: string) => {
  const result = createUserSchema.safeParse({ [field]: values[field] })
  if (!result.success) {
    const fieldError = result.error.errors.find((err) => err.path[0] === field)
    if (fieldError) {
      setFieldError(field, fieldError.message)
    }
  }
}
</script>

<template>
  <div class="validation-form-field">
    <h1>バリデーションテスト（必須）</h1>
    <InputSlotForm label="名前" :error-message="nameError">
      <input v-model="name" @blur="validateField('name')" />
    </InputSlotForm>
    <InputSlotForm label="メールアドレス" :error-message="emailError">
      <input v-model="email" @blur="validateField('email')" />
    </InputSlotForm>
    <InputSlotForm label="電話番号" :error-message="phoneError">
      <input v-model="phone" @blur="validateField('phone')" />
    </InputSlotForm>
    <InputSlotForm label="郵便番号" :error-message="postcodeError">
      <input v-model="postcode" @blur="validateField('postcode')" />
    </InputSlotForm>
    <InputSlotForm label="住所" :error-message="addressError">
      <input v-model="address" @blur="validateField('address')" />
    </InputSlotForm>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded cursor-pointer w-1/6"
      :class="{
        'opacity-50 cursor-not-allowed hover:bg-blue-500': isSubmitting,
      }"
      :disabled="isSubmitting"
      @click="submitForm"
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
</style>
