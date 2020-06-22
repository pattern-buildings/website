<template>
  <article class="content-block" v-html="content" />
</template>

<script>
export default {
  props: {
    content: {
      type: String,
      required: true,
    },
  },
};
</script>

<style>
.content-block {
  @apply my-16 leading-loose;
}
.content-block p {
  @apply my-8;
}
.content-block h1,
.content-block h2,
.content-block h3,
.content-block h4,
.content-block h5,
.content-block h6 {
  @apply mt-16;
}
.content-block img {
  @apply w-full max-w-xl mx-auto;
}
</style>
