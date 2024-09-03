<script setup lang="ts">
import Title from '@/components/Atoms/Title/index.vue'
</script>

<template>
  <div class="p-5">
    <Title text="ABOUTページ" />
    <div class="flex justify-center p-5">
      <div class="profile">
        <p>{{ $t('about.greeting_1') }}</p>
        <p>{{ $t('about.greeting_2') }}</p>
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
