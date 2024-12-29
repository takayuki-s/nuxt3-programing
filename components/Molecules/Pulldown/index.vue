<template>
  <div class="dropdown">
    <select v-model="selectedValue" @change="emitSelection">
      <option value="" disabled>-- Select an option --</option>
      <option v-for="(item, index) in options" :key="index" :value="item">
        {{ item }}
      </option>
    </select>
  </div>
</template>

<script setup lang="ts">
import { defineProps, defineEmits, ref, watch } from 'vue'

// Props の定義
const props = defineProps<{
  options: string[]
  modelValue: string
}>()

// Emits の定義
const emit = defineEmits<{
  (e: 'update:modelValue', value: string): void
}>()

// 選択された値の状態を管理
const selectedValue = ref(props.modelValue)

// modelValue の変化を監視して selectedValue を更新
watch(
  () => props.modelValue,
  (newValue) => {
    selectedValue.value = newValue
  },
)

// 値を親コンポーネントに通知
const emitSelection = () => {
  emit('update:modelValue', selectedValue.value)
}
</script>

<style scoped>
.dropdown {
  display: inline-block;
}

select {
  padding: 8px;
  font-size: 16px;
  border-radius: 4px;
  border: 1px solid #ccc;
}
</style>
