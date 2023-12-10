<script setup lang="ts">
type Props = {
  content: string
}
const props = defineProps<Props>()
const parseHTMLString = (htmlString: string) => {
  const parser = new DOMParser()
  const doc = parser.parseFromString(htmlString, 'text/html')
  const elements = Array.from(doc.body.children)
  return elements
}
const resultArray = parseHTMLString(props.content)
console.log(resultArray[3], typeof resultArray)
</script>

<template>
  <div v-for="(tag, index) in resultArray" :key="index">{{ tag }}</div>
</template>
