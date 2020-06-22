<template>
  <div class="w-full">
    <div
      class="relative flex flex-col justify-end items-start h-64 p-4 overflow-hidden"
    >
      <g-image
        alt="pattern buildings"
        :src="cover"
        class="absolute inset-0 w-full h-full object-cover"
      />
      <h3 class="relative bg-white leading-tight px-2">{{ title }}</h3>
      <p v-if="subtitle" class="relative bg-white text-sm text-gray-600 px-2">
        {{ subtitle }}
      </p>
    </div>
    <p v-if="description" class="text-center mt-2">{{ description }}</p>
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
    description: {
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
};
</script>
