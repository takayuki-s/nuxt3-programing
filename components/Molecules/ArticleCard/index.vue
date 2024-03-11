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

// JapaneseTranslationsの型定義
type JapaneseTranslationsType = {
  cafe: string
  kyoto: string
  test: string
}

// JapaneseTranslationsオブジェクト
const JapaneseTranslations: JapaneseTranslationsType = {
  cafe: 'カフェ',
  kyoto: '京都',
  test: 'テスト',
}

// displayTagName関数
const displayTagName = (id: string) => {
  return JapaneseTranslations[id as keyof JapaneseTranslationsType]
}
</script>

<template>
  <div
    class="article-card px-5 py-3 h-full items-center cursor-pointer bg-white"
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
            >{{ displayTagName(tag.sys.id) }}</span
          ></template
        >
      </p>
      <p class="text-sm text-slate-400 text-right">
        {{ formatDate(data.date) }}
      </p>
    </div>
  </div>
</template>

<style scoped>
.article-card {
  position: relative;
  border: 5px solid #eee; /* 線の太さ・種類・色 */
  z-index: 0;
  transition: all 0.4s;
}
.article-card:hover {
  top: -3px;
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
}
.article-card:before {
  background-color: #cca497; /* ワインポイントの色 */
  content: '';
  display: block;
  position: absolute;
  top: -5px;
  left: -5px;
  width: 5px;
  height: 5px;
  z-index: 1;
}
</style>
