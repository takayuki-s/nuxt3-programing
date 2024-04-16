<script setup>
import InputForm from '@/components/Atoms/InputForm/index.vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('必須項目です'),
  email: yup
    .string()
    .required('必須項目です')
    .email('メールアドレスの形式ではありません'),
  phone: yup.string().required('必須項目です'),
})
const { errors, meta } = useForm({
  validationSchema: schema,
})
const { value: name, handleChange: handleChangeName } = useField('name')
const { value: email, handleChange: handleChangeEmail } = useField('email')
const { value: phone, handleChange: handleChangePhone } = useField('phone')

const submitButton = () => {
  console.log('submit')
}
</script>

<template>
  <div class="p-5 validation-field">
    <h1>バリデーションテスト（必須）</h1>
    <p>名前</p>
    <input type="text" :value="name" @blur="handleChangeName" />
    <p class="error-message">{{ errors.name }}</p>
    <p>メールアドレス</p>
    <input type="text" :value="email" @blur="handleChangeEmail" />
    <p class="error-message">{{ errors.email }}</p>
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
    <p>メタデータ</p>
    <p>{{ meta }}</p>
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      :class="{ 'opacity-50 cursor-not-allowed': !meta.valid }"
      :disabled="!meta.valid"
      @click="submitButton"
    >
      Button
    </button>
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
.error-message {
  margin: 5px;
  font-size: 12px;
}
</style>
