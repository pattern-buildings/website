<template>
  <Layout>
    <h1 class="text-center mb-8">{{ $context.title }}</h1>
    <ContentBlock :content="$context.content" />
    <hr class="mb-16" />
    <div class="flex flex-wrap justify-center">
      <g-link to="/docs/" class="btn-outline text-green-600">
        Back to docs
      </g-link>
    </div>
    <hr class="mt-16" />
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
