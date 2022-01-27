<template>
  <div ref="headerWord" class="relative">
    <h1
      :aria-label="theWord.join()"
      class="before:content-['<h1>'] before:text-gray-500 before:text-2xl before:md:text-3xl before:font-element before:absolute before:-top-8 after:content-['</h1>'] after:text-gray-500 after:text-2xl after:md:text-3xl after:font-element after:absolute after:-bottom-1 after:lg:bottom-4 my-20"
    >
      <template v-for="(word, index) in theWord">
        <span
          class="inline-block text-4xl md:text-6xl min-w-[0.5rem] lg:min-w-[2rem] lg:text-9xl tracking-wide font-pofuduk cursor-default text-transparent bg-clip-text bg-gradient-to-t from-slate-900 to-slate-400 dark:from-slate-50 dark:to-slate-100"
          v-for="letter in word"
        >
          {{ letter }}
        </span>
        <br v-if="index % 2 === 0" />
      </template>
    </h1>
  </div>
</template>

<script lang="ts" setup>
const props = defineProps<{ theWord: string[] }>();

const { theWord } = toRefs(props);

const headerWord = ref<HTMLElement>(null);

onMounted(() => {
  listenHoverOnLetters(headerWord.value);
});

function listenHoverOnLetters(headerWord: HTMLElement) {
  headerWord.addEventListener('mouseover', (e) => {
    const element = e.target as HTMLElement;
    if (element.tagName.toLowerCase() == 'h1') return;

    element.classList.add('animated');
    element.classList.add('rubberBand');
  });
  headerWord.addEventListener('animationend', (e) => {
    const element = e.target as HTMLElement;
    element.classList.remove('animated');
    element.classList.remove('rubberBand');
  });
}
</script>
<style lang="scss" scoped>
@import url('https://fonts.googleapis.com/css2?family=Comforter&display=swap');
.header::before,
.header::after {
  font-family: 'Comforter', cursive;
}
.header::before {
  content: '<h1>';
  color: #515152;
  font-size: 1.8rem;
  position: absolute;
  top: -2rem;
  // margin-left: -1.5rem;
}
.header::after {
  content: '</h1>';
  color: #515152;
  font-size: 1.8rem;
  position: absolute;
  bottom: 0.5rem;
  margin-left: 1rem;
}
</style>
