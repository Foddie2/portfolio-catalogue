<template>

    <!-- Navbar -->
    <nav class="container px-6 pt-3 mx-auto md:flex md:justify-between md:items-center fixed z-20">
          <div class="flex items-center justify-between">
            <router-link to="/">
            <svg xmlns="http://www.w3.org/2000/svg" class="w-10 h-10 text-purple-600" viewBox="0 0 24 24">
            <path fill="currentColor" d="M14.5,16 C14.2238576,16 14,15.7761424 14,15.5 L14,9.5 C14,9.22385763 14.2238576,9 14.5,9 L16,9 C17.1045695,9 18,9.8954305 18,11 C18,11.4116588 17.8756286,11.7942691 17.6624114,12.1123052 C18.4414283,12.3856578 19,13.1275982 19,14 C19,15.1045695 18.1045695,16 17,16 L14.5,16 Z M15,15 L17,15 C17.5522847,15 18,14.5522847 18,14 C18,13.4477153 17.5522847,13 17,13 L15,13 L15,15 Z M15,12 L16,12 C16.5522847,12 17,11.5522847 17,11 C17,10.4477153 16.5522847,10 16,10 L15,10 L15,12 Z M12.9499909,4 L19.5,4 C20.8807119,4 22,5.11928813 22,6.5 L22,19.5 C22,20.8807119 20.8807119,22 19.5,22 L13.5,22 C12.2700325,22 11.2475211,21.1117749 11.0389093,19.9417682 C10.8653433,19.9799013 10.6850188,20 10.5,20 L4.5,20 C3.11928813,20 2,18.8807119 2,17.5 L2,4.5 C2,3.11928813 3.11928813,2 4.5,2 L10.5,2 C11.709479,2 12.7183558,2.85887984 12.9499909,4 Z M13,5 L13,17.5 C13,18.3179089 12.6072234,19.0440799 12,19.5001831 C12.0000989,20.3285261 12.6716339,21 13.5,21 L19.5,21 C20.3284271,21 21,20.3284271 21,19.5 L21,6.5 C21,5.67157288 20.3284271,5 19.5,5 L13,5 Z M8.56005566,11.4964303 C8.54036595,11.4987873 8.52032459,11.5 8.5,11.5 L6.5,11.5 C6.47967541,11.5 6.45963405,11.4987873 6.43994434,11.4964303 L5.96423835,12.6856953 C5.86168164,12.9420871 5.57069642,13.066795 5.31430466,12.9642383 C5.0579129,12.8616816 4.93320495,12.5706964 5.03576165,12.3143047 L7.03576165,7.31430466 C7.20339081,6.89523178 7.79660919,6.89523178 7.96423835,7.31430466 L9.96423835,12.3143047 C10.066795,12.5706964 9.9420871,12.8616816 9.68569534,12.9642383 C9.42930358,13.066795 9.13831836,12.9420871 9.03576165,12.6856953 L8.56005566,11.4964303 Z M8.16148352,10.5 L7.5,8.8462912 L6.83851648,10.5 L8.16148352,10.5 Z M10.5,3 L4.5,3 C3.67157288,3 3,3.67157288 3,4.5 L3,17.5 C3,18.3284271 3.67157288,19 4.5,19 L10.5,19 C11.3284271,19 12,18.3284271 12,17.5 L12,4.5 C12,3.67157288 11.3284271,3 10.5,3 Z M6.5,18 C6.22385763,18 6,17.7761424 6,17.5 C6,17.2238576 6.22385763,17 6.5,17 L8.5,17 C8.77614237,17 9,17.2238576 9,17.5 C9,17.7761424 8.77614237,18 8.5,18 L6.5,18 Z M15.5,20 C15.2238576,20 15,19.7761424 15,19.5 C15,19.2238576 15.2238576,19 15.5,19 L17.5,19 C17.7761424,19 18,19.2238576 18,19.5 C18,19.7761424 17.7761424,20 17.5,20 L15.5,20 Z"/>
            </svg>
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
          <NuxtLink to="/About">
            <li class="text-gray-500 hover:text-indigo-400">About Us</li>
          </NuxtLink>
            <li class="relative parent text-gray-500 hover:text-indigo-400">
              <a href="#" class="flex justify-between md:inline-flex p-4 items-center space-x-2">
                <span>Our Services</span>
                    <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4 fill-current pt-1" viewBox="0 0 24 24"><path d="M0 7.33l2.829-2.83 9.175 9.339 9.167-9.339 2.829 2.83-11.996 12.17z"/></svg>
                  </a>
                    <ul class="child transition duration-300 md:absolute top-full right-0 md:w-52 bg-white md:shadow-lg md:rounded-b ">
                      <li> 
                        <NuxtLink to="/services/system-development">
                          <a href="" class="flex px-4 py-3 hover:bg-violet-50">
                            System development
                          </a>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/services/web-design-development">
                          <a href="" class="flex px-4 py-3 hover:bg-violet-50">
                            Web Design & Development
                          </a>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/services/technical-IT-Support">
                          <a href="" class="flex px-4 py-3 hover:bg-violet-50">
                            Technical / IT Support
                          </a>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/services/consultancy">
                          <a href="" class="flex px-4 py-3 hover:bg-violet-50">
                            Consultancy
                          </a>
                        </NuxtLink>
                      </li>
                      <li>
                        <NuxtLink to="/services/warehouse-design">
                          <a href="" class="flex px-4 py-3 hover:bg-violet-50">
                            Warehouse Design
                          </a>
                        </NuxtLink>
                      </li>
                  </ul>
            </li>
            <NuxtLink to="/Contact">
            <li class="text-gray-500 hover:text-indigo-400">Contact Us</li>
            </NuxtLink>
          </ul>
        </nav>
    <!-- Navbar -->
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

<style lang="scss" scoped>

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