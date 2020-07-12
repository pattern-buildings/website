<template>
  <Layout>
    <section id="projects" class="py-8">
      <h1 class="pb-8 text-center">Documentation</h1>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
        doloremque omnis animi, eligendi magni a voluptatum, vitae, consequuntur
        rerum illum odit fugit assumenda rem dolores inventore iste
        reprehenderit maxime! Iusto.
      </p>
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
  }
</page-query>

<script>
export default {
  metaInfo: {
    title: 'Projects',
  },
};
</script>
