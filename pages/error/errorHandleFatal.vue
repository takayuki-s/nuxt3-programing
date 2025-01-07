<script setup lang="ts">
import type { Ref } from 'vue'
import ErrorGeneratorFatal from '@/components/Atoms/ErrorGeneratorFatal/index.vue'

const onResetButtonClick = (error: Ref) => {
  error.value = null
}
</script>

<template>
  <NuxtErrorBoundary>
    <ErrorGeneratorFatal />
    <template #error="errorProps">
      <p>エラーが発生しました</p>
      <p>{{ errorProps.error }}</p>
      <button @click="onResetButtonClick(errorProps.error)">
        エラーリセット
      </button>
    </template>
  </NuxtErrorBoundary>
  <p>
    <NuxtLink to="/">戻る</NuxtLink>
  </p>
</template>
