<template>
  <Html lang="en" class="h-full" name="1">
    <Head>
      <Link
        rel="stylesheet"
        type="text/css"
        href="https://widgets.superpeer.com/widget.css"
      />
      <Script src="https://widgets.superpeer.com/widget.js" defer></Script>
    </Head>
    <Body class="container mx-auto min-h-screen font-sans">
      <TheNavBar />

      <span class="tags top-tags"> &lt;html&gt; <br /> </span>
      <slot />
      <span class="tags bottom-tags"
        ><br />
        &lt;/html&gt;
      </span>
      <TheMusicButton />
    </Body>
  </Html>
</template>

<script setup>
import TheNavBar from "../components/TheNavBar.vue";

import { useStore } from "~~/store/store";
const { tagColor, tagFontSize } = useStore();
const renderMusicBtn = ref(false);
onMounted(() => {
  renderMusicBtn.value = true;
  addSuperpeerWidget();
});

const addSuperpeerWidget = () => {
  window.addEventListener("load", () => {
    new Superpeer.Widget({
      embed: { type: "slide-in" },
      launcher: {
        type: "superpeer-logo",
        options: {},
      },
      config: { username: "orhanozkercin", serviceSlug: "" },
    });
  });
};
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Dancing+Script&display=swap");

.tags,
.top-tags::after,
.bottom-tags::before {
  font-family: "Dancing Script", cursive;
  color: v-bind(tagColor);
}
.tags {
  display: inline-block;
  margin-top: 2rem;
  font-size: v-bind(tagFontSize);
  letter-spacing: 3px;
}

.top-tags:after {
  content: "<body>";
  position: absolute;
  margin-left: 1.5rem;
}

.bottom-tags:before {
  content: "</body>";
  position: absolute;
  margin-left: 1.5rem;
}
</style>
