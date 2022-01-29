<template>
  <main class="relative ml-6">
    <TheHeaderText
      class="mt-24 mb-14 block"
      header-type="h1"
      font-size="6rem"
      :the-word="helloWord"
    />
    <TheParagraphText :fontSize="'2rem'" class="relative mb-16"
      >JavaScript Developer
    </TheParagraphText>
    <ThePrimaryButton class="mt-8">Contact me</ThePrimaryButton>
    <!-- <img class="w-[300px] h-auto" src="@/assets/images/rm_pp.png" alt="Orhan Özkerçin" /> -->
  </main>
</template>

<script setup lang="ts">
const helloWord = ["Hello!", "I'm Orhan"];
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
}
</style>
