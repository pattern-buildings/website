<template>
  <div class="w-full">
    <div
      class="relative flex flex-col justify-end items-start h-64 p-4 overflow-hidden"
    >
      <g-image
        :alt="title ? `${title} - ${subtitle}` : '369 Pattern Buildings'"
        :src="loaded ? cover : ''"
        class="absolute inset-0 w-full h-full object-cover rounded-lg bg-gray-300"
      />
      <h3 class="relative bg-white leading-tight px-2">{{ title }}</h3>
      <p v-if="subtitle" class="relative">
        <span class="bg-white text-sm text-gray-600 px-2">
          {{ subtitle }}
        </span>
      </p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    subtitle: {
      type: String,
      required: false,
      default: '',
    },
    cover: {
      type: String,
      required: true,
      default: '',
    },
  },
  data() {
    return {
      loaded: false,
    };
  },
  mounted() {
    this.loaded = true;
  },
};
</script>
