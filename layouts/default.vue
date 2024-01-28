<script setup lang="ts">
import TailNavbar from '@/components/TailNavbar.vue'
</script>

<template>
  <div>
    <TailNavbar />
    <div class="p-3">
      <slot />
    </div>
  </div>
</template>
