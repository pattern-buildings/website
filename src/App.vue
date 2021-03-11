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
        { name: 'twitter:card', content: 'summary' },
        { name: 'twitter:title', content: this.$static.metadata.siteName },
        {
          name: 'twitter:description',
          content: this.$static.metadata.siteDescription,
        },
        {
          name: 'twitter:image',
          content:
            'https://patternbuildings.com/assets/static/pattern-buildings-features.9dcfaf0.0e7c5732b6131f664cc16be44165b704.jpg',
        },
        { property: 'og:title', content: this.$static.metadata.siteName },
        {
          property: 'og:site_name',
          content: this.$static.metadata.siteName,
        },
        { property: 'og:type', content: 'website' },
        {
          property: 'og:image',
          content:
            'https://patternbuildings.com/assets/static/pattern-buildings-features.9dcfaf0.0e7c5732b6131f664cc16be44165b704.jpg',
        },
        {
          property: 'og:description',
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
  @apply text-3xl sm:text-5xl;
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

input,
textarea {
  @apply border-gray-300 border-2 my-2 p-2 w-full text-black text-base font-bold;
}
button,
a.btn-fill {
  @apply px-4 py-2 rounded border-2 border-transparent text-white font-bold;
}
button.btn-outline,
a.btn-outline {
  @apply px-4 py-2 rounded bg-transparent font-bold border-current border-2 box-border;
}
label {
  @apply text-sm text-gray-600;
}

article p {
  @apply my-2;
}

article ul {
  @apply my-4 ml-8;
  list-style: initial;
}

article ol {
  @apply my-4 ml-8;
  list-style: decimal;
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
.green-links a {
  @apply text-green-600;
}

article figure {
  @apply my-8 md:my-16;
}

article figure figcaption {
  @apply block w-full max-w-xl mx-auto text-right text-sm text-gray-600 italic pb-2;
}

.layout {
  @apply max-w-4xl min-h-screen flex flex-col justify-start items-stretch mx-auto p-4 pt-24 sm:px-8;
}

.embedded-video {
  width: 100%;
  height: 244px;
}
@media (min-width: 479px) {
  .embedded-video {
    width: 400px;
    height: 226px;
  }
}
@media (min-width: 640px) {
  .embedded-video {
    width: 560px;
    height: 316px;
  }
}
@media (min-width: 768px) {
  .embedded-video {
    width: 690px;
    height: 389px;
  }
}
@media (min-width: 1024px) {
  .embedded-video {
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

.content-block {
  @apply my-8 leading-loose;
}
.content-block p {
  @apply my-8;
}
.content-block h1,
.content-block h2,
.content-block h3,
.content-block h4,
.content-block h5,
.content-block h6 {
  @apply mt-16;
}
.content-block img {
  @apply w-full max-w-xl mx-auto;
}
</style>
