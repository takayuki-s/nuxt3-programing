<script setup lang="ts">
import InputForm from '@/components/Atoms/InputForm/index.vue'
import InputFormWithValidation from '@/components/Molecules/InputFormWithValidation/index.vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const model: any = defineModel()

type Emits = {
  (e: 'updateIsValid', value: boolean): void
  (e: 'updateFormData', value: {}): void
  (e: 'submit'): void
}
const emit = defineEmits<Emits>()

const schema = yup.object({
  name: yup.string().required('必須項目です'),
  email: yup
    .string()
    .required('必須項目です')
    .email('メールアドレスの形式ではありません'),
  phone: yup
    .number()
    .required('必須項目です')
    .typeError('数字を入力してください'),
  address: yup.string().required('必須項目です'),
})
const { errors, meta } = useForm({
  validationSchema: schema,
})
const { handleChange: handleChangeName } = useField('name')
const { handleChange: handleChangeEmail } = useField('email')
const { handleChange: handleChangePhone } = useField('phone')
const { value: address, handleChange: handleChangeAddress } =
  useField('address')

const isValidInputForm = ref(false)

const isValid = computed(() => {
  return isValidInputForm.value && meta.value.valid
})

const updateIsValidInputForm = (emitIsValid: boolean) => {
  isValidInputForm.value = emitIsValid
}

const formData = computed(() => {
  return {
    name: model.value.name,
    email: model.value.email,
    phone: model.value.phone,
    test: model.value.test,
    address: address.value,
  }
})

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
    <InputForm
      label="名前"
      v-model="model.name"
      :error-message="errors.name"
      @handle-change="
        (value) => {
          handleChangeName(value)
        }
      "
    />
    <InputForm
      label="メールアドレス"
      v-model="model.email"
      :error-message="errors.email"
      @handle-change="
        (value) => {
          handleChangeEmail(value)
        }
      "
    />
    <InputForm
      label="電話番号"
      v-model="model.phone"
      :error-message="errors.phone"
      @handle-change="
        (value) => {
          handleChangePhone(value)
        }
      "
    />
    <InputFormWithValidation
      label="test"
      v-model="model.test"
      @update-is-valid="updateIsValidInputForm"
    />
    <div class="input-area">
      <label>住所</label>
      <input class="address" v-model="address" @blur="handleChangeAddress" />
      <p class="error-message">{{ errors.address }}</p>
    </div>
    {{ formData }}
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
