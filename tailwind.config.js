const colors = require('tailwindcss/colors');

module.exports = {
  darkMode: 'class',
  mode: 'jit',
  content: [
    './componesnts/*.{vue,js}',
    './components/**/*.{vue,js}',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './*.{vue,js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    container: {
      center: true,
      padding: {
        DEFAULT: '1.5rem',
      },
    },

    extend: {
      colors: {
        primary: '#E2703A',
      },
      fontFamily: {
        logo: ['Mea Culpa', 'cursive'],
        pofuduk: ['Nunito', 'sans-serif'],
      },
    },
  },
  plugins: [],
};
