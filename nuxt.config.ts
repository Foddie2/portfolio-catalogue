// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    css: ['~/assets/css/main.css', "~/assets/scss/index.scss"],
    build: {
      transpile: ["mdb-vue-ui-kit"],
    },
    
    postcss: {
        plugins: {
          tailwindcss: {},
          autoprefixer: {},
        },
      },
      app: {
        head: {
          script: [
            {src: 'https://cdn.jsdelivr.net/npm/tw-elements/dist/js/index.min.js9'}

          ]

        }
      },

      
      

})
