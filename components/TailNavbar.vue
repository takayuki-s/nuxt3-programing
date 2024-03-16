<script setup>
import { computed } from 'vue'
import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/vue'
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline'
const route = useRoute()

const isRoot = computed(() => {
  return route.path === '/' ? true : false
})
const isList = computed(() => {
  return route.path === '/contentful/list' ? true : false
})
const isAbout = computed(() => {
  return route.path === '/about' ? true : false
})
</script>

<template>
  <div class="header">
    <Disclosure
      as="nav"
      class="bg-gray-800 animate-slide-in-top"
      v-slot="{ open }"
    >
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img
                class="h-8 w-auto rounded-full"
                src="@/assets/images/logo.png"
                alt="Your Company"
              />
            </div>
            <div class="hidden sm:ml-6 sm:block">
              <div class="flex space-x-4">
                <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
                <NuxtLink
                  to="/"
                  class="rounded-md px-3 py-2 text-sm font-medium text-white link-text hover:bg-gray-700 hover:text-white"
                  :class="{ 'bg-gray-900': isRoot }"
                >
                  TOP
                </NuxtLink>
                <NuxtLink
                  href="/contentful/list"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 link-text hover:bg-gray-700 hover:text-white"
                  :class="{ 'bg-gray-900': isList }"
                  >LIST
                </NuxtLink>
                <NuxtLink
                  href="/about"
                  class="rounded-md px-3 py-2 text-sm font-medium text-gray-300 link-text hover:bg-gray-700 hover:text-white"
                  :class="{ 'bg-gray-900': isAbout }"
                  >ABOUT
                </NuxtLink>
              </div>
            </div>
          </div>
          <div class="-mr-2 flex sm:hidden">
            <!-- Mobile menu button -->
            <DisclosureButton
              class="relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
            >
              <span class="absolute -inset-0.5" />
              <span class="sr-only">Open main menu</span>
              <Bars3Icon
                v-if="!open"
                class="block h-6 w-6"
                aria-hidden="true"
              />
              <XMarkIcon v-else class="block h-6 w-6" aria-hidden="true" />
            </DisclosureButton>
          </div>
        </div>
      </div>

      <DisclosurePanel class="sm:hidden">
        <div class="space-y-1 px-2 pb-3 pt-2">
          <!-- Current: "bg-gray-900 text-white", Default: "text-gray-300 hover:bg-gray-700 hover:text-white" -->
          <DisclosureButton
            as="a"
            href="/"
            class="block rounded-md px-3 py-2 text-base font-medium hover:bg-gray-700 hover:text-white"
            :class="{ 'bg-gray-900': isRoot }"
            ><NuxtLink to="/"
              ><span class="link-text">TOP</span></NuxtLink
            ></DisclosureButton
          >
          <DisclosureButton
            as="a"
            href="/contentful/list"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            :class="{ 'bg-gray-900': isList }"
            ><NuxtLink to="/contentful/list"
              ><span class="link-text">LIST</span></NuxtLink
            ></DisclosureButton
          >
          <DisclosureButton
            as="a"
            href="/about"
            class="block rounded-md px-3 py-2 text-base font-medium text-gray-300 hover:bg-gray-700 hover:text-white"
            :class="{ 'bg-gray-900': isAbout }"
            ><NuxtLink to="/about"
              ><span class="link-text">ABOUT</span></NuxtLink
            ></DisclosureButton
          >
        </div>
      </DisclosurePanel>
    </Disclosure>
  </div>
</template>

<style scoped>
.header {
  position: fixed;
  z-index: 10;
  width: 100%;
}
.link-text {
  color: #ffffff;
}
</style>
