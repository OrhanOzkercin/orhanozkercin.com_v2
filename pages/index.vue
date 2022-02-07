<template>
  <main class="relative ml-6 grid grid-cols-5 gap-3">
    <div class="col-span-3">
      <TheHeaderText class="mt-24 mb-14 block" :the-word="helloWord" />
      <TheParagraphText fontSize="2rem" class="relative mb-16"
        >JavaScript Developer
      </TheParagraphText>
      <ThePrimaryButton class="mt-8">Contact me</ThePrimaryButton>
    </div>
    <div class="col-span-2 mr-10 hidden lg:block">
      <img src="@/assets/images/rm_pp2.png" alt="Orhan Özkerçin" />
    </div>
  </main>
</template>

<script setup lang="ts">
const helloWord = ["Hello!", "I'm Orhan"];
</script>

<style scoped>
img {
  width: 100%;
  height: auto;
  filter: drop-shadow(20px 0 0.75rem rgb(14, 13, 13));
  -webkit-mask-image: -webkit-gradient(
    linear,
    center bottom,
    center top,
    color-stop(0, rgba(0, 0, 0, 0)),
    color-stop(0.5, rgba(0, 0, 0, 1))
  );
}
</style>
