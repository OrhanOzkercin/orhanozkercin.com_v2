<template>
  <div
    class="sticky top-0 w-full backdrop-blur-sm flex-none lg:border-b lg:border-slate-900/10 dark:border-slate-50/[0.1] bg-white dark:bg-slate-900/75"
  >
    <div class="flex items-center py-3">
      <NuxtLink class="logo ml-3 md:mr-3 flex-none overflow-hidden md:w-auto" to="/"
        ><span class="sr-only">Orhan Özkerçin Personal Site</span>
        <span class="font-logo text-teal-400 text-4xl">O</span>
        <div class="inline-block ml-1 mb-[-.5rem] bg-sky-300 w-3 h-3 rounded-full"></div>
      </NuxtLink>
      <div class="relative hidden lg:flex items-center ml-auto">
        <nav class="text-sm leading-6 font-semibold dark:text-slate-100">
          <ul class="flex space-x-8">
            <li><NuxtLink class="hover:text-primary" to="#">About Me</NuxtLink></li>
            <li>My Talks</li>
            <li>Blog</li>
          </ul>
        </nav>
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { useColorMode } from '~~/store/useDarkMode';

const colorModeStore = useColorMode();

const toggleColorMode = () => {
  colorModeStore.toggleColorMode();
};
</script>

<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Mea+Culpa&display=swap');
</style>
