<script setup lang="ts">
const { data, pending, error } = await useFetch(
  'http://localhost:8000/wp-json/wp/v2/posts',
  { server: false },
)
</script>

<template>
  <div>
    <template v-if="pending"> <p>loading...</p></template>
    <template v-else-if="error">
      <p>{{ error }}</p></template
    >
    <template v-else>
      <h2>Data</h2>
      <div>{{ data }}</div>
    </template>
  </div>
</template>
