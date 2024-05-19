<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { ProgressIndicator, ProgressRoot } from 'radix-vue'
import './style.css'

/**
 * Props
 */
type Props = {
  progressValue: number
}
const props = withDefaults(defineProps<Props>(), {
  progressValue: 10,
})

onMounted(() => {
  const timer = setTimeout(() => props.progressValue, 500)
  return () => clearTimeout(timer)
})
</script>

<template>
  <ProgressRoot
    v-model="props.progressValue"
    class="ProgressRoot"
    style="transform: translateZ(0)"
  >
    <ProgressIndicator
      class="ProgressIndicator"
      :style="`transform: translateX(-${100 - props.progressValue}%)`"
    />
  </ProgressRoot>
</template>
