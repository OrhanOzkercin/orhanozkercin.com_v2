<template>
  <p class="paragraph before:font-element after:font-element">
    <slot />
  </p>
</template>

<script lang="ts" setup>
import { useStore } from "~~/store/store";

const props = withDefaults(
  defineProps<{
    fontSize: string;
  }>(),
  {
    fontSize: "1rem",
  }
);

const { tagColor, tagFontSize } = useStore();
</script>

<style lang="scss" scoped>
.paragraph {
  font-size: v-bind(fontSize);
}
.paragraph::before {
  content: "<p>";
  color: v-bind(tagColor);
  font-size: v-bind(tagFontSize);
  position: absolute;
  top: -2.5rem;
  // margin-left: -1.5rem;
}
.paragraph::after {
  content: "</p>";
  color: v-bind(tagColor);
  font-size: v-bind(tagFontSize);
  position: absolute;
  bottom: -2.4rem;
  left: 0;
}
</style>
