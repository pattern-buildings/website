<template>
  <Layout>
    <header class="flex flex-col sm:flex-row items-center sm:mt-8">
      <div class="text-center mb-8 sm:mb-0 sm:mx-12">
        <h1>{{ $static.metadata.siteName }}</h1>
        <p class="text-gray-600 mt-4">{{ $static.metadata.siteDescription }}</p>
      </div>
      <g-image
        alt="pattern building logo"
        src="~/assets/images/pattern-buildings-features.jpg"
        class="w-full sm:w-1/2 max-w-xs lg:max-w-sm"
      />
    </header>

    <Navigation />

    <hr />
    <main>
      <section id="idea" class="py-16">
        <h2 class="mb-16 text-center">Idea</h2>

        <div class="mb-8">
          <KeyValueList
            :rows="$page.settings.edges[0].node.facts"
            class="sm:float-right sm:ml-8 mb-8"
          />
          <p class="">
            {{ $page.settings.edges[0].node.idea }}
          </p>
          <div class="clear-both" />
        </div>

        <div class="mx-auto mb-16 relative embedded-video">
          <iframe
            src="https://player.cloudinary.com/embed/?public_id=Harmet_v2_compressed_uaig6k&cloud_name=patternbuildings&player%5Bcontrols%5D=true&player%5Bskin%5D=light&player%5Bwidth%5D=640&player%5Bcolors%5D%5Baccent%5D=%23e53333&player%5Bcolors%5D%5Btext%5D=%23666666&player%5Bfloating_when_not_visible%5D=false&player%5Bposter_options%5D%5Btransformation%5D%5Bstart_offset%5D=49&source%5Bsource_types%5D%5B0%5D=mp4"
            allow="autoplay; fullscreen; encrypted-media; picture-in-picture"
            allowfullscreen
            frameborder="0"
            class="xs:rounded-lg xs:shadow-lg absolute w-full h-full"
          />
        </div>

        <div class="flex flex-col items-center mx-auto mt-4 mb-16">
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
            :to="`/projects/${project.node.fileInfo.name}`"
            class="w-full block sm:w-1/2 md:w-1/3 px-2 py-8"
          >
            <ProjectCard
              :title="project.node.title"
              :subtitle="project.node.subtitle"
              :description="project.node.description"
              :cover="project.node.cover"
            />
          </g-link>
        </div>
        <div class="text-center">
          <g-link to="/projects" class="btn bg-red-600"
            >See all projects</g-link
          >
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
            class="w-full block sm:w-1/3 md:w-1/4 px-2 py-8"
          >
            <g-image :src="supporter.logo" class="w-full" />
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
            class="flex flex-col items-center px-4 py-4 hover:bg-gray-300"
          >
            <g-image
              :alt="teamMember.name"
              :src="teamMember.avatar"
              class="w-20 h-20 rounded-full"
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
            class="flex flex-col items-center px-4 py-4 hover:bg-gray-300"
          >
            <g-image
              :alt="contributor.name"
              :src="contributor.avatar"
              class="w-16 h-16 rounded-full"
            />
            <b class="text-center">{{ contributor.name }}</b>
            <small class="text-gray-600">{{
              contributor.responsibility
            }}</small>
          </g-link>
        </div>
        <div class="text-center mt-8">
          <g-link to="/projects" class="btn bg-red-600"
            >Become a contributor</g-link
          >
        </div>
      </section>

      <hr />

      <section id="license" class="py-16">
        <h2 class="pb-8 text-center">License</h2>
        <p v-html="settings.license_description" />
        <div class="text-center mt-8">
          <g-link :to="settings.license_url" class="btn bg-red-600">
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
          description
          cover
          featured
          fileInfo {
            name
          }
        }
      }
    }
  }
</page-query>

<script>
import Navigation from '@/components/Navigation.vue';
import ProjectCard from '@/components/ProjectCard.vue';
import KeyValueList from '@/components/KeyValueList.vue';

export default {
  components: { Navigation, ProjectCard, KeyValueList },
  metaInfo: {
    title: 'Hello, world!',
  },
  computed: {
    settings() {
      return this.$page.settings.edges[0].node;
    },
  },
  mounted() {
    this.scrollToHash();
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
