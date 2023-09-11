<template>
  <div>
    <banner />
    <project class="mt-2" />
    <div
      class="flex flex-col items-center justify-center bg-white"
      v-if="product.length > 3"
    >
      <a
        href="project"
        class="bg-blue-700 py-3 px-3 rounded-lg text-white mx-auto"
        >Show All</a
      >
    </div>
    <div class="mb-6 sm:mb-10">
      <Skill />
    </div>
    <folow-me />
  </div>
</template>
<script setup>
import Banner from "../components/Banner.vue";
import FolowMe from "../components/FolowMe.vue";
import Project from "../components/Project.vue";
import Skill from "../components/Skill.vue";
import product from "../data/product";
</script>
<style scoped></style>
