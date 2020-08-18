<template>
  <nav class="nav-container">
    <div class="nav-column text-red-500">
      <h3 class="nav-head">Discover</h3>
      <div v-if="$route.fullPath !== '/'" class="nav-item text-red-600">
        <Icon :path="mdiHomeOutline" />
        <g-link to="/">Homepage</g-link>
      </div>
      <div
        v-for="(item, i) in discover"
        :key="i"
        class="nav-item"
        :class="item.url === $route.fullPath ? 'text-red-300' : 'text-red-600'"
      >
        <Icon :path="item.icon" />
        <g-link :to="item.url" @click.native="$emit('change')">
          {{ item.title }}
        </g-link>
      </div>
    </div>

    <div class="nav-column text-green-500">
      <h3 class="nav-head">Learn</h3>
      <div
        v-for="(item, i) in learn"
        :key="i"
        class="nav-item"
        :class="
          item.url === $route.fullPath ? 'text-green-300' : 'text-green-600'
        "
      >
        <Icon :path="item.icon" />
        <g-link :to="item.url">{{ item.title }}</g-link>
      </div>
    </div>

    <div class="nav-column text-blue-500">
      <h3 class="nav-head">Engage</h3>
      <div
        v-for="(item, i) in engage"
        :key="i"
        class="nav-item"
        :class="
          item.url === $route.fullPath ? 'text-blue-300' : 'text-blue-600'
        "
      >
        <Icon :path="item.icon" />
        <g-link :to="item.url">{{ item.title }}</g-link>
      </div>
    </div>
  </nav>
</template>

<static-query>
query {
  navigation: allNavigation {
    edges {
      node {
        discover {
          title
          url
          icon
          hidden
        }
        learn {
          title
          url
          icon
          hidden
        }
        engage {
          title
          url
          icon
          hidden
        }
      }
    }
  }
}
</static-query>

<script>
import Icon from '@/components/Icon';
import {
  mdiHomeOutline,
  mdiInformationOutline,
  mdiCardsVariant,
  mdiHeartOutline,
  mdiAccountMultipleOutline,
  mdiLicense,
  mdiFileDocumentOutline,
  mdiCubeOutline,
  mdiDrawing,
  mdiCommentQuestionOutline,
  mdiHeartPlusOutline,
  mdiAccountPlusOutline,
  mdiEmailOutline,
  mdiDownloadOutline,
  mdiTools,
} from '@mdi/js';

const iconList = {
  mdiHomeOutline,
  mdiInformationOutline,
  mdiCardsVariant,
  mdiHeartOutline,
  mdiAccountMultipleOutline,
  mdiLicense,
  mdiFileDocumentOutline,
  mdiCubeOutline,
  mdiDrawing,
  mdiCommentQuestionOutline,
  mdiHeartPlusOutline,
  mdiAccountPlusOutline,
  mdiEmailOutline,
  mdiDownloadOutline,
  mdiTools,
};

export default {
  components: {
    Icon,
  },
  data() {
    return {
      discover: [],
      learn: [],
      engage: [],
      mdiHomeOutline,
    };
  },
  created() {
    this.$static.navigation.edges[0].node.discover.forEach(
      async ({ title, url, icon, hidden }) => {
        const fetchedIcon = await this.getIcon(icon);
        if (!hidden) this.discover.push({ title, url, icon: fetchedIcon });
      }
    );
    this.$static.navigation.edges[0].node.learn.forEach(
      async ({ title, url, icon, hidden }) => {
        const fetchedIcon = await this.getIcon(icon);
        if (!hidden) this.learn.push({ title, url, icon: fetchedIcon });
      }
    );
    this.$static.navigation.edges[0].node.engage.forEach(
      async ({ title, url, icon, hidden }) => {
        const fetchedIcon = await this.getIcon(icon);
        if (!hidden) this.engage.push({ title, url, icon: fetchedIcon });
      }
    );
  },
  methods: {
    async getIcon(handle) {
      // const { [handle]: fetchedIcon } = await import(
      //   /* webpackChunkName: "mdi" */ `@mdi/js`
      // );
      // return fetchedIcon;
      return iconList[handle];
    },
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
  @apply mr-4 w-6 h-6 inline-block flex-shrink-0;
}
.nav-item a {
  @apply text-lg;
}
</style>
