<script setup lang="ts">
import FadeInText from '@/components/Atoms/FadeInText/index.vue'
</script>

<template>
  <picture>
    <img class="top-image" src="@/assets/images/top.jpg" />
    <FadeInText text="TEKE CAFE" />
  </picture>
</template>

<style scoped>
.top-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>
