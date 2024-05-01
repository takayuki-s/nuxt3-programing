<script setup lang="ts">
import { useField, useForm } from 'vee-validate'
import * as yup from 'yup'

/**
 * Props
 */
type Props = {
  label: string
}
const props = withDefaults(defineProps<Props>(), {
  label: '',
})

type Emits = {
  (e: 'updateIsValid', value: boolean): void
}
const emit = defineEmits<Emits>()

const schema = yup.object({
  title: yup.string().required('必須項目です'),
})
const { errors, meta } = useForm({
  validationSchema: schema,
})
const { value: title, handleChange } = useField('title')

const isValid = computed(() => {
  return meta.value.valid
})

watch(isValid, () => {
  emit('updateIsValid', isValid.value)
})
</script>

<template>
  <div class="flex flex-col">
    <label>{{ props.label }}</label>
    <input
      class="input"
      v-model="title"
      @blur="handleChange"
      @input="handleChange"
    />
    <p class="error-message">{{ errors.title }}</p>
  </div>
</template>

<style scoped>
.input {
  width: 300px;
  height: 30px;
  padding: 5px;
  font-size: 16px;
}
.error-message {
  margin: 5px;
  font-size: 12px;
}
</style>
