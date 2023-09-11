<template>
  <div class="flex flex-col bg-white shadow-sm py-9 max-w-xl mx-auto space-y-3">
    <div class="flex justify-center px-5">
      <textarea
        v-model="test"
        @input="onChange"
        class="form-textarea px-4 py-3 rounded-sm w-full"
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
</script>
