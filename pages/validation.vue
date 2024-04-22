<script setup lang="ts">
import { ref } from 'vue'
import Form from '@/components/Organisms/Form/index.vue'

/**
 * Refs
 */
const isValid = ref<boolean>(false)

const updateIsValid = (emitIsValid: boolean) => {
  isValid.value = emitIsValid
}

const submitButton = () => {
  console.log('submit')
}
</script>

<template>
  <div class="p-5">
    <Form @update-is-valid="updateIsValid" />
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
