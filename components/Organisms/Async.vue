<script setup lang="ts">
const { data, pending, error } = await useFetch('/message', { server: false })
async function waitOneSecond() {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve('')
    }, 1000)
  })
}

async function main() {
  await waitOneSecond()
}

await main()
</script>

<template>
  <div v-if="data">{{ data }}</div>
</template>
