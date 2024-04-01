<script setup lang="ts">
import Async from '@/components/Organisms/Async.vue'
</script>

<template>
  <main>
    <h1>message</h1>
    <Suspense timeout="0">
      <template #default>
        <Async />
      </template>
      <template #fallback>
        <div>loading</div>
      </template>
    </Suspense>
  </main>
</template>
