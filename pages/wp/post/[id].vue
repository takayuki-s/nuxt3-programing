<script setup lang="ts">
import Article from '@/components/Molecules/Article/index.vue'

type AdditionalProperties = {
  [key: string]: any
}
type PostData<V extends AdditionalProperties> = {
  title: {
    rendered: string
  }
  content: {
    rendered: string
  }
  additionalProperties: V
}
const id = useRoute().params.id
const {
  data: post,
  pending,
  error,
} = await useFetch<PostData<AdditionalProperties>>(
  `http://localhost:8000/wp-json/wp/v2/posts/${id}`,
  {
    server: false,
  },
)
</script>

<template>
  <div>
    <div v-if="pending">読み込み中です</div>
    <div v-else-if="error">
      エラーが発生しました（投稿を取得できませんでした）
    </div>
    <div v-else class="flex justify-center">
      <div class="article">
        <div>
          <p v-if="post?.title" class="text-4xl">
            {{ post.title.rendered }}
          </p>
        </div>
        <div v-if="post?.content">
          <Article :content="post.content.rendered" />
        </div>
      </div>
    </div>
    <div id="innerHtml"></div>
  </div>
</template>

<style scoped>
.article {
  width: 620px;
}
</style>
