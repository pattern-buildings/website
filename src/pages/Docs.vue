<template>
  <Layout>
    <h1 class="text-center">User manual</h1>
    <Markdown
      :raw="$page.settings.edges[0].node.intro_docs"
      class="content-block"
    />

    <div class="flex flex-col justify-start items-center">
      <g-link
        v-for="doc in $page.docs.edges"
        :key="doc.node.id"
        :to="`/docs/${doc.node.fileInfo.name}/`"
        class="my-8"
      >
        <p class="font-bold text-xl text-green-600">{{ doc.node.title }}</p>
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
          id
          title
          fileInfo {
            name
          }
        }
      }
    }
    settings: allLearnSettings {
      edges {
        node {
          intro_docs
        }
      }
    }
  }
</page-query>

<script>
import Markdown from '@/components/Markdown.vue';

export default {
  components: { Markdown },
  metaInfo() {
    return {
      title: 'Documentation | Pattern Buildings',
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            this.$page.settings.edges[0].node.intro_docs
              .substring(0, 150)
              .concat('...') ||
            'Documentation for Pattern Buildings - an open-source industrial building system for mass-customizable buildings',
        },
      ],
    };
  },
};
</script>
