<template>
  <div ref="headerWordContainer" class="relative">
    <component
      :before-tag="'<' + headerType + '>'"
      :after-tag="'</' + headerType + '>'"
      :is="headerType"
      :aria-label="theWord.join()"
      class="header before:font-element after:font-element"
    >
      <template v-for="(word, index) in theWord">
        <span
          class="inline-block min-w-[0.5rem] cursor-default bg-gradient-to-t from-slate-50 to-slate-200 bg-clip-text leading-tight text-transparent"
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

/* ---------------------------------- Props --------------------------------- */

interface fontSize {
  default?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

interface Props {
  fontSize?: fontSize;
  fontSizeUnit?: string;
  headerType?: string;
  theWord?: string[];
}

const props = withDefaults(defineProps<Props>(), {
  fontSize: (): Props["fontSize"] => ({
    default: 4,
    md: 5,
    lg: 6,
    xl: 7,
  }),
  fontSizeUnit: "rem",
  headerType: "h1",
  theWord: () => ["Default", "Text"],
});

/* ---------------------------------- State --------------------------------- */

const { tagColor, tagFontSize } = useStore();
const { theWord, headerType } = reactive(toRefs(props));

const headerWordContainer = ref<HTMLElement>(null);

/* -------------------------------- Lifecycle ------------------------------- */

onMounted(() => {
  listenHoverOnLetters(headerWordContainer.value);
  console.log(lgFontSize.value);
});

/* --------------------------------- Getters -------------------------------- */

const fontSize = computed({
  get: () => `${props.fontSize.default}${props.fontSizeUnit}`,
  set: () => {},
});
const mdFontSize = computed({
  get: () => `${props.fontSize.md}${props.fontSizeUnit}`,
  set: () => {},
});
const lgFontSize = computed({
  get: () => `${props.fontSize.lg}${props.fontSizeUnit}`,
  set: () => {},
});
const xlFontSize = computed({
  get: () => `${props.fontSize.xl}${props.fontSizeUnit}`,
  set: () => {},
});

/* --------------------------------- Methods -------------------------------- */

function getWindowWidth(): number {
  return window.innerWidth;
}

function listenHoverOnLetters(headerWordContainer: HTMLElement) {
  headerWordContainer.addEventListener("mouseover", (e) => {
    const element = e.target as HTMLElement;
    if (element.tagName.toLowerCase() == headerType) return;

    element.classList.add("animated");
    element.classList.add("rubberBand");
  });
  headerWordContainer.addEventListener("animationend", (e) => {
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
  position: absolute;
  top: -0.8rem;
}
.header::after {
  content: attr(after-tag);
  color: v-bind(tagColor);
  font-size: v-bind(tagFontSize);
  position: absolute;
  bottom: -1.5rem;
  left: 0;
}

.header span {
  font-size: v-bind(xlFontSize);
}
@media screen and (max-width: 1024px) {
  .header span {
    font-size: v-bind(lgFontSize);
  }
}

@media screen and (max-width: 768px) {
  .header span {
    font-size: v-bind(mdFontSize);
  }
}

@media screen and (max-width: 640px) {
  .header span {
    font-size: v-bind(fontSize);
  }
}
</style>
