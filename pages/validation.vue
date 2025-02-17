<script setup lang="ts">
import Form from '@/components/Organisms/Form/index.vue'
import FormNew from '@/components/Organisms/FormNew/index.vue'
import FormZod from '@/components/Organisms/FormZod/index.vue'

type FormValue = {
  name: string
  email: string
  phone: string
  postcode: string
  address: string
}

/**
 * Refs
 */
const formData = ref<{}>({})
const formValue = ref({
  name: '',
  email: '',
  phone: '',
  postcode: '',
  address: '',
})

const updateFormData = (data: {}) => {
  formData.value = data
}

const submit = () => {
  console.log('submit')
  console.log(formData.value)
  console.log(formValue.value)
}

// 定数（仮）
const comparisonValueMeta = {
  value: '50',
  messageMeta: '比較問題',
  type: 'LESS_THAN',
}
</script>

<template>
  <div class="p-5">
    <Form
      @update-form-data="updateFormData"
      @submit="submit"
      v-model="formData"
    />
    <FormNew @submit="submit" v-model="formValue" />
    <FormZod :comparison-value-meta="comparisonValueMeta" />
  </div>
</template>

<style scoped></style>
