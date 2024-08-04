<script setup lang="ts">
import { Icon } from '@iconify/vue'
import { ref } from 'vue'
import {
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuList,
  NavigationMenuRoot,
  NavigationMenuTrigger,
  NavigationMenuViewport,
} from 'radix-vue'
import './style.css'

import NavigationMenuListItem from './listitem.vue'

import { saveLocale } from '@/utils/i18n'

const currentTrigger = ref('')
</script>

<template>
  <NavigationMenuRoot v-model="currentTrigger" class="NavigationMenuRoot">
    <NavigationMenuList class="NavigationMenuList">
      <NavigationMenuItem>
        <NavigationMenuTrigger class="NavigationMenuTrigger">
          Overview
          <Icon icon="radix-icons:caret-down" class="CaretDown" />
        </NavigationMenuTrigger>
        <NavigationMenuContent class="NavigationMenuContent">
          <ul class="List two">
            <NavigationMenuListItem title="日本語" @click="saveLocale('ja')" />
            <NavigationMenuListItem title="English" @click="saveLocale('en')" />
          </ul>
        </NavigationMenuContent>
      </NavigationMenuItem>

      <NavigationMenuIndicator class="NavigationMenuIndicator">
        <div class="Arrow" />
      </NavigationMenuIndicator>
    </NavigationMenuList>

    <div class="ViewportPosition">
      <NavigationMenuViewport class="NavigationMenuViewport" />
    </div>
  </NavigationMenuRoot>
</template>
