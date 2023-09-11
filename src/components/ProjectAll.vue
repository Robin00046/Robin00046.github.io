<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="sr-only">Products</h2>

      <div
        class="grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 xl:gap-x-8"
      >
        <a
          v-for="product in products"
          :key="product.id"
          :href="product.href + '/' + product.id"
          class="group"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-lg bg-gray-200 xl:aspect-h-8 xl:aspect-w-7"
          >
            <img
              :src="product.images[0].src"
              :alt="product.imageAlt"
              class="h-full w-full object-cover object-center group-hover:opacity-75"
            />
          </div>
          <div class="flex justify-center">
            <h3 class="mt-4 text-base sm:text-lg font-bold text-gray-700">
              {{ product.name }}
            </h3>
          </div>
        </a>
      </div>
    </div>
  </div>
</template>

<script setup>
import products from "../data/product.js";
</script>
