/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
  ],
  theme: {
    extend: {
      colors:{
        'primary': '#2188D9',
        'secondary': '#1773BB'
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
}