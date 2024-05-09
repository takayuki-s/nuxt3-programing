<script setup lang="ts">
import {
  AccordionContent,
  AccordionHeader,
  AccordionItem,
  AccordionRoot,
  AccordionTrigger,
} from 'radix-vue'
// import { Icon } from '@iconify/vue'

const accordionItems = [
  {
    value: 'item-1',
    title: 'Is it accessible?',
    content: 'Yes. It adheres to the WAI-ARIA design pattern.',
  },
  {
    value: 'item-2',
    title: 'Is it unstyled?',
    content:
      "Yes. It's unstyled by default, giving you freedom over the look and feel.",
  },
  {
    value: 'item-3',
    title: 'Can it be animated?',
    content: 'Yes! You can use the transition prop to configure the animation.',
  },
]
</script>

<template>
  <AccordionRoot
    class="AccordionRoot"
    default-value="'item-1'"
    type="single"
    :collapsible="true"
  >
    <template v-for="item in accordionItems" :key="item.value">
      <AccordionItem class="AccordionItem" :value="item.value">
        <AccordionHeader class="AccordionHeader">
          <AccordionTrigger class="AccordionTrigger">
            <span>{{ item.title }}</span>
            <Icon icon="radix-icons:chevron-down" class="AccordionChevron" />
          </AccordionTrigger>
        </AccordionHeader>
        <AccordionContent class="AccordionContent">
          <div class="AccordionContentText">
            {{ item.content }}
          </div>
        </AccordionContent>
      </AccordionItem>
    </template>
  </AccordionRoot>
</template>

<style scoped>
button,
h3 {
  all: unset;
}

.AccordionRoot {
  border-radius: 6px;
  width: 300px;
  background-color: var(--mauve-6);
  box-shadow: 0 2px 10px var(--black-a4);
}

.AccordionItem {
  overflow: hidden;
  margin-top: 1px;
}

.AccordionItem:first-child {
  margin-top: 0;
  border-top-left-radius: 4px;
  border-top-right-radius: 4px;
}

.AccordionItem:last-child {
  border-bottom-left-radius: 4px;
  border-bottom-right-radius: 4px;
}

.AccordionItem:focus-within {
  position: relative;
  z-index: 1;
  box-shadow: 0 0 0 2px var(--mauve-12);
}

.AccordionHeader {
  display: flex;
}

.AccordionTrigger {
  font-family: inherit;
  background-color: transparent;
  padding: 0 20px;
  height: 45px;
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: space-between;
  font-size: 15px;
  line-height: 1;
  color: var(--grass-11);
  box-shadow: 0 1px 0 var(--mauve-6);
  background-color: white;
}

.AccordionTrigger:hover {
  background-color: var(--mauve-2);
}

.AccordionContent {
  overflow: hidden;
  font-size: 15px;
  color: var(--mauve-11);
  background-color: var(--mauve-2);
}
.AccordionContent[data-state='open'] {
  animation: slideDown 300ms cubic-bezier(0.87, 0, 0.13, 1);
}
.AccordionContent[data-state='closed'] {
  animation: slideUp 300ms cubic-bezier(0.87, 0, 0.13, 1);
}

.AccordionContentText {
  padding: 15px 20px;
}

.AccordionChevron {
  color: var(--grass-10);
  transition: transform 300ms cubic-bezier(0.87, 0, 0.13, 1);
}
.AccordionTrigger[data-state='open'] > .AccordionChevron {
  transform: rotate(180deg);
}

@keyframes slideDown {
  from {
    height: 0;
  }
  to {
    height: var(--radix-accordion-content-height);
  }
}

@keyframes slideUp {
  from {
    height: var(--radix-accordion-content-height);
  }
  to {
    height: 0;
  }
}
</style>
