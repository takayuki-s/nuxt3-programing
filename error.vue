<script setup lang="ts">
type Props = {
  error: {
    statusCode?: string
    statusMessage?: string
    message?: string
    stack?: string
  }
}
const props = defineProps<Props>()

const onBackButtonClick = () => {
  clearError({ redirect: '/' })
}
</script>

<template>
  <h1>エラーが発生しました</h1>
  <p>{{ props.error.statusCode }}</p>
  <p>{{ props.error.statusMessage }}</p>
  <p>{{ props.error.message }}</p>
  <p>{{ props.error.stack }}</p>
  <button @click="onBackButtonClick">戻る</button>
</template>
