<template>
  <Layout>
    <small class="text-blue-600 text-center mb-4 text-sm">
      <g-link to="/" class="underline hover:no-underline">
        Pattern Buildings
      </g-link>
    </small>
    <h1 class="text-center">Become a contributor</h1>
    <Markdown
      :raw="$page.settings.edges[0].node.intro_contributor"
      class="content-block text-center max-w-lg mx-auto"
    />
    <form
      name="become-contributor"
      method="POST"
      data-netlify="true"
      action="/success/"
      class="mx-auto w-full max-w-lg border-4 border-blue-500 rounded-lg p-4 sm:p-8 mb-16"
    >
      <input type="hidden" name="form-name" value="become-contributor" />
      <p>
        <label>
          Name
          <input type="text" name="name" placeholder="Your name" required />
        </label>
      </p>
      <p>
        <label>
          Email
          <input
            type="email"
            name="email"
            placeholder="name@company.com"
            required
          />
        </label>
      </p>
      <p class="">
        <label for="textarea">Message (optional)</label>
        <textarea
          id="message"
          name="message"
          rows="5"
          placeholder="Type here..."
        ></textarea>
      </p>
      <button
        type="submit"
        class="bg-blue-600 block w-full max-w-xs mt-8 mx-auto"
      >
        Send
      </button>
    </form>
    <hr />
  </Layout>
</template>

<page-query>
  query {
    settings: allEngageSettings {
      edges {
        node {
          intro_contributor
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
  metaInfo: {
    title: 'Become a contributor | Pattern Buildings',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'Become a Pattern Buildings contributor',
      },
    ],
  },
};
</script>
