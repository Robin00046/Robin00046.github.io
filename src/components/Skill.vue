<template>
  <div class="bg-white">
    <div
      class="mx-auto max-w-2xl px-4 py-16 sm:px-6 sm:py-24 lg:max-w-7xl lg:px-8"
    >
      <h2 class="text-2xl font-bold tracking-tight text-gray-900">Skill</h2>

      <div
        class="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8"
      >
        <div
          v-for="product in products"
          :key="product.name"
          class="group relative"
        >
          <div
            class="aspect-h-1 aspect-w-1 w-full overflow-hidden rounded-md lg:aspect-none group-hover:opacity-75 lg:h-40"
          >
            <img
              :src="product.imageSrc"
              :alt="product.imageAlt"
              class="h-full w-full object-contain object-center lg:h-full lg:w-full"
            />
          </div>
          <div class="mt-4 flex justify-center">
            <div>
              <h3 class="text-lg font-semibold text-gray-700">
                {{ product.name }}
              </h3>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script setup>
import logo from "../assets/codeigniter.svg";
const products = [
  {
    name: "PHP",
    imageSrc: "https://www.vectorlogo.zone/logos/php/php-ar21.svg",
    imageAlt: "PHP",
  },
  {
    name: "MYSQL",
    imageSrc: "https://www.vectorlogo.zone/logos/mysql/mysql-ar21.svg",
    imageAlt: "MYSQL",
  },
  {
    name: "Java Script",
    imageSrc:
      "https://www.vectorlogo.zone/logos/javascript/javascript-ar21.svg",
    imageAlt: "Java Script",
  },
  {
    name: "Vue JS",
    imageSrc: "https://www.vectorlogo.zone/logos/vuejs/vuejs-ar21.svg",
    imageAlt: "Vue JS",
  },
  {
    name: "Laravel",
    imageSrc: "https://www.vectorlogo.zone/logos/laravel/laravel-ar21.svg",
    imageAlt: "Laravel Logo",
  },
  {
    name: "CodeIgniter 3",
    imageSrc: logo,
    imageAlt: "CodeIgniter",
  },
];
</script>
