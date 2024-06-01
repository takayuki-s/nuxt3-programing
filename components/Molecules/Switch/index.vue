<script setup lang="ts">
import { SwitchRoot, SwitchThumb } from 'radix-vue'
import { ref } from 'vue'

const switchState = ref(false)
</script>

<template>
  <div :style="{ display: 'flex', alignItems: 'center' }">
    <label class="Label" for="airplane-mode"> Airplane mode </label>
    <SwitchRoot
      id="airplane-mode"
      v-model:checked="switchState"
      class="SwitchRoot"
    >
      <SwitchThumb class="SwitchThumb" />
    </SwitchRoot>
  </div>
</template>

<style scoped>
button {
  all: unset;
}

.SwitchRoot {
  width: 42px;
  height: 25px;
  background-color: black;
  border-radius: 9999px;
  position: relative;
  box-shadow: 0 2px 10px black;
  -webkit-tap-highlight-color: rgba(0, 0, 0, 0);
}
.SwitchRoot:focus {
  box-shadow: 0 0 0 2px black;
}
.SwitchRoot[data-state='checked'] {
  background-color: black;
}

.SwitchThumb {
  display: block;
  width: 21px;
  height: 21px;
  background-color: white;
  border-radius: 9999px;
  box-shadow: 0 2px 2px black;
  transition: transform 100ms;
  transform: translateX(2px);
  will-change: transform;
}
.SwitchThumb[data-state='checked'] {
  transform: translateX(19px);
}

.Label {
  color: black;
  font-size: 15px;
  line-height: 1;
}
</style>
