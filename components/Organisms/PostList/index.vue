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
  <div v-for="data in responseData" :key="data.id">
    <div
      class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
    >
      <div class="flex-shrink-0">
        <img class="h-12 w-12" src="@/public/logo.svg" alt="SVG Logo" />
      </div>
      <div>
        <div class="text-xl font-medium text-black">
          {{ data.title.rendered }}
        </div>
        <p class="text-gray-500">{{ data.date }}</p>
      </div>
    </div>
  </div>
</template>
