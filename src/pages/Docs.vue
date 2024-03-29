<template>
  <Layout>
    <small class="text-green-600 text-center mb-4 text-sm">
      <g-link to="/" class="underline hover:no-underline">
        369 Pattern Buildings
      </g-link>
    </small>
    <h1 class="text-center">User manual</h1>
    <div class="mx-auto mt-16 relative embedded-video">
      <iframe
        src="https://player.vimeo.com/video/508350698?color=38a169&byline=0&portrait=0"
        frameborder="0"
        allow="autoplay; fullscreen"
        allowfullscreen
        class="xs:rounded-lg xs:shadow-lg absolute w-full h-full"
        title="369 Pattern Building prototypes"
      ></iframe>
    </div>
    <div class="flex flex-col md:flex-row-reverse items-stretch mt-16">
      <div>
        <div class="sticky mb-8 md:ml-8" style="top: 24px;">
          <Markdown
            :raw="$page.settings.edges[0].node.intro_docs"
            class="green-links"
          />
          <g-link
            to="/docs/tutorials/"
            class="btn btn-fill bg-green-600 mx-auto mt-8 block text-center"
          >
            See tutorials
            <span class="inline-block bg-gray-800 text-gray-300 text-xs align-middle ml-2 px-1.5 py-0.5 rounded-full">NEW</span>
          </g-link>
          <g-link
            to="/docs/design/"
            class="btn btn-outline text-green-600 mx-auto mt-4 block text-center"
          >
            Read the manual
          </g-link>
        </div>
      </div>
      <div
        class="flex flex-col justify-start items-start w-full md:w-auto border-2 border-gray-300 px-4 sm:px-8 sm:py-4 mx-auto my-4 flex-shrink-0"
      >
        <g-link
          v-for="doc in $page.docs.edges"
          :key="doc.node.id"
          :to="`/docs/${doc.node.fileInfo.name}/`"
          :class="
            doc.node.is_subcarticle
              ? 'pl-6 ml-6 py-2 border-l-2 border-gray-300'
              : 'pt-4 pb-4 text-xl'
          "
        >
          <p class="font-bold text-green-600">{{ doc.node.title }}</p>
        </g-link>
      </div>
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
      title: 'Documentation | 369 Pattern Buildings',
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            this.$page.settings.edges[0].node.intro_docs
              .substring(0, 150)
              .concat('...') ||
            'Documentation for 369 Pattern Buildings - an open-source industrial building system for mass-customizable buildings',
        },
      ],
    };
  },
};
</script>
