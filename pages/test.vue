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
import Button from '@/components/Atoms/Button/index.vue'
import Counter from '@/components/Atoms/Counter/index.vue'
import { TZDate } from '@date-fns/tz'
import { format, compareAsc } from 'date-fns'
import { addHours } from 'date-fns'
import { useCounterStore } from '@/stores/Counter'
import { storeToRefs } from 'pinia'
import Bignumber from 'bignumber.js'

/**
 * Refs
 */
const valueWithDefineModel = ref<number | string>('')
const name = ref('')
const username = ref('')
const open = ref(false)

/**
 * Stores
 */
const counterStore = useCounterStore()
const { increment } = counterStore
const { count } = storeToRefs(counterStore)

/**
 * Constants
 */
const date = new Date()
const addHoursDate = addHours(date, 2).toString()
const formattedDate = format(date, 'yyyy/MM/dd HH:mm')
const SingaporeDate = new TZDate(new Date(), 'Asia/Singapore')
const formattedSingaporeDate = format(SingaporeDate, 'yyyy/MM/dd HH:mm')
const dates = [
  new Date(1995, 6, 2),
  new Date(1987, 1, 11),
  new Date(1989, 6, 10),
]
const sortedDates = dates.sort(compareAsc)
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
      <p>formattedDate: {{ formattedDate }}</p>
      <p>addHoursDate: {{ addHoursDate }}</p>
      <p>SingaporeDate: {{ SingaporeDate }}</p>
      <p>formattedSingaporeDate: {{ formattedSingaporeDate }}</p>
      <p>sortedDates: {{ sortedDates }}</p>
    </div>
    <div>
      <h1>Count:{{ count }}</h1>
      <Button @click="increment" text="+1する" />
    </div>
    <div>
      <Counter />
    </div>
    <div>
      <p>v-cloak</p>
      <p v-cloak>レンダリングまで非表示</p>
    </div>
    <div>
      <p>BigNumber</p>
      <p>{{ new Bignumber(0.1).plus(0.2).toString() }}</p>
      <p></p>{{ new Bignumber(0.3).minus(0.1).toString() }}</p>
    </div>
  </main>
</template>

<style scoped>
.modal {
  width: 400px;
  height: 400px;
}
[v-cloak] {
  display: none;
}
</style>
