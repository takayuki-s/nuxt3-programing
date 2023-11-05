<script setup lang="ts">
const config = useRuntimeConfig()

const fetchData = await useFetch('/api/test')
</script>

<template>
  <main>
    <h1>Books</h1>
    <ul>
      <li v-for="{ id, title, author } of books?.books" :key="id">
        {{ title }} ({{ author }})
      </li>
    </ul>
  </main>
</template>
