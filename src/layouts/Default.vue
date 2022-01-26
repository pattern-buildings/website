<template>
  <div class="layout">
    <MenuOverlay ref="overlay">
      <Navigation @change="$refs.overlay.visible = false" />
    </MenuOverlay>
    <slot />
    <footer class="mt-auto w-full">
      <Navigation />
      <p class="text-sm text-center text-gray-600">
        © 369 Pattern Buildings 2022
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
