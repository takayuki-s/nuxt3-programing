<script setup lang="ts">
const model = defineModel()
</script>

<template>
  <input class="text" v-model="model" />
</template>

<style scoped>
.text {
  height: 30px;
  padding: 5px;
  font-size: 16px;
}
</style>
