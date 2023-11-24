<script setup lang="ts">
const props = withDefaults(defineProps(), {
  data: 'props',
})
console.log(msg)
</script>

<template>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
  >
    <div>hello{{ data }}</div>
  </div>
</template>
