<script setup lang="ts">
import ArticleCard from '@/components/Molecules/ArticleCard/index.vue'
import { ArticleCardData } from '@/types/article'
type ReturnFetchType<T extends string> = ReturnType<
  typeof useFetch<void, unknown, T>
>['data']
const {
  data: postList,
  pending,
  error,
} = await useFetch<ReturnFetchType<'wp-json/wp/v2/posts?_embed'>>(
  'http://localhost:8000/wp-json/wp/v2/posts?_embed',
  {
    server: false,
  },
)

const filterData = (data: any) => {
  // TODO: ホンマにこの判定で良いのか
  const thumbnailUrl = data._embedded['wp:featuredmedia']
    ? data._embedded['wp:featuredmedia'][0].media_details.sizes.thumbnail
        .source_url
    : null
  const filteredData: ArticleCardData = {
    id: data.id,
    categories: data.categories,
    date: data.date,
    modified: data.modified,
    title: data.title.rendered,
    link: data.link,
    content: data.content,
    excerpt: data.excerpt.rendered,
    thumbnailUrl: thumbnailUrl,
  }
  return filteredData
}
</script>

<template>
  <div>
    <div v-if="pending">読み込み中です</div>
    <div v-else-if="error">エラーが発生しました</div>
    <div v-else>
      <div
        v-if="postList"
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 p-6"
      >
        <ul v-for="(data, index) in postList" :key="index">
          <ArticleCard :data="filterData(data)" />
        </ul>
      </div>
      <div v-else>投稿データはありません</div>
    </div>
  </div>
</template>
