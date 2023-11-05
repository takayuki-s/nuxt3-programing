<script setup lang="ts">
const config = useRuntimeConfig()

const fetchData = await useFetch('/message')
console.log(fetchData)
const message = fetchData.data.message
</script>

<template>
  <main>
    <h1>message</h1>
    <p>{{ message }}</p>
  </main>
</template>
