<script setup lang="ts">
import { ArticleCardData } from '@/types/article'
import { omitText, formatDate } from '@/composables/post/articles'
type Props = {
  data: ArticleCardData
}
const props = defineProps<Props>()
const modelValue = defineModel<string>()

const goDetailPage = () => {
  navigateTo(`/contentful/post/${props.data.id}`, { external: true })
}
const filterByTag = (id: string, event: MouseEvent) => {
  event.stopPropagation()
  modelValue.value = id
}
</script>

<template>
  <div
    class="px-5 py-3 h-full bg-sky-50 rounded-xl shadow-md items-center cursor-pointer hover:bg-sky-100"
    @click="goDetailPage"
  >
    <img
      v-if="data.thumbnailUrl"
      class="object-cover h-48 w-full"
      :src="data.thumbnailUrl"
    />
    <img
      v-else
      class="object-cover h-48 w-full"
      src="@/assets/images/sample.jpg"
    />
    <div class="py-2 flex flex-col justify-between gap-1">
      <p class="text-md font-bold">{{ data.title }}</p>
      <p class="text-sm">{{ omitText(data.excerpt, 30) }}</p>
      <p class="text-sm text-right">
        <template v-for="tag in data.categories"
          ><span
            class="bg-green-100 z-10 hover:bg-green-200 text-green-800 text-sm font-medium me-2 px-2.5 py-0.5 rounded dark:bg-green-900 dark:text-green-300"
            @click="(event) => filterByTag(tag.sys.id, event)"
            >{{ tag.sys.id }}</span
          ></template
        >
      </p>
      <p class="text-sm text-slate-400 text-right">
        {{ formatDate(data.date) }}
      </p>
    </div>
  </div>
</template>
