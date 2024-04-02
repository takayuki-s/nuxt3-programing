<script setup lang="ts">
import Title from '@/components/Atoms/Title/index.vue'
</script>

<template>
  <div class="p-5">
    <Title text="ABOUTページ" />
    <div class="flex justify-center p-5">
      <div class="profile">
        <p>こんにちは、てけです</p>
        <p>自分の経歴を簡単に紹介します！</p>
      </div>
    </div>
  </div>
</template>

<style scoped>
.profile {
  width: 620px;
  display: flex;
  flex-direction: column;
  gap: 15px;
}
</style>
