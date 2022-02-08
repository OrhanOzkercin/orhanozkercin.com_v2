<template>
  <button @click="togglePlay" class="fixed left-3 bottom-3">
    <svg
      v-if="isMusicPlaying"
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="36"
      height="36"
      viewBox="0 0 544 512"
      fill="#eab308"
      class="animate-bounce"
    >
      <title />
      <g id="icomoon-ignore"></g>
      <path
        d="M445.020 461.020c-6.143 0-12.283-2.343-16.971-7.028-9.372-9.373-9.372-24.568 0-33.941 43.819-43.821 67.952-102.080 67.952-164.050 0-61.969-24.133-120.229-67.952-164.049-9.372-9.373-9.372-24.569 0-33.941s24.569-9.372 33.941 0c52.885 52.886 82.011 123.2 82.011 197.99s-29.126 145.104-82.011 197.99c-4.686 4.686-10.828 7.029-16.97 7.029zM359.765 415.765c-6.143 0-12.283-2.343-16.971-7.028-9.372-9.372-9.372-24.568 0-33.941 65.503-65.503 65.503-172.085 0-237.588-9.372-9.373-9.372-24.569 0-33.941 9.372-9.371 24.569-9.372 33.941 0 40.797 40.795 63.265 95.037 63.265 152.733s-22.468 111.938-63.265 152.735c-4.686 4.687-10.828 7.030-16.97 7.030v0zM274.51 370.51c-6.143 0-12.284-2.343-16.971-7.029-9.373-9.373-9.373-24.567 0-33.94 40.55-40.55 40.55-106.529 0-147.078-9.373-9.373-9.373-24.569 0-33.941s24.568-9.372 33.941 0c59.265 59.265 59.265 155.696 0 214.961-4.686 4.684-10.828 7.027-16.97 7.027z"
      />
      <path
        d="M208.003 480c-4.164 0-8.256-1.625-11.317-4.687l-123.313-123.313h-57.373c-8.836 0-16-7.163-16-16v-160c0-8.836 7.164-16 16-16h57.373l123.313-123.314c4.577-4.577 11.458-5.945 17.437-3.468s9.877 8.311 9.877 14.782v416c0 6.472-3.898 12.306-9.877 14.782-1.979 0.82-4.059 1.218-6.12 1.218z"
      />
    </svg>

    <svg
      xmlns="http://www.w3.org/2000/svg"
      version="1.1"
      width="36"
      height="36"
      viewBox="0 0 512 512"
      fill="#06b6d4"
      v-if="!isMusicPlaying"
      class="animate-pulse"
    >
      <title />
      <g id="icomoon-ignore"></g>
      <path d="M96 64l320 192-320 192z" />
    </svg>
  </button>
  <audio src="/music/domix.mp3" ref="music"></audio>
</template>
<script lang="ts" setup>
const isMusicPlaying = ref(false);
const music = ref(null);

onMounted(() => {
  setPlayingStatus();
});

function setPlayingStatus() {
  music.value.onplaying = () => {
    isMusicPlaying.value = true;
  };
}
const togglePlay = () => {
  if (!isMusicPlaying.value) {
    music.value.play();
  } else {
    music.value.pause();
  }
  isMusicPlaying.value = !isMusicPlaying.value;
};
</script>
