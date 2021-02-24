<template>
  <Layout>
    <header class="flex flex-col sm:flex-row items-center sm:mb-8">
      <div class="text-center mb-8 sm:mb-0 sm:mx-12">
        <h1>{{ $static.metadata.siteName }}</h1>
        <p class="text-gray-600 mt-4">{{ $static.metadata.siteDescription }}</p>
        <div class="my-8 flex flex-wrap justify-center">
          <g-link
            to="/docs/"
            class="btn-fill bg-green-600 m-2 flex-grow flex-shrink-0 flex-1 whitespace-nowrap"
          >
            User Manual
          </g-link>
          <g-link
            to="/projects/"
            class="btn-outline text-red-600 m-2 flex-grow flex-shrink-0 flex-1 whitespace-nowrap"
          >
            Projects
          </g-link>
        </div>
      </div>
      <g-image
        alt="369 Pattern Buildings logo"
        src="~/assets/images/pattern-buildings-features.jpg"
        :immediate="true"
        width="600"
        quality="40"
        class="w-full sm:w-1/2 max-w-xs"
      />
    </header>

    <div
      v-if="!$page.banner.hide"
      class="my-8 border-gray-300 border-2 border-dashed p-8 flex justify-around items-center flex-wrap relative"
    >
      <div class="my-4 text-center max-w-xs">
        <h3>
          {{ $page.banner.title }}
        </h3>
        <p class="my-2 text-gray-600">
          {{ $page.banner.subtitle }}
        </p>
        <a :href="$page.banner.url" target="_blank">
          <button class="btn-outline text-blue-600 my-4">
            {{ $page.banner.cta }}
          </button>
        </a>
      </div>
      <g-image :src="$page.banner.image" class="h-32 object-contain" />
      <span
        class="absolute bottom-0 right-0 -mb-8 text-gray-600 text-sm cursor-pointer"
        @click="$page.banner.hide = !$page.banner.hide"
      >
        close
      </span>
    </div>

    <hr v-else />

    <main>
      <section id="idea" class="py-16">
        <div class="mb-8">
          <KeyValueList
            :rows="$page.settings.edges[0].node.facts"
            class="sm:float-right sm:ml-8 mb-8"
          />
          <Markdown :raw="$page.settings.edges[0].node.idea" />
          <div class="clear-both" />
        </div>

        <div v-if="loaded" class="mx-auto mb-16 relative embedded-video">
          <iframe
            src="https://player.vimeo.com/video/440289145"
            frameborder="0"
            allow="autoplay; fullscreen"
            allowfullscreen
            class="xs:rounded-lg xs:shadow-lg absolute w-full h-full"
            title="Video about 369 Pattern Buildings"
          ></iframe>
        </div>

        <div class="flex flex-col items-center mx-auto mt-4">
          <h2 class="my-8 text-center">Features</h2>
          <hr class="mb-8 w-full" />

          <div
            v-for="(feature, i) in settings.features"
            :key="i"
            class="flex flex-col sm:flex-row w-full my-8"
          >
            <h3 class="text-left sm:text-right sm:w-1/2 mb-2 sm:mb-0 sm:mr-4">
              {{ feature.name }}
            </h3>
            <p
              class="text-gray-600 text-sm sm:w-1/2 sm:ml-4"
              v-html="feature.description"
            />
          </div>
        </div>
      </section>

      <hr />

      <section id="projects" class="py-16">
        <h2 class="pb-8 text-center">Projects</h2>
        <div class="flex flex-wrap justify-center items-stretch">
          <g-link
            v-for="project in $page.projects.edges"
            :key="project.node.id"
            :to="`/projects/${project.node.fileInfo.name}/`"
            class="w-full block sm:w-1/2 md:w-1/3 px-2 py-8"
          >
            <ProjectCard
              :title="project.node.title"
              :subtitle="project.node.subtitle"
              :cover="project.node.cover"
            />
          </g-link>
        </div>
        <div class="flex justify-center mt-8">
          <g-link to="/projects/" class="btn-fill bg-red-600">
            See all projects
          </g-link>
        </div>
      </section>

      <hr />

      <section id="supporters" class="py-16">
        <h2 class="pb-8 text-center">Supporters</h2>
        <div class="flex flex-wrap justify-center items-stretch">
          <g-link
            v-for="(supporter, i) in settings.supporters"
            :key="i"
            :to="supporter.url"
            class="w-full flex flex-col sm:w-1/3 md:w-1/4 max-w-xs p-2 my-8"
            :class="
              supporter.url
                ? 'hover:bg-gray-300'
                : 'pointer-none cursor-default'
            "
          >
            <g-image
              :src="loaded ? supporter.logo : ''"
              alt="369 Pattern Buildings supporter"
              class="w-full my-auto"
            />
          </g-link>
        </div>
        <div class="text-center text-sm text-gray-600 mt-4">
          <g-link
            to="/become-supporter"
            class="text-blue-600 underline font-bold"
          >
            Fill this form if you want to support the project
          </g-link>
        </div>
      </section>

      <hr />

      <section id="team" class="py-16">
        <h2 class="pb-8 text-center">Core team</h2>
        <div class="flex flex-wrap justify-center items-stretch">
          <g-link
            v-for="(teamMember, i) in settings.core_team"
            :key="i"
            :to="teamMember.url"
            class="flex flex-col items-center px-4 py-4"
            :class="
              teamMember.url
                ? 'hover:bg-gray-300'
                : 'pointer-none cursor-default'
            "
          >
            <g-image
              :alt="`${teamMember.name} - 369 Pattern Buildings team member`"
              :src="loaded ? teamMember.avatar : ''"
              class="w-20 h-20 rounded-full bg-gray-300 object-cover"
            />
            <b class="text-center">{{ teamMember.name }}</b>
            <small class="text-gray-600">{{ teamMember.responsibility }}</small>
          </g-link>
        </div>
        <h2 class="mt-16 mb-8 text-center">Contributors</h2>
        <div class="flex flex-wrap justify-center items-stretch">
          <g-link
            v-for="(contributor, i) in settings.contributors"
            :key="i"
            :to="contributor.url"
            class="flex flex-col items-center px-4 py-4"
            :class="
              contributor.url
                ? 'hover:bg-gray-300'
                : 'pointer-none cursor-default'
            "
          >
            <g-image
              :alt="`${contributor.name} - 369 Pattern Buildings contributor`"
              :src="loaded ? contributor.avatar : ''"
              class="w-20 h-20 rounded-full bg-gray-300 object-cover"
            />
            <b class="text-center">{{ contributor.name }}</b>
            <small class="text-gray-600">{{
              contributor.responsibility
            }}</small>
          </g-link>
        </div>
        <div class="text-center mt-8">
          <g-link to="/become-contributor/" class="btn-fill bg-blue-600">
            Become a contributor
          </g-link>
        </div>
      </section>

      <hr />

      <section id="license" class="py-16">
        <h2 class="pb-8 text-center">License</h2>
        <Markdown :raw="settings.license_description" />
        <div class="text-center mt-8">
          <g-link :to="settings.license_url" class="btn-fill bg-red-600">
            View license
          </g-link>
        </div>
      </section>

      <hr />
    </main>
  </Layout>
