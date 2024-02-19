<script setup lang="ts">
type Props = {
  text: string
}
const props = defineProps<Props>()
</script>

<template>
  <p class="fade-in-text text-4xl md:text-5xl lg:text-6xl">{{ text }}</p>
</template>

<style scoped>
.fade-in-text {
  opacity: 0;
  transform: translateY(100%);
  animation: fadeInFromBottom 3s forwards;
}

@keyframes fadeInFromBottom {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
