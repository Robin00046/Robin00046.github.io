<template>
  <div class="flex flex-col justify-center items-center mb-12 sm:mb-20">
    <p
      class="font-general-semibold text-3xl sm:text-4xl font-semibold text-primary-dark dark:text-primary-light mb-5"
    >
      Follow me
    </p>
    <ul class="flex gap-4 sm:gap-8">
      <a
        target="__blank"
        class="text-gray-400 hover:text-indigo-500 dark:hover:text-indigo-400 cursor-pointer rounded-lg bg-gray-50 dark:bg-ternary-dark hover:bg-gray-100 shadow-sm p-4 duration-500"
      >
        <!-- <i :data-feather="social.icon" class="w-5 sm:w-8 h-5 sm:h-8"></i> -->
      </a>
    </ul>
  </div>
  <footer
    aria-labelledby="footer-heading"
    class="border-t border-gray-200 bg-white"
  >
    <h2 id="footer-heading" class="sr-only">Footer</h2>
    <div class="mx-auto max-w-full px-4 sm:px-6 lg:px-8">
      <div class="border-t border-gray-100 py-10 text-center">
        <p class="text-sm text-gray-500">
          &copy; 2021 Your Company, Inc. All rights reserved.
        </p>
      </div>
    </div>
  </footer>
</template>