</template>

<static-query>
query {
  metadata {
    siteName
    siteDescription
  }
}
</static-query>

<page-query>
query {
  settings: allDiscoverSettings {
    edges {
      node {
        idea
        facts {
          key
          value
        }
        features {
          name
          description
        }
        supporters {
          logo
          url
        }
        core_team {
          name
          avatar
          responsibility
          url
        }
        contributors {
          name
          avatar
          responsibility
          url
        }
        license_description
        license_url
      }
    }
  }
  projects: allProjects(
    filter: { featured: { eq: true } }
    sortBy: "order"
    order: ASC
  ) {
    edges {
      node {
        title
        subtitle
        cover
        featured
        fileInfo {
          name
        }
      }
    }
  }
  banner: bannerSettings(path: "/data/settings/banner-settings/") {
    title
    subtitle
    cta
    url
    hide
    image
  }
}
</page-query>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import KeyValueList from '@/components/KeyValueList.vue';
import Markdown from '@/components/Markdown.vue';

export default {
  components: { ProjectCard, KeyValueList, Markdown },
  data() {
    return {
      loaded: false,
    };
  },
  computed: {
    settings() {
      return this.$page.settings.edges[0].node;
    },
  },
  mounted() {
    this.scrollToHash();
    this.loaded = true;
  },
  methods: {
    scrollToHash() {
      const anchor = this.$route.hash.substr(1);
      if (!anchor) return;
      const element = document.getElementById(anchor);
      if (!element) return;
      window.scrollTo(0, element.offsetTop);
    },
  },
};
</script>

<style></style>
