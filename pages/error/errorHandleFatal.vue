<script setup lang="ts">
import type { Ref } from 'vue'
import ErrorGeneratorFatal from '@/components/Atoms/ErrorGeneratorFatal/index.vue'

const onResetButtonClick = (error: Ref) => {
  error.value = null
}
</script>

<template>
  <ErrorGeneratorFatal />
  <p>
    <NuxtLink to="/">戻る</NuxtLink>
  </p>
</template>
