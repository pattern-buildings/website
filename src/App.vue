<template>
  <router-view />
</template>

<static-query>
  query {
    metadata {
      siteName
      siteDescription
    }
  }
</static-query>

<script>
export default {
  metaInfo() {
    return {
      title: this.$static.metadata.siteName,
      meta: [
        {
          key: 'description',
          name: 'description',
          content: this.$static.metadata.siteDescription,
        },
      ],
    };
  },
};
</script>

<style>
body {
  /* prettier-ignore */
  font-family: Open Sans, -apple-system, system-ui, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
  @apply m-0 p-0 leading-normal;
}

h1,
h2,
h3 {
  @apply leading-none;
  font-family: Quantico;
}
h1 {
  @apply text-3xl;
  @screen sm {
    @apply text-5xl;
  }
}
h2 {
  @apply text-3xl;
}
h3 {
  @apply text-2xl;
}

a {
  @apply no-underline;
}
a:hover,
a:focus {
  /* @apply underline font-bold outline-none; */
}

input {
  @apply border-gray-300 border-2 my-2 w-full;
}
button,
a.btn-fill {
  @apply px-4 py-2 rounded border-2 border-transparent text-white;
}
button.btn-outline,
a.btn-outline {
  @apply px-4 py-2 rounded bg-transparent border-current border-2 box-border;
}

article p {
  @apply my-2;
}

article ul {
  @apply my-4 ml-8;
  list-style: initial;
}

article li {
  @apply my-2;
}

article blockquote {
  @apply border-l-4 border-gray-300 text-gray-600 pl-4 italic;
}

article a {
  @apply text-gray-600 font-bold underline;
}
article a:hover {
  @apply no-underline;
}

.layout {
  @apply max-w-4xl min-h-screen flex flex-col justify-start items-stretch mx-auto p-4 pt-20;
  @screen sm {
    @apply px-8;
  }
}

.embedded-video {
  width: 100%;
  height: 244px;
  @screen xs {
    width: 400px;
    height: 226px;
  }
  @screen sm {
    width: 560px;
    height: 316px;
  }
  @screen md {
    width: 690px;
    height: 389px;
  }
  @screen lg {
    width: 820px;
    height: 462px;
  }
}
.embedded-video iframe {
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo .logo-text {
  opacity: 0;
  transition: opacity 0.5s;
}
.logo:hover .logo-text {
  opacity: 1;
}
</style>
