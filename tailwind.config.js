const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './components/*.{vue,js}',
    './components/**/*.{vue,js}',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './*.{vue,js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    fontFamily: {
      logo: ['Mea Culpa', 'cursive'],
    },
  },
  plugins: [],
};
