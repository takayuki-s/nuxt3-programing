<script setup lang="ts">
import { generateDynamicHTMLString } from '@/composables/post/articles'
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
// const dynamicContentHtml = generateDynamicHTMLString(
//   post.value.content.rendered,
// )
// if (post.value) {
//   const resultHTML = generateDynamicHTMLString(post.value.content.rendered)
//   document.getElementById('innerHtml').innerHTML = '<h1>aaa</h1>'
// }
onMounted(() => {
  console.log('mount')
  if (post.value) {
    console.log(generateDynamicHTMLString(post.value.content.rendered))
    const resultHTML = generateDynamicHTMLString(post.value.content.rendered)
    document.getElementById('innerHtml').innerHTML = resultHTML
  }
})
</script>

<template>
  <div>
    <div v-if="pending">読み込み中です</div>
    <div v-else-if="error">
      エラーが発生しました（投稿を取得できませんでした）
    </div>
    <div v-else>
      <div>
        <p v-if="post?.title" class="text-xl text-center">
          {{ post.title.rendered }}
        </p>
      </div>
      <div v-if="post?.content">
        {{ post.content.rendered }}
      </div>
    </div>
    <div id="innerHtml"></div>
  </div>
</template>
