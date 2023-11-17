<script setup lang="ts">
type ReturnFetchType<T> = ReturnType<typeof useFetch<void, unknown, T>>['data']
const responseData: ReturnFetchType = await useFetch(
  'http://localhost:8000/wp-json/wp/v2/posts',
  {
    server: false,
  },
).data
</script>

<template>
  <div>{{ responseData }}</div>
</template>
