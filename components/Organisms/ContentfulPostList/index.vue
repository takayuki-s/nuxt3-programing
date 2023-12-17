<script setup lang="ts">
type ReturnFetchType<T extends string> = ReturnType<
  typeof useFetch<void, unknown, T>
>['data']
const spaceId: string = import.meta.env.VITE_CONTENTFUL_SPACE_ID
const environmentId: string = import.meta.env.VITE_CONTENTFUL_ENVIRONMENT_ID
const accessToken: string = import.meta.env.VITE_CONTENTFUL_CD_ACCESS_TOKEN
const {
  data: postList,
  pending,
  error,
} = await useFetch<ReturnFetchType<'https://cdn.contentful.com/spaces/'>>(
  `https://cdn.contentful.com/spaces/${spaceId}/environments/${environmentId}/entries?access_token=${accessToken}`,
  {
    server: false,
  },
)
console.log(postList)
</script>

<template>
  <div>
    <div v-if="pending">読み込み中です</div>
    <div v-else-if="error">エラーが発生しました</div>
    <div v-else>
      <div
        v-if="postList"
        class="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-5 p-6"
      >
        <ul>
          <div>
            {{ postList }}
          </div>
        </ul>
      </div>
      <div v-else>投稿データはありません</div>
    </div>
  </div>
</template>
