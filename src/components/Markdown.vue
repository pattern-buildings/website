<template>
  <article v-html="renderedMarkdown" />
</template>

<script>
import MarkdownIt from 'markdown-it'
const md = new MarkdownIt();

export default {
  props: {
    raw: {
      type: String,
      required: true,
    },
  },
  computed: {
    renderedMarkdown() {
      return md.render(this.raw);
    }
  }
};
</script>

