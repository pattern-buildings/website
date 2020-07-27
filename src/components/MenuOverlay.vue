<template>
  <div>
    <button
      class="fixed top-0 left-0 m-4 z-30 bg-white text-black border-2 border-gray-300 rounded-lg"
      name="Menu"
      @click="visible = !visible"
    >
      <Icon :path="visible ? mdiClose : mdiMenu" class="w-8 h-8" />
    </button>
    <transition name="menu-fade">
      <div
        v-if="visible"
        class="fixed inset-0 z-20 p-2 shadow-xl bg-white overflow-x-auto flex flex-col items-center"
      >
        <div class="my-auto">
          <slot />
        </div>
      </div>
    </transition>
  </div>
</template>

<script>
import Icon from '@/components/Icon';
import { mdiMenu, mdiClose } from '@mdi/js';

export default {
  components: { Icon },
  data() {
    return {
      visible: false,
      mdiMenu,
      mdiClose,
    };
  },
};
</script>

<style>
.menu-fade-enter-active,
.menu-fade-leave-active {
  transition: opacity 0.3s, transform 0.2s;
}
.menu-fade-enter,
.menu-fade-leave-to {
  opacity: 0;
  transform: translateY(-30px);
}
</style>
