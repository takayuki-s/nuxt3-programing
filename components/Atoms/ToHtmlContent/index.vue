<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
type Props = {
  content: {}
}
const props = defineProps<Props>()
</script>

<template>
  <template
    v-if="
      (content.nodeType === 'paragraph') |
        (content.nodeType === 'unordered-list')
    "
  >
    <div class="html-content" v-html="documentToHtmlString(content)" />
  </template>
  <template v-else-if="content.nodeType === 'hr'">
    <hr />
  </template>
  <template v-else-if="content.nodeType === 'blockquote'">
    <blockquote class="quote-1">
      <p class="html-content" v-html="documentToHtmlString(content)" />
    </blockquote>
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
.quote-1 {
  max-width: 500px;
  padding: 0.5rem 1.5rem;
  border-left: 4px solid #f2f2f2;
  color: #333333;
}

.quote-1:has(cite) {
  padding-bottom: 0.5em;
}

.quote-1 p {
  margin-top: 0;
}

.quote-1 p:last-of-type {
  margin-bottom: 0;
}
</style>
