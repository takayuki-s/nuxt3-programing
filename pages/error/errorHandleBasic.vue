<script setup lang="ts">
import ErrorGeneratorBasic from '@/components/Atoms/ErrorGeneratorBasic/index.vue'
</script>

<template>
  <NuxtErrorBoundary>
    <ErrorGeneratorBasic />
    <template #error="errorProps">
      <p>エラーが発生しました</p>
      <p>{{ errorProps.error }}</p>
    </template>
  </NuxtErrorBoundary>
  <p>
    <NuxtLink to="/">戻る</NuxtLink>
  </p>
</template>
