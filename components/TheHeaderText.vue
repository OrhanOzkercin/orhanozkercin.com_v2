<template>
  <div ref="headerWord" class="absolute top-16 left-0">
    <h1 :aria-label="theWord.join()" class="header">
      <template v-for="word in theWord">
        <span
          class="inline-block text-4xl md:text-6xl lg:text-9xl tracking-wide font-pofuduk cursor-default text-transparent bg-clip-text bg-gradient-to-t from-slate-900 to-slate-400 dark:from-slate-50 dark:to-slate-100"
          v-for="letter in word"
        >
          {{ letter }}
        </span>
        <br />
      </template>
    </h1>
  </div>
</template>

<script lang="ts" setup>
import Colors from 'tailwindcss/colors';
const props = defineProps<{
  theWord: string[];
}>();
console.log(props.theWord);

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

    element.classList.remove('bg-gradient-to-t');
    element.classList.remove('from-slate-900');
    element.classList.remove('to-slate-400');
    element.classList.add('dark:bg-primary');
  });
  headerWord.addEventListener('animationend', (e) => {
    const element = e.target as HTMLElement;
    element.classList.remove('animated');
    element.classList.remove('rubberBand');

    element.classList.add('bg-gradient-to-t');
    element.classList.add('from-slate-900');
    element.classList.add('to-slate-400');
    element.classList.remove('dark:bg-primary');
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
  margin-top: -1.5rem;
  // margin-left: -1.5rem;
}
.header::after {
  content: '</h1>';
  color: #515152;
  font-size: 1.8rem;
  position: absolute;
  // margin-left: -1.5rem;
}
</style>
