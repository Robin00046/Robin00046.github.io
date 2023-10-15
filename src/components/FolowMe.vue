<template>
  <div class="flex flex-col justify-center items-center mb-6 sm:mb-10">
    <p
      class="font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"
    >
      Follow me
    </p>
    <ul class="flex gap-4 sm:gap-8">
      <a
        v-for="social in socialLinks"
        :key="social.id"
        :href="social.url"
        target="__blank"
        class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"
      >
        <component :is="social.icon" class="w-5 sm:w-9 h-5 sm:h-9" />
        <!-- <i :data-feather="social.icon" class="w-5 sm:w-8 h-5 sm:h-8"></i> -->
      </a>
    </ul>
  </div>
</template>

<script setup>
import { BuildingLibraryIcon } from "@heroicons/vue/24/outline";
const socialLinks = [
  {
    id: 1,
    name: "Website",
    icon: "ph-globe",
    url: "https://almuqorobin.my.id/",
  },
  {
    id: 2,
    name: "GitHub",
    icon: "ph-github-logo",
    url: "https://github.com/Robin00046",
  },
  {
    id: 3,
    name: "LinkedIn",
    icon: "ph-linkedin-logo",
    url: "https://www.linkedin.com/in/abdul-rofiq-almuqorobin-8ab512220",
  },
  // {
  //   id: 4,
  //   name: "YouTube",
  //   icon: "ph-youtube-logo",
  //   url: "https://wa.me/62895376633939?text=Hi%20Saya%20Mau%20Tanya%20%3F",
  // },
  {
    id: 4,
    name: "WA",
    icon: "ph-whatsapp-logo",
    url: "https://wa.me/62895376633939?text=Hi%20Saya%20Mau%20Tanya%20%3F",
  },
];
</script>

<style></style>
