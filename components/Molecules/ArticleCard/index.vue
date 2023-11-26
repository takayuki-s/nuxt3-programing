<script setup lang="ts">
import { ArticleCardData } from '@/types/article'
type Props = {
  data: ArticleCardData
}
const props = defineProps<Props>()
console.log('props', props.data)
</script>

<template>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
  >
    <div>hello</div>
  </div>
</template>
