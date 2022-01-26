<template>
  <Header />
  <main class="relative">
    <div ref="headerWord" class="absolute top-16 left-0">
      <span
        class="inline-block text-4xl md:text-6xl lg:text-9xl tracking-wide font-pofuduk cursor-default text-transparent bg-clip-text bg-gradient-to-t from-slate-900 to-slate-400 dark:from-slate-50 dark:to-slate-100"
        v-for="(letter, index) in helloWord"
        >{{ letter }}
      </span>
    </div>
  </main>
</template>

<script setup lang="ts">
const helloWord = 'Hello';
const headerWord = ref<HTMLElement>(null);

onMounted(() => {
  listenHoverOnLetters(headerWord.value);
});

function listenHoverOnLetters(headerWord: HTMLElement) {
  headerWord.addEventListener('mouseover', (e) => {
    const element = e.target as HTMLElement;
    if (element.tagName == 'DIV') return;

    console.log('element:', element);
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

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Nunito:wght@700&display=swap');
img {
  width: 100%;
  height: auto;
}
</style>
