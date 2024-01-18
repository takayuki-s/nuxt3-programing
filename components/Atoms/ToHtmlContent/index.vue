<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
type Props = {
  content: {}
}
const props = defineProps<Props>()
</script>

<template>
  <template v-if="true">
    <div class="html-content" v-html="documentToHtmlString(content)" />
  </template>
</template>

<style scoped>
.html-content ::v-deep li {
  display: block;
}
.html-content ::v-deep li p:before {
  content: '・';
  font-weight: bold;
}
</style>
