import { defineStore } from "pinia/dist/pinia";
import { ref } from "vue";

export const useThemeStore = defineStore("theme", () => {
  const dark = ref(
    localStorage.theme === "dark" ||
      (!("theme" in localStorage) &&
        window.matchMedia("(prefers-color-scheme: dark)").matches)
  );
  return { dark };
});
