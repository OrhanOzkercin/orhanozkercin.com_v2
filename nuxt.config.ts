import { defineNuxtConfig } from 'nuxt3';

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  buildModules: ['@pinia/nuxt'],
  build: {
    postcss: {
      postcssOptions: require('./postcss.config.js'),
    },
  },
  css: ['~/assets/css/tailwind.scss', '~/assets/css/global.scss'],
});
