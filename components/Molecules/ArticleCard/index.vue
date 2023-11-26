<script setup lang="ts">
const props = withDefaults(defineProps(), {
  msg: 'hello',
  labels: () => ['one', 'two'],
})
console.log(msg)
</script>

<template>
  <div
    class="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md flex items-center space-x-4"
  >
    <div>hello{{ msg }}</div>
  </div>
</template>
