<script setup lang="ts">
import InputForm from '@/components/Atoms/InputForm/index.vue'
import InputSlotForm from '@/components/Atoms/InputSlotForm/index.vue'
import InputFormWithValidation from '@/components/Molecules/InputFormWithValidation/index.vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

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
const schema = yup.object({
  name: yup.string().required('入力してください'),
  email: yup
    .string()
    .required('入力してください')
    .email('メールアドレスの形式ではありません'),
  phone: yup
    .number()
    .required('入力してください')
    .typeError('数字を入力してください'),
  postcode: yup
    .number()
    .required('入力してください')
    .typeError('数字を入力してください'),
  address: yup.string().required('入力してください'),
})
const { errors, meta } = useForm({
  validationSchema: schema,
})
const { value: name, handleChange: handleChangeName } = useField('name')
const { value: email, handleChange: handleChangeEmail } = useField('email')
const { value: phone, handleChange: handleChangePhone } = useField('phone')
const { value: postcode, handleChange: handleChangePostcode } =
  useField('postcode')
const { value: address, handleChange: handleChangeAddress } =
  useField('address')

/**
 * Refs
 */
const test = ref<string>('')
const isValidInputForm = ref(false)

/**
 * Computed
 */

const isValid = computed(() => {
  return isValidInputForm.value && meta.value.valid
})
const formData = computed(() => {
  return {
    name: name.value,
    email: email.value,
    phone: phone.value,
    test: test.value,
    address: address.value,
  }
})

/**
 * Methods
 */
const updateIsValidInputForm = (emitIsValid: boolean) => {
  isValidInputForm.value = emitIsValid
}
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
        v-model="email"
        @blur="handleChangePhone"
        @input="handleChangePhone"
      />
    </InputSlotForm>
    <InputForm
      label="電話番号"
      v-model="phone"
      :error-message="errors.phone"
      @handle-change="
        (value) => {
          handleChangePhone(value)
        }
      "
    />
    <InputFormWithValidation
      label="test"
      v-model="test"
      @update-is-valid="updateIsValidInputForm"
    />
    <InputSlotForm label="郵便番号" :error-message="errors.postcode">
      <input
        v-model="postcode"
        @blur="handleChangePostcode"
        @input="handleChangePostcode"
      />
    </InputSlotForm>
    <div class="input-area">
      <label>住所</label>
      <input
        class="address"
        v-model="address"
        @blur="handleChangeAddress"
        @input="handleChangePostcode"
      />
      <p class="error-message">{{ errors.address }}</p>
    </div>
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
