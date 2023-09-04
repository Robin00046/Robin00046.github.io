<template>
  <div class="bg-gray-50">
    <div class="flex min-h-screen flex-col">
      <div class="flex-none">
        <navigaton-head />
      </div>
      <div class="grow">
        <main>
          <!-- <Transition name="slide-fade" appear> -->
          <section class="bg-gray-50">
            <div class="mx-auto max-w-7xl px-4 py-10 sm:px-6 sm:py-10 lg:px-8">
              <router-view v-slot="{ Component }">
                <transition name="slide-fade">
                  <component :is="Component" />
                </transition>
              </router-view>
            </div>
          </section>
          <!-- </Transition> -->
        </main>
      </div>
      <div class="flex-none">
        <Footer />
      </div>
    </div>
  </div>
</template>

<script setup>
import NavigatonHead from "./components/NavigatonHead.vue";
import Footer from "./components/Footer.vue";
</script>
<style>
.slide-fade-enter-active {
  transition: all 0.5s ease-in;
}

.slide-fade-enter-from,
.slide-fade-leave-to {
  transform: translateX(30px);
  opacity: 0;
}
</style>
