/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js" 
  ],
  theme: {
    extend: {
      colors: {
        customColor: '#e3e5db',
        greenColor: '#47ae6a',
      }
    },
  },
  plugins: ['flowbite/plugin'],
}

