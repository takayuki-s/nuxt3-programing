<script setup lang="ts">
type Props = {
  text: string
}
const props = defineProps<Props>()
</script>

<template>
  <p class="title">{{ props.text }}</p>
</template>

<style scoped>
.title {
  font-size: 20px;
  font-weight: 700;
  line-height: 150%;
}
</style>
