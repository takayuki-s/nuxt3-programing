<script setup lang="ts">
import InputForm from '@/components/Atoms/InputForm/index.vue'
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

const model: any = defineModel()

type Emits = {
  (e: 'updateIsValid', value: boolean): void
  (e: 'updateFormData', value: {}): void
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
const { handleChange: handleChangeName } = useField('name')
const { handleChange: handleChangeEmail } = useField('email')
const { handleChange: handleChangePhone } = useField('phone')

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
