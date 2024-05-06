<script setup lang="ts">
import Form from '@/components/Organisms/Form/index.vue'

/**
 * Refs
 */
const isValid = ref<boolean>(false)
const formData = ref<{}>({})

const updateIsValid = (emitIsValid: boolean) => {
  isValid.value = emitIsValid
}
const updateFormData = (data: {}) => {
  formData.value = data
}

const submitButton = () => {
  console.log('submit')
  console.log(formData.value)
}
</script>

<template>
  <div class="p-5">
    <Form
      @update-is-valid="updateIsValid"
      @update-form-data="updateFormData"
      v-model="formData"
    />
    <button
      class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded"
      :class="{ 'opacity-50 cursor-not-allowed': !isValid }"
      :disabled="!isValid"
      @click="submitButton"
    >
      Button
    </button>
  </div>
</template>

<style scoped></style>
