<script setup lang="ts">
const onThrowsErrorClick = () => {
  throw createError('エラー発生')
}
</script>

<template>
  <section>エラー<button @click="onThrowsErrorClick">発生</button></section>
</template>

<style scoped>
button {
  cursor: pointer;
}
</style>
