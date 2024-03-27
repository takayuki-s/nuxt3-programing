<script setup lang="ts">
const { data, pending, error } = await useFetch('/message', { server: false })
</script>

<template>
  <div v-if="data">{{ data }}</div>
</template>
