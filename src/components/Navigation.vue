<template>
  <nav class="nav-container">
    <div class="nav-column text-red-500">
      <h3 class="nav-head">Discover</h3>
      <div v-for="(item, i) in discover" :key="i" class="nav-item">
        <Icon :path="item.icon" />
        <g-link :to="item.url">{{ item.title }}</g-link>
      </div>
    </div>

    <div class="nav-column text-green-500">
      <h3 class="nav-head">Learn</h3>
      <div v-for="(item, i) in learn" :key="i" class="nav-item">
        <Icon :path="item.icon" />
        <g-link :to="item.url">{{ item.title }}</g-link>
      </div>
    </div>

    <div class="nav-column text-blue-500">
      <h3 class="nav-head">Engage</h3>
      <div v-for="(item, i) in engage" :key="i" class="nav-item">
        <Icon :path="item.icon" />
        <g-link :to="item.url">{{ item.title }}</g-link>
      </div>
    </div>
  </nav>
</template>

<script>
import Icon from '@/components/Icon';
import {
  mdiInformationOutline,
  mdiCardsVariant,
  mdiCommentQuestionOutline,
  mdiWarehouse,
  mdiAccountSupervisorOutline,
  mdiLicense,
  mdiCubeOutline,
  mdiDrawing,
  mdiFileDocumentOutline,
  mdiDownloadOutline,
  mdiEmailOutline,
} from '@mdi/js';

export default {
  components: {
    Icon,
  },
  data() {
    return {
      discover: [
        { title: 'Idea', url: '#idea', icon: mdiInformationOutline },
        { title: 'Projects', url: '#projects', icon: mdiCardsVariant },
        { title: 'Supproters', url: '#supporters', icon: mdiWarehouse },
        { title: 'Team', url: '#team', icon: mdiAccountSupervisorOutline },
        { title: 'License', url: '#license', icon: mdiLicense },
        { title: 'FAQ', url: '#faq', icon: mdiCommentQuestionOutline },
      ],

      learn: [
        { title: 'Concept', url: '/concept', icon: mdiCubeOutline },
        { title: 'Design', url: '/design', icon: mdiDrawing },
        {
          title: 'Documentation',
          url: '/documentation',
          icon: mdiFileDocumentOutline,
        },
      ],

      engage: [
        { title: 'Downloads', url: '/downloads', icon: mdiDownloadOutline },
        { title: 'Get in touch', url: '/contact', icon: mdiEmailOutline },
      ],
    };
  },
};
</script>

<style>
.nav-container {
  @apply flex flex-col justify-center items-stretch my-16;
  @screen sm {
    @apply flex-row;
  }
}
.nav-column {
  @apply w-full my-6;
  @screen sm {
    @apply mx-6 my-0;
  }
}
.nav-column:focus {
  @apply shadow-lg;
}
.nav-head {
  @apply border-b-4 border-current text-3xl mb-2 pb-2;
}
.nav-item {
  @apply flex my-3;
  @screen sm {
    @apply my-4;
  }
}
.nav-item .icon {
  @apply mr-4 w-6 h-6 inline-block;
}
.nav-item a {
  @apply text-lg;
}
</style>
