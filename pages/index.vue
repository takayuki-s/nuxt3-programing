<script setup lang="ts">
import Title from '@/components/Atoms/Title/index.vue'
import TopPicture from '@/components/Organisms/TopPicture/index.vue'
import postList from '@/components/Organisms/ContentfulPostList/index.vue'
import ProfileCard from '@/components/Molecules/ProfileCard/index.vue'
const limit = 10
</script>

<template>
  <TopPicture />
  <postList :limit="limit" />
  <div class="p-5">
    <Title text="TEKE CAFEについて" />
    <ProfileCard />
  </div>
</template>
