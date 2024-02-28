<script setup lang="ts">
import { ref, computed } from 'vue'
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
}

type Props = {
  entryItemList: EntryItem[]
}
const props = defineProps<Props>()

const filterTag = ref<string>('')

const filteredEntryItemList = computed(() => {
  return props.entryItemList.filter((entry: EntryItem) => {
    if (filterTag.value) {
      return (entry.metadata.tags as Tags[]).some(
        (tag: Tags) => tag.sys.id === filterTag.value,
      )
    } else {
      return props.entryItemList
    }
  })
})
const filterItem = (item: any) => {
  const thumbnailFileUrl = item.fields.thumbnail
    ? 'https:' + item.fields.thumbnail.fields.file.url
    : null
  const filteredData: ArticleCardData = {
    id: item.sys.id,
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
const removeFilterTag = () => {
  filterTag.value = ''
}
</script>

<template>
  <div class="p-5">
    <div v-if="filterTag" class="flex mb-5 gap-5">
      <div>
        <span
          id="badge-dismiss-green"
          class="inline-flex items-center px-2 py-1 me-2 text-sm font-medium text-green-800 bg-green-100 rounded dark:bg-green-900 dark:text-green-300"
        >
          {{ filterTag }}
          <button
            type="button"
            class="inline-flex items-center p-1 ms-2 text-sm text-green-400 bg-transparent rounded-sm hover:bg-green-200 hover:text-green-900 dark:hover:bg-green-800 dark:hover:text-green-300"
            data-dismiss-target="#badge-dismiss-green"
            aria-label="Remove"
            @click="removeFilterTag"
          >
            <svg
              class="w-2 h-2"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 14 14"
            >
              <path
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="m1 1 6 6m0 0 6 6M7 7l6-6M7 7l-6 6"
              />
            </svg>
            <span class="sr-only">×</span>
          </button>
        </span>
      </div>
    </div>
    <div
      v-if="entryItemList.length > 0"
      class="grid grid-cols-1 md:grid-cols-3 xl:grid-cols-5 gap-5"
    >
      <ul v-for="(item, index) in filteredEntryItemList" :key="index">
        <ArticleCard :data="filterItem(item)" v-model="filterTag" />
      </ul>
    </div>
    <div v-else>投稿データはありません</div>
  </div>
</template>
