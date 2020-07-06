<template>
  <ul v-if="rows.length" class="key-value-list">
    <li v-for="(row, i) in rows" :key="i" class="key-value-list-item">
      <span style="min-width: 25%;">{{ row.key }}</span>
      <b class="ml-4 text-right">{{ row.value }}</b>
    </li>
  </ul>
</template>

<script>
export default {
  props: {
    rows: {
      type: Array,
      required: true,
    },
  },
};
</script>

<style>
.key-value-list {
  @apply text-sm text-gray-600 px-4 border-2;
  @screen sm {
    @apply w-2/5;
  }
}
.key-value-list-item {
  @apply flex justify-between py-4;
}
.key-value-list-item:not(:last-child) {
  @apply border-b border-gray-200;
}
</style>
