<template>
  <main class="relative ml-6">
    <header class="mb-[8rem] grid grid-cols-5 gap-3">
      <div class="col-span-5 md:col-span-3">
        <TheHeaderText
          class="mt-24 mb-14 block"
          :font-size="4"
          :the-word="['Helloo!', 'I\'m Orhan']"
        />
        <TheParagraphText fontSize="2rem" class="relative mb-16"
          >JavaScript Developer
        </TheParagraphText>
        <button class="btn btn-primary mt-8">Contact me</button>
      </div>
      <div class="col-span-2 mr-10 hidden lg:block">
        <img class="pp" src="/images/rm_pp2.png" alt="Orhan Özkerçin" />
      </div>
    </header>
    <section class="relative">
      <div
        class="grid grid-cols-5 after:absolute after:top-10 after:right-[5%] after:hidden after:font-semibold after:text-text-color after:opacity-[2%] after:content-['About\00a0Me'] after:md:block after:md:text-[6rem] after:lg:text-[10rem] after:xl:text-[12rem]"
      >
        <div class="col-span-5 xl:col-span-3">
          <TheHeaderText
            class="mb-16 mt-0"
            :header-type="'h2'"
            :the-word="['About Me']"
          />
          <TheParagraphText fontSize="1rem" class="relative mb-16"
            >Helloo! I am Orhan. Working with frontend development. I love
            JavaScript and building things with it. I am also interested in
            Electronic music and Chess. If you want to hear more about me and my
            carrier you can click button below 🤙

            <button class="btn btn-secondary mt-8 block">About Me</button>
          </TheParagraphText>
        </div>
        <div class="hidden xl:col-span-2 xl:block">
          <div class="mb-10 grid grid-cols-2 place-items-center">
            <JavaScriptIcon />
            <TypeScriptIcon />
          </div>
          <div class="mb-10 grid grid-cols-3 place-items-center">
            <ReactIcon />
            <VueIcon />
            <AngularIcon />
          </div>
          <div class="grid grid-cols-5 place-items-center">
            <SassIcon />
            <ReduxIcon />
            <TailwindIcon />
            <JestIcon />
            <GitIcon />
          </div>
        </div>
      </div>

      <TheHeaderText
        class="mt-24 mb-14 block"
        header-type="h2"
        :the-word="['My Talks']"
      />
      <div class="relative mt-[3rem]">
        <div
          class="grid grid-cols-3 gap-3 after:absolute after:-top-44 after:right-[5%] after:hidden after:font-semibold after:text-text-color after:opacity-[2%] after:content-['My\00a0Talks'] after:md:block after:md:text-[6rem] after:lg:text-[10rem] after:xl:text-[12rem]"
        >
          <div class="col-span-3 md:col-span-1">
            <iframe
              width="100%"
              height="280"
              src="https://www.youtube.com/embed/4mPC-I0ZNjY?start=3791"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="col-span-3 md:col-span-1">
            <iframe
              width="100%"
              height="280"
              src="https://www.youtube.com/embed/Ng_47FCnn04"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
          <div class="col-span-3 md:col-span-1">
            <iframe
              width="100%"
              height="280"
              src="https://www.youtube.com/embed/CYdz2ybiJgg"
              title="YouTube video player"
              frameborder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowfullscreen
            ></iframe>
          </div>
        </div>
      </div>
    </section>
  </main>
</template>

<script setup lang="ts">
import JavaScriptIcon from "~~/assets/icons/JavaScriptIcon.vue";
import TypeScriptIcon from "../assets/icons/TypeScriptIcon.vue";
import ReactIcon from "../assets/icons/ReactIcon.vue";
import VueIcon from "../assets/icons/VueIcon.vue";
import SassIcon from "../assets/icons/SassIcon.vue";
import ReduxIcon from "../assets/icons/ReduxIcon.vue";
import TailwindIcon from "../assets/icons/TailwindIcon.vue";
import AngularIcon from "../assets/icons/AngularIcon.vue";
import JestIcon from "../assets/icons/JestIcon.vue";
import GitIcon from "../assets/icons/GitIcon.vue";
</script>

<style scoped>
img.pp {
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
