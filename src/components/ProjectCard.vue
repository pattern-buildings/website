<template>
  <div class="flex flex-col sm:flex-row justify-center my-8">
    <div class="w-full h-48 sm:w-1/2 bg-gray-200 rounded-lg" />
    <div class="sm:ml-4 sm:w-1/2">
      <h3>Project name</h3>
      <p>project description</p>
      <p class="text-sm text-gray-600 mt-2">additional project information</p>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: false,
      default:
        'M15 5h2V3h-2m0 18h2v-2h-2M11 5h2V3h-2m8 2h2V3h-2m0 6h2V7h-2m0 14h2v-2h-2m0-6h2v-2h-2m0 6h2v-2h-2M3 5h2V3H3m0 6h2V7H3m0 6h2v-2H3m0 6h2v-2H3m0 6h2v-2H3m8 2h2v-2h-2m-4 2h2v-2H7M7 5h2V3H7v2z',
    },
  },
};
</script>
