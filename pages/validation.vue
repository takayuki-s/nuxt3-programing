<script setup lang="ts">
import { ref } from 'vue'
import Form from '@/components/Organisms/Form/index.vue'

/**
 * Refs
 */
const isValid = ref<string>(false)

const updateIsValid = (isValid) => {
  isValid.value = isValid
}
</script>

<template>
  <div class="p-5">
    <Form :is-valid="isValid" @update-is-valid="updateIsValid" />
    {{ isValid }}
  </div>
</template>

<style scoped></style>
