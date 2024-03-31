<script setup lang="ts">
import { formatDate } from '@/composables/post/articles'
import { getEntryByContentful } from '@/api/contentful'
import ToHtmlContent from '@/components/Atoms/ToHtmlContent/index.vue'

const id = useRoute().params.id as string
const entry: any = await getEntryByContentful(id)
</script>

<template>
  <div class="flex justify-center p-5">
    <div class="article">
      <div>
        <p class="text-4xl">{{ entry.fields.title }}</p>
      </div>
      <div>
        <p class="text-right">{{ formatDate(entry.sys.createdAt) }}</p>
      </div>
      <div class="contents">
        <div v-for="content in entry.fields.body.content">
          <ToHtmlContent :content="content" />
        </div>
      </div>
      <nuxt-link to="/" class="text-right link">トップページへ</nuxt-link>
      <nuxt-link to="/contentful/list" class="text-right link"
        >記事一覧ページへ</nuxt-link
      >
    </div>
  </div>
</template>

<style scoped>
.article {
  width: 620px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
.contents {
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
