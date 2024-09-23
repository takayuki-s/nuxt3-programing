<script setup lang="ts">
import { ref } from 'vue'
import FileButton from '~/components/Atoms/FileButton/index.vue'
import Accordion from '@/components/Molecules/Accordion/index.vue'
import Combobox from '@/components/Molecules/Combobox/index.vue'
import Progress from '@/components/Molecules/Progress/index.vue'
import DatePicker from '@/components/Molecules/DatePicker/index.vue'
import Dialog from '@/components/Molecules/Dialog/index.vue'
import Toast from '@/components/Molecules/Toast/index.vue'
import Switch from '@/components/Molecules/Switch/index.vue'
import { TZDate } from '@date-fns/tz'

/**
 * Refs
 */
const valueWithDefineModel = ref<number | string>('')
const name = ref('')
const username = ref('')
const open = ref(false)

/**
 * Methods
 */
const date = new Date()
const SingaporeDate = new TZDate(new Date(), 'Asia/Singapore')
</script>

<template>
  <main class="p-5 flex flex-col gap-3">
    <p>Parent component valueWithDefineModel is: {{ valueWithDefineModel }}</p>
    <div>
      <Accordion />
    </div>
    <div>
      <Combobox :additional-items="['beef', 'pork', 'chicken']" />
    </div>
    <div>
      <Progress :progress-value="50" />
    </div>
    <div class="w-max">
      <DatePicker />
    </div>
    <div>
      <Dialog
        :labels="['name', 'username']"
        v-model:name="name"
        v-model:username="username"
      />
      <p>name: {{ name }}</p>
      <p>username: {{ username }}</p>
    </div>
    <div>
      <Toast />
    </div>
    <div>
      <Switch />
    </div>
    <div>
      <FileButton />
    </div>
    <button @click="open = true">Open Modal</button>
    <ClientOnly>
      <Teleport to="#teleports">
        <div v-if="open" class="modal">
          <p>Hello from the modal!</p>
          <button @click="open = false">Close</button>
        </div>
      </Teleport>
    </ClientOnly>
    <div class="flex flex-col">
      <p>TimeZone</p>
      <p>date: {{ date }}</p>
      <p>SingaporeDate: {{ SingaporeDate }}</p>
    </div>
  </main>
</template>

<style scoped>
.modal {
  width: 400px;
  height: 400px;
}
</style>
