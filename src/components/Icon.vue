<template>
  <svg viewBox="0 0 24 24" class="icon">
    <path fill="currentColor" :d="path" />
  </svg>
</template>

<script>
export default {
  props: {
    path: {
      type: String,
      required: true,
      default:
        'M15 5h2V3h-2m0 18h2v-2h-2M11 5h2V3h-2m8 2h2V3h-2m0 6h2V7h-2m0 14h2v-2h-2m0-6h2v-2h-2m0 6h2v-2h-2M3 5h2V3H3m0 6h2V7H3m0 6h2v-2H3m0 6h2v-2H3m0 6h2v-2H3m8 2h2v-2h-2m-4 2h2v-2H7M7 5h2V3H7v2z',
    },
  },
};
</script>
