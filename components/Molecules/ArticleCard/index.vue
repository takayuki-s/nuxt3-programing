<script setup lang="ts">
import { ArticleCardData } from '@/types/article'
import { omitText, formatDate } from '@/composables/post/articles'
type Props = {
  data: ArticleCardData
}
const props = defineProps<Props>()
console.log('props', props.data)
const sampleImgPath = () => {
  return new URL('@/assets/images/sample.jpg', import.meta.url).href
}
</script>

<template>
  <NuxtLink :to="`/wp/post/${data.id}`">
    <div
      class="px-5 py-3 h-full bg-sky-50 rounded-xl shadow-md items-center cursor-pointer hover:bg-sky-100"
    >
      <img
        class="object-cover h-48 w-full"
        :src="data.thumbnailUrl ? data.thumbnailUrl : sampleImgPath()"
      />
      <div class="py-2 flex flex-col justify-between gap-1">
        <p class="text-md font-bold">{{ data.title }}</p>
        <p class="text-sm">{{ omitText(data.excerpt, 50) }}</p>
        <p class="text-sm text-slate-400 text-right">
          {{ formatDate(data.date) }}
        </p>
      </div>
    </div>
  </NuxtLink>
</template>
