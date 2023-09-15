<template>
  <div class="flex space-x-9">
    <div
      class="flex flex-col bg-gray-50 dark:bg-slate-900 shadow-sm py-9 w-3/4 mx-auto space-y-3"
    >
      <div class="flex justify-center px-5">
        <textarea
          v-model="test"
          @input="onChange"
          class="form-textarea px-4 py-3 rounded-sm w-3/4"
          placeholder="Pesan"
        />
      </div>
      <div class="flex justify-center">
        <a
          :href="baseurl"
          target="__blank"
          class="bg-green-600 hover:bg-green-700 text-white font-bold py-2 px-4 rounded-lg flex justify-center"
        >
          <div class="flex items-center">
            <ph-whatsapp-logo />
            Wa Saya
          </div>
        </a>
      </div>
    </div>
    <div class="w-full md:w-1/2 bg-gray-50 dark:bg-slate-900 shadow-sm">
      <div class="text-left max-w-xl px-6">
        <h2
          class="font-general-medium text-2xl text-primary-dark dark:text-primary-light mb-8"
        >
          Contact details
        </h2>
        <ul class="font-general-regular">
          <li class="flex" v-for="contact in contacts" :key="contact.id">
            <component
              :is="contact.icon"
              class="w-5 sm:w-9 h-5 sm:h-9 text-gray-500 dark:text-gray-400 mr-4"
            />
            <a
              href="#"
              class="text-lg mb-4 text-ternary-dark dark:text-ternary-light"
              aria-label="Website and Phone"
            >
              {{ contact.name }}
            </a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script setup>
import { ref } from "vue";
const baseurl = ref("");
const test = ref("");
const message = ref("");

const onChange = () => {
  message.value = test.value.replace(/\s/g, "+");
  baseurl.value = "https://wa.me/62895376633939?text=" + message.value;
  console.log(baseurl);
};
const contacts = [
  {
    id: 1,
    name: "Abdulrofiqalmuqorobin@gmail.com",
    icon: "ph-envelope",
  },
];
</script>
