<template>
  <Layout>
    <div class="flex flex-col sm:flex-row items-center sm:mt-16">
      <div class="text-center mb-16 sm:mb-0 sm:mx-12">
        <h1>{{ $static.metadata.siteName }}</h1>
        <p class="text-gray-600 mt-4">{{ $static.metadata.siteDescription }}</p>
      </div>
      <g-image
        alt="pattern building logo"
        src="~/assets/images/pattern-buildings-features.jpg"
        class="w-full max-w-xs lg:max-w-sm"
      />
    </div>

    <div class="flex flex-col items-center mx-auto my-16">
      <div
        v-for="(feature, i) in features"
        :key="i"
        class="flex flex-col sm:flex-row w-full my-4"
      >
        <h2 class="text-left sm:text-right sm:w-1/2 sm:mr-4">
          {{ feature.name }}
        </h2>
        <p
          v-html="feature.description"
          class="text-gray-600 sm:w-1/2 sm:ml-4"
        />
      </div>
    </div>

    <hr />

    <div class="mx-auto w-48 my-16">
      <form name="test-form" method="POST" data-netlify="true" action="/about">
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
export default {
  metaInfo: {
    title: "Hello, world!"
  },
  computed: {
    features() {
      return this.$page.allSettings.edges[0].node.features;
    }
  }
};
</script>
