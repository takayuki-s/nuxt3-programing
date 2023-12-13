<script setup lang="ts">
type Props = {
  content: string
}
const props = defineProps<Props>()
</script>

<template>
  <div v-dompurify-html="content"></div>
</template>
