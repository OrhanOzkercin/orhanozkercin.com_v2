import { defineStore } from 'pinia';

export const useColorMode = defineStore('colorMode', {
  state: () => {
    return {
      colorMode: 'dark',
    };
  },
  actions: {
    toggleColorMode() {
      this.colorMode === 'dark'
        ? document.documentElement.classList.add('dark')
        : document.documentElement.classList.remove('dark');
      this.colorMode = this.colorMode === 'dark' ? 'light' : 'dark';
    },
  },
});
