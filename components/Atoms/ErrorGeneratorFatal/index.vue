<script setup lang="ts">
const onThrowsErrorClick = () => {
  throw createError({
    message: 'fatalエラー発生',
    fatal: true,
  })
}
</script>

<template>
  <section>
    fatalエラー<button @click="onThrowsErrorClick">発生</button>
  </section>
</template>
