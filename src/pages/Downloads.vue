<template>
  <Layout>
    <small class="text-blue-600 text-center mb-4 text-sm">
      <g-link to="/" class="underline hover:no-underline">
        369 Pattern Buildings
      </g-link>
    </small>
    <h1 class="text-center">Downloads</h1>
    <Markdown
      :raw="$page.settings.edges[0].node.intro_downloads"
      class="content-block"
    />

    <DownloadsBlock :downloads="downloads" class="my-16" />
    <hr />
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
import Markdown from '@/components/Markdown.vue';

export default {
  components: {
    DownloadsBlock,
    Markdown,
  },
  metaInfo() {
    return {
      title: 'Downloads | 369 Pattern Buildings',
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            this.$page.settings.edges[0].node.intro_downloads
              .substring(0, 150)
              .concat('...') ||
            'List of files to download from 369 Pattern Buildings',
        },
      ],
    };
  },
  computed: {
    downloads() {
      return this.$page.downloads.edges.map((d) => d.node);
    },
  },
};
</script>
