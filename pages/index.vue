<template>
  <Header />
  <main class="relative flex">
    <TheHeaderText :the-word="helloWord" />

    <img class="w-[300px] h-auto" src="@/assets/images/rm_pp.png" alt="Orhan Özkerçin" />
  </main>
</template>

<script setup lang="ts">
const helloWord = ['Hello', "I'm Orhan!"];
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
img {
  width: 100%;
  height: auto;
}
</style>
