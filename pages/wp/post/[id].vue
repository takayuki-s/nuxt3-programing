<script setup lang="ts">
type ReturnFetchType<T extends string> = ReturnType<
  typeof useFetch<void, unknown, T>
>['data']
type PostData = {
  title: string
}
const id = useRoute().params.id
console.log(id)
const {
  data: post,
  pending,
  error,
} = await useFetch<ReturnFetchType<`wp-json/wp/v2/posts/id`>>(
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
    <div v-else>
      <div>{{ post.title.rendered }}</div>
      <div>{{ post.content.rendered }}</div>
    </div>
  </div>
</template>
