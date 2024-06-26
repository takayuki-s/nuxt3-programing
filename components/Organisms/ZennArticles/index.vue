<script setup lang="ts">
import type { ZennArticle } from '@/types/zennArticles'
type Props = {
  articles: ZennArticle[]
}
const props = defineProps<Props>()
</script>

<template>
  <div>{{ articles }}</div>
</template>
