<template>
  <Html lang="en" class="h-full">
    <Body class="container mx-auto min-h-screen font-sans">
      <TheNavBar />

      <span class="tags top-tags"> &lt;/html&gt; <br /> </span>
      <slot />
      <span class="tags bottom-tags"
        ><br />
        &lt;/html&gt;
      </span>
    </Body>
  </Html>
</template>

<script setup>
import TheNavBar from "../components/header/TheNavBar.vue";
</script>

<style>
.tags,
.top-tags::after,
.bottom-tags::before {
  font-family: "Dancing Script", cursive;
  color: #515152;
}
.tags {
  display: inline-block;
  margin-top: 2rem;
  font-size: 1.7rem;
  letter-spacing: 3px;
}

.bottom-tags {
  margin-top: 5rem;
}

.top-tags {
  margin-bottom: 2rem;
}

.top-tags:after {
  content: "<body>";
  position: absolute;
  margin-left: 1.5rem;
}

.bottom-tags:before {
  content: "</body>";
  color: #515152;
  position: absolute;
  margin-left: 1.5rem;
}
</style>
