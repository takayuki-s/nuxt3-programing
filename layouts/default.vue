<script setup lang="ts">
import TailNavbar from '@/components/TailNavbar.vue'
</script>

<template>
  <div>
    <TailNavbar />
    <div>
      <slot />
    </div>
  </div>
</template>
