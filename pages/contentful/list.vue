<script setup lang="ts">
import postList from '@/components/Organisms/ContentfulPostList/index.vue'
const limit = 100
</script>

<template>
  <postList :limit="limit" />
</template>
