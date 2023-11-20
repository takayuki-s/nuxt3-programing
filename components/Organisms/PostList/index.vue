<script setup lang="ts">
import ArticleCard from '@/components/Molecules/ArticleCard/index.vue'
type ReturnFetchType<T extends string> = ReturnType<
  typeof useFetch<void, unknown, T>
>['data']
const responseData: ReturnFetchType<'/wp-json/wp/v2/posts'> = await useFetch(
  'http://localhost:8000/wp-json/wp/v2/posts',
  {
    server: false,
  },
).data
</script>

<template>
  <div class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5">
    <ul v-for="data in responseData" :key="data.id">
      <ArticleCard :data="data" />
    </ul>
    <!-- <div
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
    </div> -->
  </div>
</template>
