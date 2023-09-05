<template>
  <div
    class="w-7 h-7 relative cursor-pointer overflow-hidden dark:text-slate-200"
    @click="switchTheme"
    @theme-changed="updateDarkValue"
  >
    <Transition name="sun-fade">
      <div class="absolute top-0 left-0" v-if="!dark">
        <SunIcon class="w-7 h-7" />
        <!-- <PhSun class="w-7 h-7" /> -->
      </div>
    </Transition>
    <Transition name="moon-fade">
      <div class="absolute top-0 left-0" v-if="dark">
        <MoonIcon class="w-7 h-7" />
      </div>
    </Transition>
  </div>
</template>

<script setup>
// import { PhMoonStars, PhSun } from '@dnlsndr/vue-phosphor-icons'
import { storeToRefs } from "pinia";
import { useThemeStore } from "../stores/themeStore";
import { inject } from "vue";
import { SunIcon, MoonIcon } from "@heroicons/vue/24/outline";
// import { MoonIcon, SunIcon } from '@heroicons/vue/20/solid'
// import { MoonIcon, SunIcon } from '@heroicons/vue/20/solid'

const themeStore = useThemeStore();
const { dark } = storeToRefs(themeStore);
const emitter = inject("emitter");

const updateDarkValue = (val) => {
  dark.value = val;
};

const switchTheme = () => {
  if (dark.value) {
    localStorage.theme = "light";
    dark.value = false;
    document.documentElement.classList.remove("dark");
  } else {
    localStorage.theme = "dark";
    dark.value = true;
    document.documentElement.classList.add("dark");
  }
  emitter.emit("themeChanged", dark.value);
};
</script>

<style scoped>
.sun-fade-enter-active {
  transition: all 0.3s ease-out;
}
.sun-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.sun-fade-enter-from {
  transform: translateY(-50px);
  opacity: 0;
}
.sun-fade-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
.moon-fade-enter-active {
  transition: all 0.3s ease-out;
}
.moon-fade-leave-active {
  transition: all 0.3s cubic-bezier(1, 0.5, 0.8, 1);
}
.moon-fade-enter-from {
  transform: translateY(-50px);
  opacity: 0;
}
.moon-fade-leave-to {
  transform: translateY(50px);
  opacity: 0;
}
</style>
