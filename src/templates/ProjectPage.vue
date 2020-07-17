<template>
  <Layout>
    <ProjectHeader
      :title="$context.title"
      :subtitle="$context.subtitle"
      :cover="$context.cover"
    />
    <main>
      <KeyValueList
        :rows="$context.facts"
        class="sm:float-right mt-16 sm:ml-8 mb-8"
      />
      <ContentBlock :content="$context.content" />
    </main>
    <hr />
    <section v-if="$context.downloads.length" class="my-16">
      <h2 class="text-center mb-8">Downloads</h2>
      <DownloadsBlock
        :downloads="$context.downloads"
        class="flex flex-wrap justify-center"
      />
      <hr class="mt-16" />
    </section>
    <div class="flex flex-wrap justify-center">
      <g-link to="/projects/" class="btn-outline text-red-600"
        >See all projects</g-link
      >
    </div>
    <hr class="mt-16" />
  </Layout>
</template>

<script>
import ContentBlock from '@/components/ContentBlock.vue';
import ProjectHeader from '@/components/ProjectHeader.vue';
import KeyValueList from '@/components/KeyValueList.vue';
import DownloadsBlock from '@/components/DownloadsBlock.vue';

export default {
  components: {
    ContentBlock,
    ProjectHeader,
    KeyValueList,
    DownloadsBlock,
  },
  metaInfo() {
    return {
      title: `${this.$context.title} | Pattern Buildings`,
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            this.$context.excerpt ||
            `${this.$context.title} - a Pattern Buildings project`,
        },
      ],
    };
  },
};
</script>
