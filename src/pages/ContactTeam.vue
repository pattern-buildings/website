<template>
  <Layout>
    <h1 class="text-center">Contact the team</h1>
    <form
      name="test-form"
      method="POST"
      data-netlify="true"
      action="/success"
      class="mx-auto w-48 my-16"
    >
      <input type="hidden" name="form-name" value="test-form" />
      <p>
        <label>Name <input type="text" name="name" /></label>
      </p>
      <p>
        <label>Email <input type="email" name="email" /></label>
      </p>
      <p>
        <button type="submit" class="bg-blue-600 w-full">Send</button>
      </p>
    </form>
    <hr />
  </Layout>
</template>
Become a sponsor
<script>
export default {
  metaInfo: {
    title: 'Contact the team',
  },
};
</script>
