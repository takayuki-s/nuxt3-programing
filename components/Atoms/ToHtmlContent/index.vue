<script setup lang="ts">
import { documentToHtmlString } from '@contentful/rich-text-html-renderer'
import { Document } from '@contentful/rich-text-types'
import { MARKS } from '@contentful/rich-text-types'
type Props = {
  content: Document
}
const props = defineProps<Props>()
const options = {
  renderMark: {
    [MARKS.CODE]: (text: string) => `<pre><code>${text}</code></pre>`,
  },
}
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
    <div class="html-content" v-html="documentToHtmlString(content, options)" />
  </template>
  <template v-else-if="content.nodeType.valueOf() === 'hr'">
    <hr />
  </template>
  <template v-else-if="content.nodeType.valueOf() === 'blockquote'">
    <blockquote class="quote-1">
      <div class="html-content" v-html="documentToHtmlString(content)" />
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
.html-content ::v-deep code {
  padding: 5px;
  color: #f2f2f2;
  background-color: #333333;
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
