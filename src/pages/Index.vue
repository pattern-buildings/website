<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <g-image
      alt="Example image"
      src="~/assets/images/pattern-buildings-features.jpg"
      width="400"
    />

    <h1>Hello, world!</h1>

    <p>
      Lorem ipsum dolor sit amet, consectetur adipisicing elit. Pariatur
      excepturi labore tempore expedita, et iste tenetur suscipit explicabo!
      Dolores, aperiam non officia eos quod asperiores
    </p>

    <p class="home-links">
      <a href="https://gridsome.org/docs/" target="_blank" rel="noopener"
        >Gridsome Docs</a
      >
      <a
        href="https://github.com/gridsome/gridsome"
        target="_blank"
        rel="noopener"
        >GitHub</a
      >
    </p>
    <div>
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
  </Layout>
</template>

<script>
export default {
  metaInfo: {
    title: "Hello, world!"
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
input {
  @apply border-gray-300 border-2 my-2;
}
button {
  @apply bg-blue-500 text-white p-4;
}
</style>
