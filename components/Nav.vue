<template>
  <section>
    <nav class="fixed shadow-md  z-50 w-full py-3 flex bg-brown">
      <div class="container mx-auto px-4 flex justify-between items-center">
        <a
          class="text-3xl font-bold leading-none"
          href="#"
          data-config-id="brand"
        >
          <img
            class="h-12"
            src="@/assets/images/logo-light.png"
            alt=""
            width="auto"
          />
        </a>

        <!-- Hamburger Icon -->
        <div class="lg:hidden">
          <button
            class="text-gray-500 w-10 h-10 relative focus:outline-none"
            @click="toggleMenu"
          >
            <span class="sr-only">Open main menu</span>
            <div
              class="block w-5 absolute left-1/2 top-1/2   transform  -translate-x-1/2 -translate-y-1/2"
            >
              <span
                aria-hidden="true"
                class="block absolute h-0.5 w-5 bg-current transform transition duration-500 ease-in-out"
                :class="{
                  'rotate-45': isMobileMenu,
                  ' -translate-y-1.5': !isMobileMenu
                }"
              ></span>
              <span
                aria-hidden="true"
                class="block absolute  h-0.5 w-5 bg-current   transform transition duration-500 ease-in-out"
                :class="{ 'opacity-0': isMobileMenu }"
              ></span>
              <span
                aria-hidden="true"
                class="block absolute  h-0.5 w-5 bg-current transform  transition duration-500 ease-in-out"
                :class="{
                  '-rotate-45': isMobileMenu,
                  ' translate-y-1.5': !isMobileMenu
                }"
              ></span>
            </div>
          </button>
        </div>

        <ul
          class="hidden absolute top-1/2 left-1/2 transform -translate-y-1/2 -translate-x-1/2 lg:flex lg:mx-auto lg:flex lg:items-center lg:w-auto lg:space-x-6"
        >
          <li>
            <nuxt-link
              class="uppercase text-sm text-white hover:text-gray-500"
              to="/"
              >Start</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="uppercase text-sm text-white hover:text-gray-500"
              to="/"
              >Münsterturm</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="uppercase text-sm text-white hover:text-gray-500"
              to="/"
              >Gotik am Oberrhein</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="uppercase text-sm text-white hover:text-gray-500"
              to="/"
              >Artikel</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="uppercase text-sm text-white hover:text-gray-500"
              to="/"
              >Mediathek</nuxt-link
            >
          </li>
          <li>
            <nuxt-link
              class="uppercase text-sm text-white hover:text-gray-500"
              to="/"
              >Galerie</nuxt-link
            >
          </li>
        </ul>
        <nuxt-link
          class="hidden lg:inline-block lg:ml-auto lg:mr-3 py-2 px-6 bg-white hover:bg-gray-100 text-sm text-gray-900 font-bold rounded-l-xl rounded-t-xl transition duration-200"
          to=""
          >Kamera</nuxt-link
        >
      </div>
    </nav>

    <!-- Mobile Nav -->
    <div class="navbar-menu relative z-50" v-if="isMobileMenu">
      <div class="fixed inset-0 bg-gray-800 opacity-25"></div>
      <nav
        class="fixed top-0 left-0 bottom-0 flex flex-col w-5/6 max-w-sm py-6 px-6 bg-white border-r overflow-y-auto"
      >
        <div class="flex items-center mb-8">
          <a
            class="mr-auto text-3xl font-bold leading-none"
            href="#"
            data-config-id="brand"
          >
            <img
              class="h-10"
              src="@/assets/images/logo-light.png"
              alt=""
              width="auto"
            />
          </a>
          <button class="navbar-close" @click="toggleMenu">
            <svg
              class="h-6 w-6 text-gray-400 cursor-pointer hover:text-gray-500"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewbox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                d="M6 18L18 6M6 6l12 12"
              ></path>
            </svg>
          </button>
        </div>
        <div>
          <ul>
            <li class="mb-1">
              <nuxt-link
                class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                to="/"
                >Start</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                to="/"
                >Münsterturm</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                to="/"
                >Gotik am Oberrhein</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                to="/"
                >Artikel</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                to="/"
                >Mediathek</nuxt-link
              >
            </li>
            <li>
              <nuxt-link
                class="block p-4 text-sm font-semibold text-gray-400 hover:bg-green-50 hover:text-green-600 rounded"
                to="/"
                >Galerie</nuxt-link
              >
            </li>
          </ul>
        </div>
        <div class="mt-auto">
          <div class="pt-6">
            <a
              class="block px-4 py-3 mb-3 leading-loose text-xs text-center font-semibold leading-none bg-gray-50 hover:bg-gray-100 rounded-l-xl rounded-t-xl"
              href="#"
              data-config-id="secondary-action"
              >Sign in</a
            ><a
              class="block px-4 py-3 mb-2 leading-loose text-xs text-center text-white font-semibold bg-green-600 hover:bg-green-700 rounded-l-xl rounded-t-xl"
              href="#"
              data-config-id="primary-action"
              >Sign Up</a
            >
          </div>
          <p class="my-4 text-xs text-center text-gray-400">
            <span data-config-id="copy">&copy; 2020 All rights reserved.</span>
          </p>
          <div class="text-center">
            <a class="inline-block px-1" href="#">
              <img src="atis-assets/social/facebook.svg" alt="" />
            </a>
            <a class="inline-block px-1" href="#">
              <img src="atis-assets/social/twitter.svg" alt="" />
            </a>
            <a class="inline-block px-1" href="#">
              <img src="atis-assets/social/instagram.svg" alt="" />
            </a>
          </div>
        </div>
      </nav>
    </div>
  </section>
</template>

<script>
export default {
  data() {
    return {
      isMobileMenu: false
    };
  },
  methods: {
    toggleMenu() {
      this.isMobileMenu = !this.isMobileMenu;
    }
  }
};
</script>
