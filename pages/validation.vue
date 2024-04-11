<script setup>
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const schema = yup.object({
  name: yup.string().required('必須項目です'),
  email: yup
    .string()
    .required('必須項目です')
    .email('メールアドレスの形式ではありません。'),
})
const { errors } = useForm({
  validationSchema: schema,
})
const { value: name } = useField('name')
const { value: email } = useField('email')
</script>

<template>
  <div class="p-5 validation-field">
    <h1>バリデーションテスト（必須）</h1>
    <p>名前</p>
    <input type="text" v-model="name" />
    <p>{{ errors.name }}</p>
    <p>メールアドレス</p>
    <input type="text" v-model="email" />
    <p>{{ errors.email }}</p>
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
