<script setup>
import { useField } from 'vee-validate'

const props = defineProps({
  name: String,
  type: String,
})

const { value, errorMessage } = useField(() => props.name)
</script>

<template>
  <input class="input" v-model="value" :type="type || 'text'" />
  <span class="error-message">{{ errorMessage }}</span>
</template>

<style scoped>
.input {
  width: 300px;
  height: 24px;
  background-color: white;
  padding: 5px;
  font-size: 16px;
}
.error-message {
  margin: 5px;
  font-size: 12px;
}
</style>
