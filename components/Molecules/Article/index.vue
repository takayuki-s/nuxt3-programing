<script setup lang="ts">
type Props = {
  content: string
}
const props = defineProps<Props>()
</script>

<template>
  <div class="flex justify-center">
    <div class="flex flex-col gap-5 mt-5" v-dompurify-html="content"></div>
  </div>
</template>
