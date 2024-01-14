<script setup lang="ts">
// import Article from '@/components/Molecules/Article/index.vue'
import { formatDate } from '@/composables/post/articles'
import { createClient } from 'contentful'
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'

type Entry = {
  fields: {
    body: {
      content: []
    }
  }
}

const id = useRoute().params.id as string
const spaceId: string = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const accessToken: string = import.meta.env.VITE_CONTENTFUL_CD_ACCESS_TOKEN
const client = createClient({
  space: spaceId,
  accessToken: accessToken,
})
const entry: Entry = await client.getEntry(id)
</script>

<template>
  <div class="flex justify-center">
    <div class="article">
      <div>
        <p class="text-4xl">タイトル</p>
        <p class="text-right">日付{{ formatDate('2023/12/12') }}</p>
      </div>
      <div>本文</div>
      <ul v-for="content in entry.fields.body.content">
        <li>{{ documentToHtmlString(content) }}</li>
      </ul>
    </div>
  </div>
</template>

<style scoped>
.article {
  width: 620px;
}
</style>
