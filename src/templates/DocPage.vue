<template>
  <Layout>
    <h1 class="text-center mb-8">{{ $context.title }}</h1>
    <div v-html="$context.content" />
  </Layout>
</template>

<script>
export default {
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
