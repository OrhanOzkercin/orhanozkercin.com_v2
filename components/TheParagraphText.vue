<template>
  <p class="paragraph">
    <slot />
  </p>
</template>

<script lang="ts" setup></script>

<style lang="scss" scoped>
.paragraph {
  font-size: 2rem;
}
.paragraph::before,
.paragraph::after {
  font-family: 'Comforter', cursive;
}
.paragraph::before {
  content: '<p>';
  color: #515152;
  font-size: 1.5rem;
  position: absolute;
  top: -2.5rem;
  // margin-left: -1.5rem;
}
.paragraph::after {
  content: '</p>';
  color: #515152;
  font-size: 1.5rem;
  position: absolute;
  bottom: -2.5rem;
  left: 0;
}
</style>
