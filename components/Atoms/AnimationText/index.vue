<script setup lang="ts">
import { ref, onMounted, computed } from 'vue'

type Props = {
  text: string
}

const props = defineProps<Props>()
const isVisible = ref(false)
const TIMEOUT = 3000
let timer

const textArray = computed(() => {
  return props.text.split('')
})

onMounted(() => {
  let index = 0

  const showNextLetter = () => {
    if (index < textArray.value.length) {
      isVisible.value = true

      timer = setTimeout(() => {
        isVisible.value = false
        index++
        showNextLetter()
      }, TIMEOUT)
    }
  }

  showNextLetter()
})
</script>

<template>
  <p class="title" :class="{ 'title-visible': isVisible }">
    <span
      v-for="(part, index) in textArray"
      :key="index"
      class="title-part"
      :class="`title-part-${index + 1}`"
    >
      {{ part }}
    </span>
  </p>
</template>

<style scoped>
.title {
  display: flex;
  overflow: hidden;
  font-size: 128px;
  color: #aa8f7b;
}

.title-part {
  display: block;
  transform: translate(0, 105%);
  transition: transform cubic-bezier(0.215, 0.61, 0.355, 1) 0.5s;
}

.title-visible .title-part {
  transform: translate(0, 0);
}

.title-part {
  transition-delay: calc(0.06s * (var(--index) + 1));
}

.title-part:nth-child(2) {
  transition-delay: 0.06s;
}
.title-part:nth-child(3) {
  transition-delay: 0.12s;
}
.title-part:nth-child(4) {
  transition-delay: 0.18s;
}
.title-part:nth-child(5) {
  transition-delay: 0.24s;
}
.title-part:nth-child(6) {
  transition-delay: 0.3s;
}
.title-part:nth-child(7) {
  transition-delay: 0.36s;
}
.title-part:nth-child(8) {
  transition-delay: 0.42s;
}
.title-part:nth-child(9) {
  transition-delay: 0.48s;
}
.title-part:nth-child(10) {
  transition-delay: 0.54s;
}
.title-part:nth-child(11) {
  transition-delay: 0.6s;
}
.title-part:nth-child(12) {
  transition-delay: 0.66s;
}
.title-part:nth-child(13) {
  transition-delay: 0.72s;
}
.title-part:nth-child(14) {
  transition-delay: 0.78s;
}
</style>
