<script setup lang="ts">
import postList from '@/components/Organisms/PostList/index.vue'
const { data, pending, error } = await useFetch(
  'http://localhost:8000/wp-json/wp/v2/posts',
  {
    server: false,
  },
)
const dataList = computed(() => {
  return data
})
</script>

<template>
  <postList :dataList="dataList" />
</template>
