<template>
  <div>
    <g-link
      v-for="(item, i) in downloads"
      :key="i"
      :to="item.file || item.url || '#'"
      class="flex items-center m-4 p-4 border-2 border-gray-300 border-dotted"
    >
      <Icon :path="detectIcon(item.type)" class="w-12 h-12 text-gray-600" />
      <span class="ml-2">{{ item.title }}</span>
    </g-link>
  </div>
</template>

<script>
import Icon from '@/components/Icon';
import { mdiFilePdf, mdiFileCad, mdiFileDownload } from '@mdi/js';

export default {
  components: {
    Icon,
  },
  props: {
    downloads: {
      type: Array,
      required: true,
    },
  },
  methods: {
    detectIcon(type) {
      switch (type) {
        case 'pdf':
          return mdiFilePdf;
        case 'cad':
          return mdiFileCad;
        default:
          return mdiFileDownload;
      }
    },
  },
};
</script>
