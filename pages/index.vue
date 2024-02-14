<script setup lang="ts">
import Title from '@/components/Atoms/Title/index.vue'
</script>

<template>
  <picture>
    <img class="top-image" src="@/assets/images/top.jpg" />
  </picture>
  <div class="p-5">
    <Title text="メインページ" />
  </div>
</template>

<style scoped>
.top-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
</style>
