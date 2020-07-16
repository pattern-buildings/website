<template>
  <Layout>
    <h1 class="text-center mb-8">{{ $context.title }}</h1>
    <ContentBlock :content="$context.content" />
  </Layout>
</template>

<script>
import ContentBlock from '@/components/ContentBlock.vue';

export default {
  components: { ContentBlock },
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
};
</script>
