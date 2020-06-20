<template>
  <div class="layout">
    <slot />
  </div>
</template>

<static-query>
query {
  metadata {
    siteName
  }
}
</static-query>

<style>
body {
  font-family: Open Sans, -apple-system, system-ui, BlinkMacSystemFont,
    "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif;
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
  @apply underline font-bold outline-none;
}

input {
  @apply border-gray-300 border-2 my-2 w-full;
}
button {
  @apply bg-blue-600 text-white px-4 py-2;
}

.layout {
  @apply max-w-4xl mx-auto p-8;
}

.embedded-video {
  width: 100%;
  height: 226px;
  @screen xs {
    width: 400px;
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
</style>
