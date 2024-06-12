<script setup lang="ts">
/**
 * Props
 */
type Props = {
  label: string
  errorMessage?: string
}
const props = withDefaults(defineProps<Props>(), {
  label: '',
  errorMessage: '',
})
</script>

<template>
  <div class="flex flex-col">
    <label>{{ props.label }}</label>
    <slot />
    <p class="error-message">{{ props.errorMessage }}</p>
  </div>
</template>

<style scoped>
.error-message {
  margin: 5px;
  font-size: 12px;
}
</style>
