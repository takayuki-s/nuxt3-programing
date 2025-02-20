<script setup lang="ts">
import { computed } from 'vue'

type Props = {
  text: string
  color?: string
  disabled?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  text: 'button',
  color: '',
  disabled: false,
})

const colorSelector = computed(() => {
  if (props.color === 'red') {
    return 'button-color--red'
  } else if (props.color === 'blue') {
    return 'button-color--blue'
  } else {
    return 'default-color'
  }
})
</script>

<template>
  <div class="button-style" :class="colorSelector">
    <button
      class="button"
      :disabled="disabled"
      :class="{ disabled: 'opacity-50 cursor-not-allowed' }"
    >
      {{ text }}
    </button>
  </div>
</template>

<style>
.button {
  color: #fff;
  width: auto;
  text-align: center;
  vertical-align: baseline;
  cursor: pointer;
}
.button-style {
  padding: 10px 20px;
  border-radius: 6px;
  width: fit-content;
  cursor: pointer;
}
.default-color {
  background-color: #f08700;
}
.default-color:hover {
  background-color: #f08700;
}
.button-color--blue {
  background-color: #23c9ff;
}
.button-color--blue:hover {
  background-color: #23c9ff;
}
.button-color--red {
  background-color: #de3c4b;
}
.button-color--red:hover {
  background-color: #de3c4b;
}
</style>
