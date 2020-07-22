<template>
  <Layout>
    <small class="text-green-600 text-center mb-4 text-sm">
      <g-link to="/" class="underline hover:no-underline">
        Pattern Buildings
      </g-link>
    </small>
    <h1 class="text-center">User manual</h1>
    <Markdown
      :raw="$page.settings.edges[0].node.intro_docs"
      class="content-block"
    />

    <div
      class="flex flex-col justify-start items-start border-2 border-gray-300 px-4 sm:px-8 sm:py-4 mx-auto"
    >
      <g-link
        v-for="doc in $page.docs.edges"
        :key="doc.node.id"
        :to="`/docs/${doc.node.fileInfo.name}/`"
        :class="
          doc.node.is_subcarticle
            ? 'pl-6 ml-6 py-4 border-l-2 border-gray-300'
            : 'pt-12 pb-6 text-xl'
        "
      >
        <p class="font-bold text-green-600">{{ doc.node.title }}</p>
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
          is_subcarticle
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
