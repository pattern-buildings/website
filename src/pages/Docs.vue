<template>
  <Layout>
    <section id="projects" class="py-8">
      <h1 class="pb-8 text-center">Documentation</h1>
      <p>{{ $page.settings.edges[0].node.intro_docs }}</p>
      <div class="flex flex-col justify-start items-center">
        <g-link
          v-for="doc in $page.docs.edges"
          :key="doc.node.id"
          :to="`/docs/${doc.node.fileInfo.name}`"
          class="my-8"
        >
          <p class="font-bold text-xl text-green-600">{{ doc.node.title }}</p>
        </g-link>
      </div>
      <hr class="mt-16" />
    </section>
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
export default {
  metaInfo: {
    title: 'Projects',
  },
};
</script>