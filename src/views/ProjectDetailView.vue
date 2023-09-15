<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/typography'),
      require('@tailwindcss/aspect-ratio'),
    ],
  }
  ```
-->
<template>
  <div class="bg-gray-50 dark:bg-slate-900">
    <div
      class="mx-auto max-w-2xl px-4 py-2 sm:px-6 sm:py-4 lg:max-w-7xl lg:px-8"
    >
      <div class="lg:grid lg:grid-cols-2 lg:items-start lg:gap-x-8">
        <!-- Image gallery -->
        <TabGroup as="div" class="flex flex-col-reverse">
          <!-- Image selector -->
          <div
            class="mx-auto mt-6 hidden w-full max-w-2xl sm:block lg:max-w-none"
          >
            <TabList class="grid grid-cols-4 gap-6">
              <Tab
                v-for="image in detail[0].images"
                :key="image.id"
                class="relative flex h-24 cursor-pointer items-center justify-center rounded-md bg-white text-sm font-medium uppercase text-gray-900 hover:bg-gray-50 focus:outline-none focus:ring focus:ring-opacity-50 focus:ring-offset-4"
                v-slot="{ selected }"
              >
                <span class="sr-only">{{ image.name }}</span>
                <span class="absolute inset-0 overflow-hidden rounded-md">
                  <img
                    :src="image.src"
                    alt=""
                    class="h-full w-full object-cover object-center"
                  />
                </span>
                <span
                  :class="[
                    selected ? 'ring-indigo-500' : 'ring-transparent',
                    'pointer-events-none absolute inset-0 rounded-md ring-2 ring-offset-2',
                  ]"
                  aria-hidden="true"
                />
              </Tab>
            </TabList>
          </div>

          <TabPanels class="aspect-h-1 aspect-w-1 w-full">
            <TabPanel v-for="image in detail[0].images" :key="image.id">
              <img
                :src="image.src"
                :alt="image.alt"
                class="h-full w-full object-cover object-center sm:rounded-lg"
              />
            </TabPanel>
          </TabPanels>
        </TabGroup>

        <!-- detail[0] info -->
        <div class="mt-10 px-4 sm:mt-16 sm:px-0 lg:mt-0">
          <h1
            class="text-3xl font-bold tracking-tight text-ternary-dark dark:text-primary-light"
          >
            {{ detail[0].name }}
          </h1>

          <div class="mt-6">
            <h3 class="sr-only">Description</h3>

            <div
              class="space-y-6 text-base text-ternary-dark dark:text-primary-light"
              v-html="detail[0].description"
            />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref } from "vue";
import { useRoute } from "vue-router";
import product from "../data/product.js";
import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
  RadioGroup,
  RadioGroupLabel,
  RadioGroupOption,
  Tab,
  TabGroup,
  TabList,
  TabPanel,
  TabPanels,
} from "@headlessui/vue";
import { StarIcon } from "@heroicons/vue/20/solid";
import { HeartIcon, MinusIcon, PlusIcon } from "@heroicons/vue/24/outline";

const route = useRoute();

let detail = product.filter(function (item) {
  return item.id == route.params.id;
});
</script>
