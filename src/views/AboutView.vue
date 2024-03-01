<!--
  This example requires some changes to your config:
  
  ```
  // tailwind.config.js
  module.exports = {
    // ...
    plugins: [
      // ...
      require('@tailwindcss/forms'),
    ],
  }
  ```
-->
<template>
  <div class="block sm:flex sm:gap-10 mt-10 sm:mt-20">
    <!-- About profile image -->
    <div class="w-full sm:w-1/4 mb-7 sm:mb-0">
      <img src="../assets/foto.jpg" class="rounded-xl w-96" alt="" />
    </div>

    <!-- About details -->
    <div v-for="bio in bios" :key="bio.id" class="w-full sm:w-3/4 text-left">
      <div
        class="font-general-regular mb-4 text-ternary-dark dark:text-ternary-light text-lg text-justify"
        v-html="bio.bio"
      ></div>
    </div>
  </div>
</template>

<script setup>
const bios = [
  {
    id: 1,
    bio: '<div class="mb-2">Sebagai seorang Full Stack Developer, saya memiliki keahlian dalam mengembangkan perangkat lunak secara end-to-end, mulai dari sisi depan (frontend) hingga sisi belakang (backend). Saya memiliki pemahaman mendalam tentang teknologi web dan perangkat lunak, serta kemampuan untuk mengintegrasikan berbagai komponen sistem untuk menciptakan solusi yang lengkap dan efektif.Di sisi frontend, saya memiliki pengalaman dalam menggunakan berbagai bahasa pemrograman dan kerangka kerja seperti HTML, CSS, JavaScript, Bootstrap, Tailwind dan Vue JS.</div><div class="mb-2">Saya dapat merancang antarmuka pengguna yang responsif dan menarik, meningkatkan pengalaman pengguna secara keseluruhan.Di sisi backend, saya memiliki keahlian dalam pengembangan server dan database. Saya dapat menggunakan bahasa pemrograman seperti Node.js, dan PHP , serta menggunakan kerangka kerja seperti Express, Laravel dan Codeignither 3. Saya memiliki pengalaman dalam merancang dan mengimplementasikan basis data, membuat API, dan mengelola logika bisnis yang kompleks. </div><div class="mb-2">Selain itu, saya berkomitmen untuk terus memperbarui diri dengan perkembangan teknologi terbaru guna memberikan solusi yang inovatif dan efisien.</div><div class="mb-2">Sebagai Full Stack Developer, saya juga memiliki kemampuan untuk berkolaborasi dengan tim lintas disiplin dan memahami kebutuhan bisnis secara menyeluruh. Saya siap mengambil tantangan pengembangan perangkat lunak dari awal hingga akhir, memberikan kontribusi maksimal untuk keberhasilan proyek dan menciptakan solusi yang berkualitas tinggi.</div>',
  },
  // {
  //   id: 2,
  //   bio: "Lorem ipsum dolor, sit amet consectetur adipisicing elit. Nihil vel illum asperiores dignissimos cumque quibusdam et fugiat voluptatem nobis suscipit explicabo, eaque consequatur nesciunt, fugit eligendi corporis laudantium adipisci soluta?",
  // },
];
</script>
