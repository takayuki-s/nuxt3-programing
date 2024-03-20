<script setup lang="ts">
import { ArticleCardData } from '@/types/article'
import { omitText, formatDate } from '@/composables/post/articles'
import { displayTagName } from '@/utils/article'
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
  z-index: 0;
  border: 5px solid #eee;
  transition: all 0.4s;
}
.article-card:hover {
  box-shadow: 0 2px 3px rgba(0, 0, 0, 0.3);
}
.article-card:after {
  width: 80px;
  height: 35px;
  background-color: #d9ccb3;
  background-image: linear-gradient(
      45deg,
      #dfd4be 25%,
      transparent 25%,
      transparent 75%,
      #dfd4be 75%,
      #dfd4be
    ),
    linear-gradient(
      45deg,
      #dfd4be 25%,
      transparent 25%,
      transparent 75%,
      #dfd4be 75%,
      #dfd4be
    );
  background-position:
    0 0,
    12px 12px;
  background-size: 24px 24px;
  border-left: 2px dotted rgba(255, 255, 255, 0.9);
  border-right: 2px dotted rgba(255, 255, 255, 0.9);
  box-shadow: 0 0 5px rgba(255, 255, 255, 0.5);
  content: '';
  display: block;
  margin: 0 0 10px 0;
  padding: 5px 20px;
  color: #fff; /* マステ部分文字色 */
  text-align: center;
  position: absolute;
  top: -25px;
  left: calc(50% - 40px);
  transform: rotate(-3deg);
  -moz-transform: rotate(-3deg);
  -webkit-transform: rotate(-3deg);
  -o-transform: rotate(-3deg);
}
</style>
