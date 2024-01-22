<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Document } from '@contentful/rich-text-types'
type Props = {
  content: Document
}
const props = defineProps<Props>()
const getImgUrl = (url: string) => {
  return `https://${url}`
}
</script>

<template>
  <template
    v-if="
      content.nodeType.valueOf() === 'paragraph' ||
      content.nodeType.valueOf() === 'unordered-list'
    "
  >
    <div class="html-content" v-html="documentToHtmlString(content)" />
  </template>
  <template v-else-if="content.nodeType.valueOf() === 'hr'">
    <hr />
  </template>
  <template v-else-if="content.nodeType.valueOf() === 'blockquote'">
    <blockquote class="quote-1">
      <p
        class="html-content"
        v-for="(item, index) in content.content"
        :key="index"
      >
        <!-- @vue-expect-error 型定義にはちゃんとvalue: stringで定義されている -->
        {{ item.content[0].value }}
      </p>
    </blockquote>
  </template>
  <template v-else-if="content.nodeType.valueOf() === 'embedded-asset-block'">
    <picture>
      <img
        :src="getImgUrl(content.data.target.fields.file.url)"
        :alt="content.data.target.fields.description"
      />
    </picture>
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
