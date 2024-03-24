<script setup lang="ts">
import Async from '@/components/Organisms/Async.vue'
const { data, pending, error } = await useFetch('/message', { server: false })
</script>

<template>
  <main>
    <h1>message</h1>
    <!-- <div>
      <template v-if="pending"> <p>loading...</p></template>
      <template v-else-if="error">
        <p>{{ error }}</p></template
      >
      <template v-else>
        <h2>{{ data.message }}</h2>
      </template>
    </div> -->
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
