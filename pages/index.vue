<template>
  <Header />
  <main class="relative">
    <div>
      <TheHeaderText class="mt-24 mb-14 block" :the-word="helloWord" />
    </div>
    <TheParagraphText class="relative mb-16"
      >Frontend Developer</TheParagraphText
    >

    <ThePrimaryButton>Contact me</ThePrimaryButton>
    <!-- <img class="w-[300px] h-auto" src="@/assets/images/rm_pp.png" alt="Orhan Özkerçin" /> -->
  </main>
</template>

<script setup lang="ts">
const helloWord = ["Hello!", "I'm Orhan"];
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap");
img {
  width: 100%;
  height: auto;
}
</style>
