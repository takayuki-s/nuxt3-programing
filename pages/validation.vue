<script setup lang="ts">
import Form from '@/components/Organisms/Form/index.vue'
import FormNew from '@/components/Organisms/FormNew/index.vue'

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
    {{ formValue }}
  </div>
</template>

<style scoped></style>
