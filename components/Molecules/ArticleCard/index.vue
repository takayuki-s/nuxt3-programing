<script setup lang="ts">
import { ArticleCardData } from '@/types/article'
type Props = {
  data: ArticleCardData
}
const props = defineProps<Props>()
console.log('props', props.data)
</script>

<template>
  <div class="p-6 bg-white rounded-xl shadow-md items-center">
    <!-- TODO: 動的画像ファイル -->
    <img src="@/assets/images/sample.jpg" />
    <p class="text-lg">{{ data.title }}</p>
    <p class="text-sm text-slate-400 text-right">{{ data.date }}</p>
  </div>
</template>
