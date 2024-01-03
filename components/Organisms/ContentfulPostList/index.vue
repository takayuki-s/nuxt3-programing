<script setup lang="ts">
import { createClient } from 'contentful'
import ArticleCard from '@/components/Molecules/ArticleCard/index.vue'
import { ArticleCardData } from '@/types/article'
import { IBlogPageFields } from '~/@types/generated/contentful'

type AdditionalProperties = {
  [key: string]: any
}
type PostData<V extends AdditionalProperties> = {
  items: {}
  includes: {
    Asset: [{ sys: { id: string } }]
    additionalProperties: V
  }
  additionalProperties: V
}
type EntryItem = {
  fields: IBlogPageFields
  metadata: {}
  sys: {}
}

const spaceId: string = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const environmentId: string = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT_ID
const accessToken: string = import.meta.env.VITE_CONTENTFUL_CD_ACCESS_TOKEN
const client = createClient({
  space: spaceId,
  accessToken: accessToken,
})
const entryItemList: EntryItem[] = []
const getEntries = async () => {
  try {
    const entries = await client.getEntries({
      content_type: 'blogPage',
    })
    entries.items.forEach((entry) => {
      entryItemList.push(entry)
    })
  } catch (error) {
    console.error('記事の取得に失敗しました:', error)
  }
}
const {
  data: postList,
  pending,
  error,
} = await useFetch<PostData<AdditionalProperties>>(
  `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`,
  {
    server: false,
  },
)
const filterData = (post: any) => {
  const filteredData: ArticleCardData = {
    id: post.sys.id,
    author: 0,
    categories: post.metadata.tags,
    date: post.sys.createdAt,
    modified: post.sys.updatedAt,
    title: post.fields.title,
    link: '',
    content: post.fields.excerpt,
    excerpt: post.fields.excerpt,
    thumbnailUrl: '',
  }
  return filteredData
}
onMounted(() => {
  getEntries()
})
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
        <ul v-for="(post, index) in postList.items" :key="index">
          <ArticleCard :data="filterData(post)" />
        </ul>
      </div>
      <div v-else>投稿データはありません</div>
    </div>
    <div>{{ entryItemList }}</div>
  </div>
</template>
