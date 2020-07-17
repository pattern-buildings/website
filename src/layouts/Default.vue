<template>
  <div class="layout">
    <!-- <div class="flex justify-between fixed top-0 left-0 w-full p-2 z-10">
      <div class="flex items-center cursor-pointer logo" @click="goHome()">
        <div
          class="w-16 h-16 bg-center bg-cover rounded-lg"
          style="background-image: url(https://res.cloudinary.com/patternbuildings/image/upload/v1592836328/pb-logo_v1vqwj.jpg)"
        />
        <p class="text-lg mg bg-white text-gray-600 ml-6 px-2 logo-text">
          Pattern Buildings
        </p>
      </div>
    </div> -->
    <MenuOverlay>
      <Navigation />
    </MenuOverlay>
    <slot />
    <footer class="mt-auto w-full">
      <Navigation />
      <p class="text-sm text-center text-gray-600">
        © Pattern Buildings 2020
      </p>
    </footer>
  </div>
</template>

<script>
import Navigation from '@/components/Navigation.vue';
import MenuOverlay from '@/components/MenuOverlay.vue';

export default {
  components: { Navigation, MenuOverlay },
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
