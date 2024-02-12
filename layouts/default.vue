<script setup lang="ts">
import TailNavbar from '@/components/TailNavbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div class="layout-container">
    <TailNavbar />
    <div>
      <slot />
    </div>
    <Footer class="footer" />
  </div>
</template>

<style scoped>
.layout-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}
.footer {
  margin-top: auto;
}
</style>
