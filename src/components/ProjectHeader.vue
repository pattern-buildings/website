<template>
  <header
    class="relative flex flex-col justify-end items-start h-64 p-8 overflow-hidden"
  >
    <g-image
      alt="Pattern Buildings"
      :src="cover"
      class="absolute inset-0 w-full h-full object-cover"
    />
    <h1 class="relative bg-white leading-tight px-2">{{ title }}</h1>
    <p v-if="subtitle" class="relative">
      <span class="bg-white text-sm text-gray-600 px-2">
        {{ subtitle }}
      </span>
    </p>
  </header>
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
      required: false,
      default: '',
    },
  },
};
</script>
