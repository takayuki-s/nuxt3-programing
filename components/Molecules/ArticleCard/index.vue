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
  <div class="p-6 bg-white rounded-xl shadow-md items-center">
    <!-- TODO: 動的画像ファイル -->
    <img :src="data.thumbnailUrl ? data.thumbnailUrl : sampleImgPath()" />
    <p class="text-lg">{{ data.title }}</p>
    <p class="text-sm text-slate-400 text-right">{{ data.date }}</p>
  </div>
</template>
