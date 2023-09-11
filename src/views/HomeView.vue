<template>
  <div>
    <banner />
    <project class="mt-2" />
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
</script>
<style scoped></style>
