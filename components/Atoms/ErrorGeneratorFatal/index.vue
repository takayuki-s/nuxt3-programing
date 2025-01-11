<script setup lang="ts">
import Button from '@/components/Atoms/Button/index.vue'
const onThrowsErrorClick = () => {
  throw createError({
    message: 'fatalエラー発生',
    fatal: true,
  })
}
</script>

<template>
  <section>
    fatalエラー<Button @click="onThrowsErrorClick" text="発生" />
  </section>
</template>
