<script setup lang="ts">
import Title from '@/components/Atoms/Title/index.vue'
import TopPicture from '@/components/Organisms/TopPicture/index.vue'
import postList from '@/components/Organisms/ContentfulPostList/index.vue'
const limit = 10
</script>

<template>
  <TopPicture />
  <postList :limit="limit" />
</template>
