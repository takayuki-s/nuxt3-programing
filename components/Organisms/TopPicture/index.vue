<script setup lang="ts">
import FadeInText from '@/components/Atoms/FadeInText/index.vue'
</script>

<template>
  <div class="image-container">
    <picture>
      <img class="top-image" src="@/assets/images/top.jpg" />
    </picture>
    <FadeInText class="text" text="TEKE CAFE" />
  </div>
</template>

<style scoped>
.image-container {
  position: relative;
}
.top-image {
  width: 100%;
  height: 400px;
  object-fit: cover;
}
.text {
  position: absolute;
  top: 50%;
  left: 55%;
  transform: translate(-50%, -50%);
}
</style>
