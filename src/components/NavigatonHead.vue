<template>
  <header class="bg-cyan-700">
    <nav class="mx-auto flex max-w-7xl p-6 lg:px-8" aria-label="Global">
      <div class="flex lg:flex-1">
        <!-- <router-link href="#" class="-m-1.5 p-1.5"> -->
        <span class="sr-only">Your Company</span>
        <img
          class="h-8 w-auto"
          src="https://tailwindui.com/img/logos/mark.svg?color=white"
          alt=""
        />
        <!-- </router-link> -->
      </div>
      <div class="flex lg:hidden">
        <button
          type="button"
          class="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-indigo-300"
          @click="mobileMenuOpen = true"
        >
          <span class="sr-only">Open main menu</span>
          <Bars3Icon class="h-6 w-6" aria-hidden="true" />
        </button>
      </div>
      <div class="hidden lg:flex lg:grow lg:gap-x-12">
        <router-link
          v-for="item in navigation"
          :key="item.name"
          :to="{ name: item.href }"
          :class="[
            item.href === $route.name
              ? 'bg-cyan-800 text-white'
              : 'text-cyan-100 hover:bg-cyan-600 hover:text-white ',
            'text-lg font-semibold leading-6 text-cyan-100 p-2 rounded-lg',
          ]"
          >{{ item.name }}</router-link
        >
      </div>
      <!-- <div class="hidden lg:flex lg:flex-1 lg:justify-end"></div> -->
    </nav>
    <Dialog
      as="div"
      class="lg:hidden"
      @close="mobileMenuOpen = false"
      :open="mobileMenuOpen"
    >
      <div class="fixed inset-0 z-10" />
      <DialogPanel
        class="fixed inset-y-0 right-0 z-10 w-full overflow-y-auto bg-white px-6 py-6 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10"
      >
        <div class="flex items-center justify-between">
          <router-link href="#" class="-m-1.5 p-1.5">
            <span class="sr-only">Your Company</span>
            <img
              class="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=600"
              alt=""
            />
          </router-link>
          <button
            type="button"
            class="-m-2.5 rounded-md p-2.5 text-gray-700"
            @click="mobileMenuOpen = false"
          >
            <span class="sr-only">Close menu</span>
            <XMarkIcon class="h-6 w-6" aria-hidden="true" />
          </button>
        </div>
        <div class="mt-6 flow-root">
          <div class="-my-6 divide-y divide-gray-500/10">
            <div class="space-y-2 py-6">
              <router-link
                v-for="item in navigation"
                :key="item.name"
                :to="{ name: item.href }"
                class="-mx-3 block rounded-lg px-3 py-2 text-base font-semibold leading-7 text-gray-900 hover:bg-gray-50"
                >{{ item.name }}</router-link
              >
            </div>
            <div class="py-6"></div>
          </div>
        </div>
      </DialogPanel>
    </Dialog>
  </header>
</template>

<script setup>
import { RouterLink } from 'vue-router';
import { ref } from 'vue';
import { Dialog, DialogPanel } from '@headlessui/vue';
import { Bars3Icon, XMarkIcon } from '@heroicons/vue/24/outline';

const navigation = [
  { name: 'Home', href: 'home' },
  { name: 'Project', href: 'project' },
  { name: 'Contact', href: 'contact' },
  { name: 'About', href: 'about' },
];

const mobileMenuOpen = ref(false);
</script>
