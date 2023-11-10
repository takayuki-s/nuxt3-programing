<script setup lang="ts">
const config = useRuntimeConfig()

const fetchData = await useFetch('/message')
console.log(fetchData.data)
// const message = fetchData.data.value.message
</script>

<template>
  <main>
    <h1>message</h1>
    <!-- <p>{{ message }}</p> -->
  </main>
</template>
