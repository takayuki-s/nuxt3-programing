<script setup lang="ts">
import TailNavbar from '@/components/TailNavbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div>
    <TailNavbar />
    <div>
      <slot />
    </div>
    <Footer />
  </div>
</template>
