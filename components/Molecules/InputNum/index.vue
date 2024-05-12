<script setup lang="ts">
/**
 * Props
 */
type Props = {
  value: number | string
}
const props = withDefaults(defineProps<Props>(), {
  value: '',
})

/**
 * Emits
 */
const emit = defineEmits<{
  (e: 'updateValue', value: number | string): void
}>()

/**
 * Methods
 */
const updateMessage = (event: Event) => {
  if (event.target instanceof HTMLInputElement) {
    const inputValue = event.target.value.trim()
    if (/^\d+$/.test(inputValue)) {
      emit('updateValue', inputValue)
    } else {
      const sanitizedValue = inputValue.replace(/[^\d]+/g, '')
      event.target.value = sanitizedValue
      emit('updateValue', sanitizedValue)
    }
  }
}
</script>

<template>
  <input class="text" @input="(e) => updateMessage(e)" placeholder="" />
</template>

<style scoped>
.text {
  height: 30px;
  padding: 5px;
  font-size: 16px;
  background-color: #ffffff;
}
</style>
