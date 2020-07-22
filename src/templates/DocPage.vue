<template>
  <Layout>
    <small class="text-green-600 text-center mb-4 text-sm">
      <g-link to="/" class="underline hover:no-underline">
        Pattern Buildings
      </g-link>
      <span class="mx-2">/</span>
      <g-link to="/docs/" class="underline hover:no-underline">
        User Manual
      </g-link>
    </small>
    <h1 class="text-center">{{ $context.title }}</h1>
    <ContentBlock :content="$context.content" />
    <hr class="mb-16" />
    <div class="flex justify-between sm:justify-center items-stretch">
      <g-link
        :to="`/docs/${findDoc('prev') || ''}/`"
        class="btn-outline flex items-center text-green-600"
      >
        <Icon :path="mdiChevronLeft" class="w-6 h-6" />
        <span class="mx-2 hidden sm:inline">Previous</span>
      </g-link>
      <g-link
        to="/docs/"
        class="btn-outline flex-grow sm:flex-grow-0 text-center text-green-600 mx-4"
      >
        <span class="h-8 align-middle">Back to manual</span>
      </g-link>
      <g-link
        :to="`/docs/${findDoc('next') || ''}/`"
        class="btn-fill bg-green-600 flex items-center pl-2"
      >
        <span class="mx-2 hidden sm:inline">Next</span>
        <Icon :path="mdiChevronRight" class="w-6 h-6 text-white" />
      </g-link>
    </div>
    <hr class="mt-16" />
  </Layout>
</template>

<page-query>
  query {
    docs: allDocs(sortBy: "order", order: ASC) {
      edges {
        node {
          fileInfo {
            name
          }
        }
      }
    }
  }
</page-query>

<script>
import ContentBlock from '@/components/ContentBlock.vue';
import Icon from '@/components/Icon';
import { mdiChevronRight, mdiChevronLeft } from '@mdi/js';

export default {
  components: { ContentBlock, Icon },
  metaInfo() {
    return {
      title: `${this.$context.title} | Pattern Buildings`,
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            'Documentation for Pattern Buildings - an open-source industrial building system for mass-customizable buildings',
        },
      ],
    };
  },
  data() {
    return {
      mdiChevronRight,
      mdiChevronLeft,
    };
  },
  methods: {
    findDoc(direction) {
      const currentIndex = this.$page.docs.edges
        .map((doc) => doc.node.fileInfo.name)
        .findIndex((name) => name === this.$context.fileInfo.name);
      const findIndex =
        direction === 'next' ? currentIndex + 1 : currentIndex - 1;
      const findNode = this.$page.docs.edges[findIndex];
      return findNode ? findNode.node.fileInfo.name : undefined;
    },
  },
};
</script>
