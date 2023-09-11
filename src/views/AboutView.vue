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
  <div class="bg-white">
    <main>
      <!-- Header section -->
      <div
        class="relative isolate overflow-hidden bg-gray-900 px-6 pt-14 lg:px-8"
      >
        <img
          src="https://images.unsplash.com/photo-1521737604893-d14cc237f11d?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&crop=focalpoint&fp-y=.8&w=2830&h=1500&q=80&blend=111827&sat=-100&exp=15&blend-mode=multiply"
          alt=""
          class="absolute inset-0 -z-10 h-full w-full object-cover"
        />
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          class="hidden transform-gpu blur-3xl sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:w-[68.5625rem]"
        >
          <path
            fill="url(#10724532-9d81-43d2-bb94-866e98dd6e42)"
            fill-opacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="10724532-9d81-43d2-bb94-866e98dd6e42"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#776FFF" />
              <stop offset="1" stop-color="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
        <svg
          viewBox="0 0 1097 845"
          aria-hidden="true"
          class="absolute -top-52 left-1/2 -z-10 w-[68.5625rem] -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0"
        >
          <path
            fill="url(#8ddc7edb-8983-4cd7-bccb-79ad21097d70)"
            fill-opacity=".2"
            d="M301.174 646.641 193.541 844.786 0 546.172l301.174 100.469 193.845-356.855c1.241 164.891 42.802 431.935 199.124 180.978 195.402-313.696 143.295-588.18 284.729-419.266 113.148 135.13 124.068 367.989 115.378 467.527L811.753 372.553l20.102 451.119-530.681-177.031Z"
          />
          <defs>
            <linearGradient
              id="8ddc7edb-8983-4cd7-bccb-79ad21097d70"
              x1="1097.04"
              x2="-141.165"
              y1=".22"
              y2="363.075"
              gradientUnits="userSpaceOnUse"
            >
              <stop stop-color="#776FFF" />
              <stop offset="1" stop-color="#FF4694" />
            </linearGradient>
          </defs>
        </svg>
        <div class="mx-auto max-w-7xl py-24 sm:py-40">
          <div class="mx-auto max-w-2xl text-center">
            <h2
              class="text-4xl font-bold tracking-tight text-white sm:text-6xl"
            >
              Get in touch
            </h2>
            <p class="mt-6 text-lg leading-8 text-gray-300">
              Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui
              lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat
              fugiat aliqua.
            </p>
          </div>
          <div
            class="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:mt-20 lg:mx-0 lg:max-w-none lg:grid-cols-3 lg:gap-8"
          >
            <div
              class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <PhoneIcon
                class="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              />
              <div class="text-base leading-7">
                <h3 class="font-semibold text-white">Sales</h3>
                <p class="mt-2 text-gray-300">
                  +1 (555) 234-5678<br />
                  <a
                    class="text-white hover:text-gray-300"
                    href="mailto:sales@example.com"
                    >sales@example.com</a
                  >
                </p>
              </div>
            </div>
            <div
              class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <LifebuoyIcon
                class="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              />
              <div class="text-base leading-7">
                <h3 class="font-semibold text-white">Support</h3>
                <p class="mt-2 text-gray-300">
                  +1 (555) 234-5679<br />
                  <a
                    class="text-white hover:text-gray-300"
                    href="mailto:support@example.com"
                    >support@example.com</a
                  >
                </p>
              </div>
            </div>
            <div
              class="flex gap-x-4 rounded-xl bg-white/5 p-6 ring-1 ring-inset ring-white/10"
            >
              <BuildingOffice2Icon
                class="h-7 w-5 flex-none text-indigo-400"
                aria-hidden="true"
              />
              <div class="text-base leading-7">
                <h3 class="font-semibold text-white">Address</h3>
                <p class="mt-2 text-gray-300">
                  545 Mavis Island<br />
                  Chicago, IL 99191
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      <!-- Contact form -->
      <div class="relative isolate px-6 pt-24 sm:pt-40 lg:px-8">
        <div class="absolute inset-0 -z-10 overflow-hidden">
          <svg
            viewBox="0 0 1155 678"
            aria-hidden="true"
            class="absolute -left-40 bottom-full -mb-48 w-[72.1875rem] transform-gpu blur-3xl sm:left-auto sm:right-1/2 sm:-mb-64"
          >
            <path
              fill="url(#d5d4d369-6b90-4398-a6aa-ab9a062d6e3c)"
              fill-opacity=".25"
              d="M317.219 518.975 203.852 678 0 438.341l317.219 80.634 204.172-286.402c1.307 132.337 45.083 346.658 209.733 145.248C936.936 126.058 882.053-94.234 1031.02 41.331c119.18 108.451 130.68 295.337 121.53 375.223L855 299l21.173 362.054-558.954-142.079Z"
            />
            <defs>
              <linearGradient
                id="d5d4d369-6b90-4398-a6aa-ab9a062d6e3c"
                x1="1155.49"
                x2="-78.208"
                y1=".177"
                y2="474.645"
                gradientUnits="userSpaceOnUse"
              >
                <stop stop-color="#9089FC" />
                <stop offset="1" stop-color="#FF80B5" />
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="mx-auto max-w-xl">
          <h2
            class="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl"
          >
            Get an estimate
          </h2>
          <p class="mt-2 text-lg leading-8 text-gray-600">
            Lorem officia duis sunt ut pariatur sit ut ullamco. Eu exercitation
            Lorem qui deserunt nulla officia exercitation amet quis nulla.
          </p>
        </div>
        <form action="#" method="POST" class="mx-auto mt-16 max-w-xl sm:mt-20">
          <div class="grid grid-cols-1 gap-x-8 gap-y-6 sm:grid-cols-2">
            <div>
              <label
                for="first-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >First name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="first-name"
                  id="first-name"
                  autocomplete="given-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>
            <div>
              <label
                for="last-name"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Last name</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="last-name"
                  id="last-name"
                  autocomplete="family-name"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="company"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Company</label
              >
              <div class="mt-2.5">
                <input
                  type="text"
                  name="company"
                  id="company"
                  autocomplete="organization"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="email"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Email</label
              >
              <div class="mt-2.5">
                <input
                  type="email"
                  name="email"
                  id="email"
                  autocomplete="email"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="phone-number"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Phone number</label
              >
              <div class="relative mt-2.5">
                <div class="absolute inset-y-0 left-0 flex items-center">
                  <label for="country" class="sr-only">Country</label>
                  <select
                    id="country"
                    name="country"
                    class="h-full rounded-md border-0 bg-transparent bg-none py-0 pl-4 pr-9 text-sm text-gray-400 focus:outline-none focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                  >
                    <option>US</option>
                    <option>CA</option>
                    <option>EU</option>
                  </select>
                  <ChevronDownIcon
                    class="pointer-events-none absolute right-3 top-0 h-full w-5 text-gray-400"
                    aria-hidden="true"
                  />
                </div>
                <input
                  type="tel"
                  name="phone-number"
                  id="phone-number"
                  autocomplete="tel"
                  class="block w-full rounded-md border-0 px-3.5 py-2 pl-20 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>
            <div class="sm:col-span-2">
              <label
                for="message"
                class="block text-sm font-semibold leading-6 text-gray-900"
                >Message</label
              >
              <div class="mt-2.5">
                <textarea
                  name="message"
                  id="message"
                  rows="4"
                  class="block w-full rounded-md border-0 px-3.5 py-2 text-sm leading-6 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600"
                />
              </div>
            </div>
            <SwitchGroup as="div" class="flex gap-x-4 sm:col-span-2">
              <div class="flex h-6 items-center">
                <Switch
                  v-model="agreed"
                  :class="[
                    agreed ? 'bg-indigo-600' : 'bg-gray-200',
                    'flex w-8 flex-none cursor-pointer rounded-full p-px ring-1 ring-inset ring-gray-900/5 transition-colors duration-200 ease-in-out focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600',
                  ]"
                >
                  <span class="sr-only">Agree to policies</span>
                  <span
                    aria-hidden="true"
                    :class="[
                      agreed ? 'translate-x-3.5' : 'translate-x-0',
                      'h-4 w-4 transform rounded-full bg-white shadow-sm ring-1 ring-gray-900/5 transition duration-200 ease-in-out',
                    ]"
                  />
                </Switch>
              </div>
              <SwitchLabel class="text-sm leading-6 text-gray-600">
                By selecting this, you agree to our
                {{ " " }}
                <a href="#" class="font-semibold text-indigo-600"
                  >privacy&nbsp;policy</a
                >.
              </SwitchLabel>
            </SwitchGroup>
          </div>
          <div class="mt-10">
            <button
              type="submit"
              class="block w-full rounded-md bg-indigo-600 px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
            >
              Let's talk
            </button>
          </div>
        </form>
      </div>

      <!-- CTA section -->
      <div class="mx-auto mt-24 max-w-7xl sm:mt-40 sm:px-6 lg:px-8">
        <div
          class="relative isolate overflow-hidden bg-gray-900 px-6 py-24 text-center shadow-2xl sm:rounded-3xl sm:px-16"
        >
          <h2
            class="mx-auto max-w-2xl text-4xl font-bold tracking-tight text-white"
          >
            Looking for your next career?
          </h2>
          <p class="mx-auto mt-6 max-w-xl text-lg leading-8 text-gray-300">
            Incididunt sint fugiat pariatur cupidatat consectetur sit cillum
            anim id veniam aliqua proident excepteur commodo do ea.
          </p>
          <div class="mt-10 flex justify-center">
            <a
              href="#"
              class="rounded-md bg-white px-3.5 py-2.5 text-sm font-semibold text-gray-900 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
              >View job openings</a
            >
          </div>
          <svg
            viewBox="0 0 1024 1024"
            class="absolute left-1/2 top-1/2 -z-10 h-[64rem] w-[64rem] -translate-x-1/2 [mask-image:radial-gradient(closest-side,white,transparent)]"
            aria-hidden="true"
          >
            <circle
              cx="512"
              cy="512"
              r="512"
              fill="url(#827591b1-ce8c-4110-b064-7cb85a0b1217)"
              fill-opacity="0.7"
            />
            <defs>
              <radialGradient id="827591b1-ce8c-4110-b064-7cb85a0b1217">
                <stop stop-color="#7775D6" />
                <stop offset="1" stop-color="#E935C1" />
              </radialGradient>
            </defs>
          </svg>
        </div>
      </div>
    </main>
  </div>
</template>

<script setup>
import { defineComponent, h, ref } from "vue";
import {
  Dialog,
  DialogPanel,
  Switch,
  SwitchGroup,
  SwitchLabel,
} from "@headlessui/vue";
import { Bars3Icon, XMarkIcon } from "@heroicons/vue/24/outline";
import {
  BuildingOffice2Icon,
  ChevronDownIcon,
  LifebuoyIcon,
  PhoneIcon,
} from "@heroicons/vue/20/solid";

const agreed = ref(false);
</script>
