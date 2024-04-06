<script setup lang="ts">
import InputNum from '@/components/Molecules/input/InputNum.vue'
import Async from '@/components/Organisms/Async.vue'
</script>

<template>
  <main class="p-5">
    <h1>message</h1>
    <Suspense timeout="0">
      <template #default>
        <Async />
      </template>
      <template #fallback>
        <div>loading</div>
      </template>
    </Suspense>
    <InputNum />
  </main>
</template>

<style scoped></style>
