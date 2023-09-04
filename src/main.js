import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import PhosphorIcons from "@phosphor-icons/vue";
import VuePageTransition from "vue-page-transition";

createApp(App)
  .use(router)
  .use(PhosphorIcons)
  .use(VuePageTransition)
  .mount("#app");
