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

/**
 * Emit
 */
type Emits = {
  (e: 'handleChange'): void
}
const emit = defineEmits<Emits>()

/**
 * defineModel
 */
const modelValue = defineModel()
</script>

<template>
  <div class="flex flex-col">
    <label>{{ props.label }}</label>
    <input class="input" v-model="modelValue" @blur="emit('handleChange')" />
    <p class="error-message">{{ props.errorMessage }}</p>
  </div>
</template>

<style scoped>
.input {
  width: 300px;
}
.error-message {
  margin: 5px;
  font-size: 12px;
}
</style>
