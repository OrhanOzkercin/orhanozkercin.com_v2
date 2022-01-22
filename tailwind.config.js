module.exports = {
  darkMode: 'class',
  mode: 'jit',
  purge: [
    './assets/**/*.{css}',
    './components/*.{vue,js}',
    './components/**/*.{vue,js}',
    './pages/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './*.{vue,js,ts}',
    './nuxt.config.{js,ts}',
  ],
  theme: {
    color: {
      extends: {
        primary: '#fe3',
      },
    },
  },
  plugins: [],
};
