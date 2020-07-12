<template>
  <div class="layout">
    <div class="flex justify-between fixed top-0 left-0 w-full p-2 z-10">
      <div class="flex items-center cursor-pointer logo" @click="goHome()">
        <div
          class="w-16 h-16 bg-center bg-cover rounded-lg"
          style="
            background-image: url(https://res.cloudinary.com/patternbuildings/image/upload/v1592836328/pb-logo_v1vqwj.jpg);
          "
        />
        <p class="text-lg mg bg-white text-gray-600 ml-6 px-2 logo-text">
          Pattern Buildings
        </p>
      </div>
    </div>
    <slot />
    <footer class="mt-auto w-full">
      <Navigation />
      <p class="text-sm text-center text-gray-600">
        Pattern Buildings <span class="mx-2">|</span> 2020
      </p>
    </footer>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';

export default {
  components: { Navigation },
  methods: {
    goHome() {
      if (this.$route.path === '/' && !this.$route.hash) {
        window.scrollTo(0, 0);
      } else {
        this.$router.push({ path: '/', hash: '' });
      }
    },
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
a.btn {
  @apply text-white px-4 py-2;
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
