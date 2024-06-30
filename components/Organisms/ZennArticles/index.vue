<script setup lang="ts">
import type { ZennArticle } from '@/types/zennArticles'
type Props = {
  articles: ZennArticle[]
}
const props = defineProps<Props>()

const getZennUrl = (path: string) => {
  return 'https://zenn.dev' + path
}
</script>

<template>
  <p v-for="article in articles" :key="article.id">
    <client-only>
      <li>
        <nuxt-link
          class="link"
          :to="getZennUrl(article.path)"
          target="_blank"
          >{{ article.title }}</nuxt-link
        >
      </li>
    </client-only>
  </p>
</template>

<style scoped></style>
