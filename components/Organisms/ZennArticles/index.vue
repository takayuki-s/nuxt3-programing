<script setup lang="ts">
import type { ZennArticle } from '@/types/zennArticles'
type Props = {
  articles: ZennArticle[]
}
const props = defineProps<Props>()

const getZennUrl = (path) => {
  return 'https://zenn.dev' + path
}
</script>

<template>
  <p v-for="article in articles" :key="article.id">
    <nuxt-link class="link" :to="getZennUrl(article.path)" target="_blank">{{
      article.title
    }}</nuxt-link>
  </p>
</template>

<style scoped></style>
