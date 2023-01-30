/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,vue,ts}",
    "./layouts/**/*.vue",
    "./pages/**/*.vue",
    "./plugins/**/*.{js,ts}",
    "./nuxt.config.{js,ts}",
    "./app.vue",
    "./node_modules/flowbite.{js,ts}",
    "./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js"

  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('flowbite'),
    require('tw-elements/dist/plugin'),

  ],
}
