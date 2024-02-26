<script setup lang="ts">
import postList from '@/components/Organisms/ContentfulPostList/index.vue'
import { createClient } from 'contentful'
import { IBlogPageFields } from '~/@types/generated/contentful'

type Tags = {
  sys: {
    id: string
  }
}
type EntryItem = {
  fields: IBlogPageFields
  metadata: { tags: Tags[] }
}

const limit = 10

const spaceId: string = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const accessToken: string = import.meta.env.VITE_CONTENTFUL_CD_ACCESS_TOKEN
const client = createClient({
  space: spaceId,
  accessToken: accessToken,
})
const entries = await client.getEntries({
  content_type: 'blogPage',
  limit: limit,
  order: ['-sys.createdAt'],
})
const entryItemList: EntryItem[] = []
entries.items.forEach((entry) => {
  entryItemList.push(entry)
})
</script>

<template>
  <postList :entryItemList="entryItemList" />
</template>
