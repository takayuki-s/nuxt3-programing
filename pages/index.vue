<script setup lang="ts">
import Title from '@/components/Atoms/Title/index.vue'
import TopPicture from '@/components/Organisms/TopPicture/index.vue'
import postList from '@/components/Organisms/ContentfulPostList/index.vue'
import ZennArticles from '@/components/Organisms/ZennArticles/index.vue'
import ProfileCard from '@/components/Molecules/ProfileCard/index.vue'
import { fetchEntriesByContentful } from '@/api/contentful'
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
const entries: any = await fetchEntriesByContentful()
const entryItemList: EntryItem[] = []
entries.items.forEach((entry: any) => {
  entryItemList.push(entry)
})
const specialTag = 'kyoto'
const filteredEntryItemList = computed(() => {
  return entryItemList.filter((entry: EntryItem) => {
    return (entry.metadata.tags as Tags[]).some(
      (tag: Tags) => tag.sys.id === specialTag,
    )
  })
})
const { data: zennArticles } = await useFetch(
  import.meta.env.VITE_ZENN_ARTICLES_FETCH_API,
)
console.log(zennArticles)
</script>

<template>
  <TopPicture />
  <div class="p-5">
    <Title text="新着記事" />
    <Suspense>
      <postList :entryItemList="entryItemList" />
      <template #fallback> Loading... </template>
    </Suspense>
    <Title text="京都特集" />
    <postList :entryItemList="filteredEntryItemList" />
    <Title text="TEKE CAFEについて" />
    <div class="p-5">
      <ProfileCard />
    </div>
    <Title text="Zenn 記事一覧" />
    <div class="p-5">
      <ZennArticles :articles="zennArticles.articles" />
    </div>
  </div>
</template>
