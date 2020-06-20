<template>
  <Layout>
    <div class="flex flex-col sm:flex-row items-center sm:mt-8">
      <div class="text-center mb-8 sm:mb-0 sm:mx-12">
        <h1>{{ $static.metadata.siteName }}</h1>
        <p class="text-gray-600 mt-4">{{ $static.metadata.siteDescription }}</p>
      </div>
      <g-image
        alt="pattern building logo"
        src="~/assets/images/pattern-buildings-features.jpg"
        class="w-full sm:w-1/2 max-w-xs lg:max-w-sm"
      />
    </div>

    <Navigation />

    <main>
      <hr />

      <section id="idea" class="py-8">
        <h2 class="my-8 text-center">Idea</h2>
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
            v-for="(feature, i) in features"
            :key="i"
            class="flex flex-col sm:flex-row w-full my-8"
          >
            <h3 class="text-left sm:text-right sm:w-1/2 mb-2 sm:mb-0 sm:mr-4">
              {{ feature.name }}
            </h3>
            <p
              v-html="feature.description"
              class="text-gray-600 text-sm sm:w-1/2 sm:ml-4"
            />
          </div>
        </div>
      </section>

      <hr />

      <section id="projects" class="py-8">
        <h2 class="pb-8 text-center">Projects</h2>
        <p class="max-w-sm mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Error
          doloremque omnis animi, eligendi magni a voluptatum, vitae,
          consequuntur rerum illum odit fugit assumenda rem dolores inventore
          iste reprehenderit maxime! Iusto.
        </p>
        <div class="w-64 h-48 bg-gray-200 rounded-lg mx-auto my-4" />
        <div class="w-64 h-48 bg-gray-200 rounded-lg mx-auto my-4" />
        <div class="w-64 h-48 bg-gray-200 rounded-lg mx-auto my-4" />
      </section>

      <hr />

      <section class="py-8">
        <h2 class="text-center my-8">Get in touch</h2>

        <div class="mx-auto w-48 mb-16">
          <form
            name="test-form"
            method="POST"
            data-netlify="true"
            action="/about"
          >
            <input type="hidden" name="form-name" value="test-form" />
            <p>
              <label>Name <input type="text" name="name"/></label>
            </p>
            <p>
              <label>Email <input type="email" name="email"/></label>
            </p>
            <p>
              <button type="submit">Send</button>
            </p>
          </form>
        </div>

        <a
          href="https://res.cloudinary.com/patternbuildings/image/upload/v1592471977/Pattern_Buildings_Guide_gjvdkx.pdf"
          target="_blank"
          class="text-blue-600 w-full block text-center"
          >Download guide (PDF, 9.88 MB)</a
        >
      </section>
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
  allSettings {
    edges {
      node {
        features {
          name
          description
        }
      }
    }
  }
}
</page-query>

<script>
import Navigation from "@/components/Navigation.vue";

export default {
  components: { Navigation },
  metaInfo: {
    title: "Hello, world!"
  },
  computed: {
    features() {
      return this.$page.allSettings.edges[0].node.features;
    }
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
    }
  }
};
</script>

<style>
</style>
