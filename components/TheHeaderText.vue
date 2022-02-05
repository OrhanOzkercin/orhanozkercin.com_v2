<template>
  <div ref="headerWord" class="relative">
    <component
      :before-tag="'<' + headerType + '>'"
      :after-tag="'</' + headerType + '>'"
      :is="headerType"
      :aria-label="theWord.join()"
      class="header my-20 before:font-element after:font-element"
    >
      <template v-for="(word, index) in theWord">
        <span
          :class="[
            index === 0
              ? `text-xl md:text-[${fontSize * 0.9}px] lg:text-[${fontSize}px]`
              : 'after',
          ]"
          class="inline-block min-w-[0.5rem] cursor-default bg-gradient-to-t from-slate-50 to-slate-200 bg-clip-text text-transparent"
          v-for="letter in word"
        >
          {{ letter === " " ? "&nbsp;" : letter }}
        </span>
        <br v-if="index % 2 === 0" />
      </template>
    </component>
  </div>
</template>

<script lang="ts" setup>
import { useStore } from "~~/store/store";

interface Props {
  fontSize?: number;
  headerType?: string;
  theWord?: string[];
}
const props = withDefaults(defineProps<Props>(), {
  fontSize: "1rem",
  headerType: "h1",
  theWord: () => ["Default", "Text"],
});

const { tagColor, tagFontSize } = useStore();
const { theWord, headerType } = reactive(toRefs(props));

const headerWord = ref<HTMLElement>(null);

onMounted(() => {
  listenHoverOnLetters(headerWord.value);
});

function listenHoverOnLetters(headerWord: HTMLElement) {
  headerWord.addEventListener("mouseover", (e) => {
    const element = e.target as HTMLElement;
    if (element.tagName.toLowerCase() == headerType) return;

    element.classList.add("animated");
    element.classList.add("rubberBand");
  });
  headerWord.addEventListener("animationend", (e) => {
    const element = e.target as HTMLElement;
    element.classList.remove("animated");
    element.classList.remove("rubberBand");
  });
}
</script>

<style lang="scss" scoped>
.header::before {
  content: attr(before-tag);
  color: v-bind(tagColor);
  // font-size: v-bind(tagFontSize);
  position: absolute;
  top: -0.7rem;
  // margin-left: -1.5rem;
}
.header::after {
  content: attr(after-tag);
  color: v-bind(tagColor);
  // font-size: v-bind(tagFontSize);
  position: absolute;
  bottom: -0.7rem;
  left: 0;
}

.header span {
  // font-size: v-bind(fontSize);
}

@media screen and (max-width: 1024px) {
  .header::after {
    bottom: 0rem;
  }
  .header span {
    // font-size: v-bind(fontSize);
  }
}
</style>
