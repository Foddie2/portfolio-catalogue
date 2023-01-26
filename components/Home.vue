<template>
<header>
    <!-- Navbar -->
    <nav
          class="
            container
            px-6
            py-6
            mx-auto
            md:flex md:justify-between md:items-center
          "
        >
          <div class="flex items-center justify-between">
            <router-link
              to="/"
              class="
                text-xl
                font-bold
                text-gray-500
                md:text-2xl
                hover:text-indigo-400
              "
              >Logo
            </router-link>
            <!-- Mobile menu button -->
            <div @click="toggleNav" class="flex md:hidden">
              <button
                type="button"
                class="
                  text-gray-500
                  hover:text-gray-400
                  focus:outline-none focus:text-gray-400
                "
              >
                <svg viewBox="0 0 24 24" class="w-6 h-6 fill-current">
                  <path
                    fill-rule="evenodd"
                    d="M4 5h16a1 1 0 0 1 0 2H4a1 1 0 1 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2zm0 6h16a1 1 0 0 1 0 2H4a1 1 0 0 1 0-2z"
                  ></path>
                </svg>
              </button>
            </div>
          </div>
    
          <!-- Mobile Menu open: "block", Menu closed: "hidden" -->
          <ul
            :class="showMenu ? 'flex' : 'hidden'"
            class="
              flex-col
              mt-8
              space-y-4
              md:flex md:space-y-0 md:flex-row md:items-center md:space-x-10 md:mt-0
            "
          >
            <li class="text-gray-500 hover:text-indigo-400">About Us</li>
            <li class="relative parent text-gray-500 hover:text-indigo-400">
              <a href="#" class="flex justify-between md:inline-flex p-4 items-center space-x-2">
                <span>Our Services</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                  </a>
                    <ul class="child transition duration-300 md:absolute top-full right-0 md:w-52 bg-white md:shadow-lg md:rounded-b ">
                      <li> 
                        <NuxtLink to="/services/web-dev">
                          <a href="/services/web-dev" class="flex px-4 py-3 hover:bg-violet-50">
                            Software development
                          </a>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/services/web-design">
                          <a href="/services/web-design" class="flex px-4 py-3 hover:bg-violet-50">
                            Web Design
                          </a>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/services/technical-support">
                          <a href="/services/technical-support" class="flex px-4 py-3 hover:bg-violet-50">
                            Technical / IT Support
                          </a>
                        </NuxtLink>
                      </li>
                  </ul>
            </li>
            <li class="text-gray-500 hover:text-indigo-400">Contact Us</li>
          </ul>
        </nav>
    <!-- Navbar -->

  <!-- Background image -->
  <div class="relative overflow-hidden bg-no-repeat bg-cover" style="
    background-position: 50%;
    background-image: url('https://mdbcdn.b-cdn.net/img/new/slides/146.webp');
    height: 600px;
  ">
    <div class="absolute top-0 right-0 bottom-0 left-0 w-full h-full overflow-hidden bg-fixed"
      style="background-color: rgba(0, 0, 0, 0.75)">
      <div class="flex justify-center items-center h-full">
        <div class="text-center text-white px-6 md:px-12">
          <h1 class="text-5xl font-bold mt-0 mb-6">Heading</h1>
          <h3 class="text-3xl font-bold mb-8">Subeading</h3>
          <button type="button"
            class="inline-block px-6 py-2.5 border-2 border-white text-white font-medium text-xs leading-tight uppercase rounded hover:bg-black hover:bg-opacity-5 focus:outline-none focus:ring-0 transition duration-150 ease-in-out"
            data-mdb-ripple="true" data-mdb-ripple-color="light">
            Get started
          </button>
        </div>
      </div>
    </div>
  </div>
  <!-- Background image -->
</header>
</template>

<script>
import { ref } from 'vue';
export default {
  setup() {
    let showMenu = ref(false);
    const toggleNav = () => (showMenu.value = !showMenu.value);
    return { showMenu, toggleNav };
  },
};
</script>

<style  scoped>

@media only screen and (min-width: 768px) {
    .parent:hover .child {
      opacity: 1;
      height: auto;
      overflow: none;
      transform: translateY(0);
    }
  
    .child {
      position: absolute;
      z-index: 2;
      opacity: 0;
      height: 0;
      overflow: hidden;
      transform: translateY(-10%);
    }
  }
  
  .link-underline {
    border-bottom-width: 0;
    background-image: linear-gradient(transparent, transparent), linear-gradient(#fff, #fff);
    background-size: 0 3px;
    background-position: 0 100%;
    background-repeat: no-repeat;
    transition: background-size .5s ease-in-out;
  }
  
  .link-underline-black {
    background-image: linear-gradient(transparent, transparent), linear-gradient(rgb(166, 210, 228), rgb(185, 34, 255))
  }
  
  .link-underline:hover {
   background-size: 100% 3px;
   background-position: 0 100%
  }

</style>