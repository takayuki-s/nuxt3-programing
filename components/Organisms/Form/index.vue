<script setup lang="ts">
import InputForm from '@/components/Atoms/InputForm/index.vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

// type Props = {
//   isValid: boolean
// }
// const props = withDefaults(defineProps<Props>(), {
//   isValid: false,
// })

type Emits = {
  (e: 'updateIsValid', value: boolean): void
}
const emit = defineEmits<Emits>()

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

const isValid = computed(() => {
  return meta.value.valid
})

watch(isValid, () => {
  emit('updateIsValid', isValid.value)
})
</script>

<template>
  <div class="validation-form-field">
    <h1>バリデーションテスト（必須）</h1>
    <InputForm
      label="名前"
      v-model="name"
      :error-message="errors.name"
      @handle-change="
        (value) => {
          handleChangeName(value)
        }
      "
    />
    <InputForm
      label="メールアドレス"
      v-model="email"
      :error-message="errors.email"
      @handle-change="
        (value) => {
          handleChangeEmail(value)
        }
      "
    />
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
  </div>
</template>

<style scoped>
.validation-from-field {
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
