<template>
  <Layout>
    <section id="projects" class="py-8">
      <h1 class="pb-8 text-center">Downloads</h1>
      <p>{{ $page.settings.edges[0].node.intro_downloads }}</p>
      <DownloadsBlock
        :downloads="downloads"
        class="flex flex-wrap justify-center my-16"
      />
      <hr />
    </section>
  </Layout>
</template>

<page-query>
  query {
    downloads: allDownloads(sortBy: "order", order: ASC) {
      edges {
        node {
          id
          title
          type
          file
          url
        }
      }
    }
    settings: allEngageSettings {
      edges {
        node {
          intro_downloads
        }
      }
    }
  }
</page-query>

<script>
import DownloadsBlock from '@/components/DownloadsBlock.vue';

export default {
  components: {
    DownloadsBlock,
  },
  metaInfo: {
    title: 'Downloads | Pattern Buildings',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'List of files to download from Pattern Buildings',
      },
    ],
  },
  computed: {
    downloads() {
      return this.$page.downloads.edges.map((d) => d.node);
    },
  },
};
</script>
