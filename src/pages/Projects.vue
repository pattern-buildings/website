<template>
  <Layout>
    <small class="text-red-600 text-center mb-4 text-sm">
      <g-link to="/" class="underline hover:no-underline">
        Pattern Buildings
      </g-link>
    </small>
    <h1 class="text-center">Projects</h1>
    <Markdown
      :raw="$page.settings.edges[0].node.intro_projects"
      class="content-block"
    />
    <div>
      <g-link
        v-for="project in $page.projects.edges"
        :key="project.node.id"
        :to="`/projects/${project.node.fileInfo.name}/`"
        class="w-full block my-16"
      >
        <ProjectCard
          :title="project.node.title"
          :subtitle="project.node.subtitle"
          :cover="project.node.cover"
        />
      </g-link>
    </div>
    <hr class="mt-16" />
  </Layout>
</template>

<page-query>
  query {
    projects: allProjects(sortBy: "order", order: ASC) {
      edges {
        node {
          id
          title
          subtitle
          cover
          fileInfo {
            name
          }
        }
      }
    }
    settings: allDiscoverSettings {
      edges {
        node {
          intro_projects
        }
      }
    }
  }
</page-query>

<script>
import ProjectCard from '@/components/ProjectCard.vue';
import Markdown from '@/components/Markdown.vue';

export default {
  components: { ProjectCard, Markdown },
  computed: {
    q() {
      return 'q';
    },
  },
  metaInfo() {
    return {
      title: 'Projects | Pattern Buildings',
      meta: [
        {
          key: 'description',
          name: 'description',
          content:
            this?.$page?.settings?.edges[0]?.node?.intro_projects
              .substring(0, 150)
              .concat('...') || 'List of Pattern Buildings projects',
        },
      ],
    };
  },
};
</script>
