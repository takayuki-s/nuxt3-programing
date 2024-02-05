<script setup lang="ts">
import { createClient } from 'contentful'
import ArticleCard from '@/components/Molecules/ArticleCard/index.vue'
import { ArticleCardData } from '@/types/article'
import { IBlogPageFields } from '~/@types/generated/contentful'

type Tags = {
  sys: {
    id: string
  }
}
type EntryItem = {
  fields: IBlogPageFields
  metadata: { tags: Tags[] }
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
const entries = await client.getEntries({
  content_type: 'blogPage',
})
entries.items.forEach((entry) => {
  entryItemList.push(entry)
})
const filteredEntryItemList = computed(() => {
  return entryItemList.filter((entry: EntryItem) => {
    return (entry.metadata.tags as Tags[]).some(
      (tag: Tags) => tag.sys.id === 'test',
    )
  })
})
const filterItem = (item: any) => {
  const thumbnailFileUrl = item.fields.thumbnail
    ? 'https:' + item.fields.thumbnail.fields.file.url
    : null
  const filteredData: ArticleCardData = {
    id: item.sys.id,
    author: 0,
    categories: item.metadata.tags,
    date: item.sys.createdAt,
    modified: item.sys.updatedAt,
    title: item.fields.title,
    link: '',
    content: item.fields.excerpt,
    excerpt: item.fields.excerpt,
    thumbnailUrl: thumbnailFileUrl,
  }
  return filteredData
}
console.log(entryItemList)
console.log(filteredEntryItemList.value)
</script>

<template>
  <div>
    <div
      v-if="entryItemList.length > 0"
      class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5 p-5"
    >
      <ul v-for="(item, index) in entryItemList" :key="index">
        <ArticleCard :data="filterItem(item)" />
      </ul>
    </div>
    <div v-else>投稿データはありません</div>
  </div>
</template>
