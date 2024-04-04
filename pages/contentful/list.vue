<script setup lang="ts">
import postList from '@/components/Organisms/ContentfulPostList/index.vue'
import { IBlogPageFields } from '~/@types/generated/contentful'
import { fetchEntriesByContentful } from '@/api/contentful'
import Title from '@/components/Atoms/Title/index.vue'

type Tags = {
  sys: {
    id: string
  }
}
type EntryItem = {
  fields: IBlogPageFields
  metadata: { tags: Tags[] }
}

const entries: any = await fetchEntriesByContentful()
const entryItemList: EntryItem[] = []
entries.items.forEach((entry: any) => {
  entryItemList.push(entry)
})
</script>

<template>
  <div class="p-5">
    <Title text="投稿一覧" />
    <postList :entryItemList="entryItemList" />
  </div>
</template>
