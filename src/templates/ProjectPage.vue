<template>
  <Layout>
    <ProjectHeader
      :title="$context.title"
      :subtitle="$context.subtitle"
      :cover="$context.cover"
    />
    <KeyValueList
      :rows="$context.facts"
      class="sm:float-right mt-16 sm:ml-8 mb-8"
    />
    <main>
      <ContentBlock :content="$context.content" />
    </main>
    <hr />
    <section v-if="$context.downloads.length" class="my-16">
      <h2 class="text-center mb-8">Downloads</h2>
      <div class="flex flex-wrap justify-center">
        <g-link
          v-for="(item, i) in $context.downloads"
          :key="i"
          :to="item.file || item.url || '#'"
          class="flex items-center m-4 p-4 block border-2 border-gray-300 border-dotted"
        >
          <Icon :path="getIcon(item.type)" class="w-12 h-12 text-gray-600" />
          <span class="ml-2">{{ item.name }}</span>
        </g-link>
      </div>
      <hr class="mt-16" />
    </section>
    <section class="my-16 text-center">
      <g-link to="/projects" class="btn">See all projects</g-link>
      <hr class="mt-16" />
    </section>
    <footer>
      <Navigation />
    </footer>
  </Layout>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import ContentBlock from '@/components/ContentBlock.vue';
import ProjectHeader from '@/components/ProjectHeader.vue';
import KeyValueList from '@/components/KeyValueList.vue';
import Icon from '@/components/Icon.vue';
import { mdiFilePdf, mdiFileCad, mdiFileDownload } from '@mdi/js';

export default {
  components: { Navigation, ContentBlock, ProjectHeader, KeyValueList, Icon },
  metaInfo() {
    return { title: this.$context.title };
  },
  methods: {
    getIcon(type) {
      switch (type) {
        case 'pdf':
          return mdiFilePdf;
        case 'cad':
          return mdiFileCad;
        default:
          return mdiFileDownload;
      }
    },
  },
};
</script>
