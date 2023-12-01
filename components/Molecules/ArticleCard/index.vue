<script setup lang="ts">
import { ArticleCardData } from '@/types/article'
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
  <div class="px-5 py-3 h-full bg-white rounded-xl shadow-md items-center">
    <img
      class="object-cover h-48 w-full"
      :src="data.thumbnailUrl ? data.thumbnailUrl : sampleImgPath()"
    />
    <div class="py-2 flex flex-col justify-between gap-1">
      <p class="text-md">{{ data.title }}</p>
      <p class="text-sm text-slate-400 text-right">{{ data.date }}</p>
    </div>
  </div>
</template>
