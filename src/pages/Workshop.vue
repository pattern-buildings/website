<template>
  <Layout>
    <small class="text-green-600 text-center mb-4 text-sm">
      <g-link to="/" class="underline hover:no-underline">
        369 Pattern Buildings
      </g-link>
    </small>
    <h1 class="text-center">Workshop</h1>
    <Markdown
      :raw="$page.settings.edges[0].node.content"
      class="content-block"
    />
    <p>test</p>
    <p>
      <iframe
        id="configurator"
        src="https://configurator.rossi.creatomus.com/project/tallinnamaja"
        frameborder="0"
        class="w-full"
        style="height: 75vh;"
      ></iframe>
    </p>
    <hr />
  </Layout>
</template>

<page-query>
query {
  settings: allWorkshopSettings {
    edges {
      node {
        content
      }
    }
  }
}
</page-query>

<script>
import Markdown from '@/components/Markdown.vue';

export default {
  components: {
    Markdown,
  },
  metaInfo() {
    return {
      title: 'Workshop | 369 Pattern Buildings',
      meta: [
        {
          key: 'description',
          name: 'description',
          content: 'Workshop for 369 Pattern Buildings',
        },
      ],
    };
  },
};
</script>
