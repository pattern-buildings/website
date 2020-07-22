<template>
  <Layout>
    <small class="text-red-600 text-center mb-4 text-sm">
      <g-link to="/" class="underline hover:no-underline">
        Pattern Buildings
      </g-link>
      <span class="mx-2">/</span>
      <g-link to="/projects/" class="underline hover:no-underline">
        Projects
      </g-link>
    </small>
    <ProjectHeader
      :title="$context.title"
      :subtitle="$context.subtitle"
      :cover="$context.cover"
    />
    <main>
      <div class="sm:float-right mt-16 mx-auto sm:ml-8 mb-8 max-w-xs">
        <KeyValueList :rows="$context.facts" class="w-full" />
        <g-link
          v-if="$context.cta && $context.cta.url && $context.cta.label"
          :to="$context.cta.url"
          class="btn-fill block text-center bg-red-600 mt-8"
        >
          {{ $context.cta.label }}
        </g-link>
      </div>
      <ContentBlock :content="$context.content" />
    </main>
    <hr v-if="$context.downloads.length" />
    <section v-if="$context.downloads.length" class="my-16">
      <h2 class="text-center mb-8">Downloads</h2>
      <DownloadsBlock
        :downloads="$context.downloads"
        class="flex flex-wrap justify-center"
      />
    </section>
    <hr class="my-16" />
    <div class="flex flex-wrap justify-center">
      <g-link to="/projects/" class="btn-outline text-red-600">
        See all projects
      </g-link>
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
