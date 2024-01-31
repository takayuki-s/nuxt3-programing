<script setup lang="ts">
import { formatDate } from '@/composables/post/articles'
import { createClient } from 'contentful'
import ToHtmlContent from '@/components/Atoms/ToHtmlContent/index.vue'

const id = useRoute().params.id as string
const spaceId: string = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const accessToken: string = import.meta.env.VITE_CONTENTFUL_CD_ACCESS_TOKEN
const client = createClient({
  space: spaceId,
  accessToken: accessToken,
})
const entry: any = await client.getEntry(id)
console.log(entry)
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
      <nuxt-link to="/contentful/list" class="text-right">戻る</nuxt-link>
    </div>
  </div>
</template>

<style scoped>
.article {
  width: 620px;
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.contents {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
</style>
