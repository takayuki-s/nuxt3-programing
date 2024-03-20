<script setup lang="ts">
import TailNavbar from '@/components/TailNavbar.vue'
import Footer from '@/components/Footer.vue'
</script>

<template>
  <div
    class="layout-container bg-gradient-to-br from-amber-50 to-amber-50 via-orange-50"
  >
    <div class="header">
      <TailNavbar />
    </div>
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
.header {
  margin-bottom: 64px;
}
.footer {
  margin-top: auto;
}
</style>
