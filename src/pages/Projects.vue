<template>
  <Layout>
    <section id="projects" class="py-8">
      <h1 class="pb-8 text-center">Projects</h1>
      <p>{{ $page.settings.edges[0].node.intro_projects }}</p>
      <div>
        <g-link
          v-for="project in $page.projects.edges"
          :key="project.node.id"
          :to="`/projects/${project.node.fileInfo.name}`"
          class="w-full block my-16"
        >
          <ProjectCard
            :title="project.node.title"
            :subtitle="project.node.subtitle"
            :description="project.node.description"
            :cover="project.node.cover"
          />
        </g-link>
      </div>
      <hr class="mt-16" />
    </section>
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
          description
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

export default {
  components: { ProjectCard },
  metaInfo: {
    title: 'Projects | Pattern Buildings',
    meta: [
      {
        key: 'description',
        name: 'description',
        content: 'List of Pattern Buildings projects',
      },
    ],
  },
};
</script>
