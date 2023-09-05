import { createApp } from "vue";
import "./style.css";
import App from "./App.vue";
import router from "./router";
import PhosphorIcons from "@phosphor-icons/vue";
import { createPinia } from "pinia";
import mitt from "mitt";
const emitter = mitt(); // 全局事件总线

createApp(App)
  .use(router)
  .use(createPinia())
  .provide("emitter", emitter)
  .use(PhosphorIcons)
  .mount("#app");
