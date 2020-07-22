// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = function (api) {
  // eslint-disable-next-line no-unused-vars
  api.loadSource(({ addCollection }) => {
    // Use the Data Store API here: https://gridsome.org/docs/data-store-api/
  });

  api.createPages(async ({ graphql, createPage }) => {
    // Use the Pages API here: https://gridsome.org/docs/pages-api/
    const { data } = await graphql(`
      {
        allProjects {
          edges {
            node {
              id
              title
              subtitle
              cover
              facts {
                value
                key
              }
              cta {
                label
                url
              }
              content
              excerpt
              downloads {
                title
                type
                file
                url
              }
              fileInfo {
                name
              }
            }
          }
        }

        allDocs {
          edges {
            node {
              id
              title
              content
              fileInfo {
                name
              }
            }
          }
        }
      }
    `);

    if (!data) return;

    data.allProjects.edges.forEach(({ node }) => {
      createPage({
        path: `/projects/${node.fileInfo.name}`,
        component: './src/templates/ProjectPage.vue',
        context: {
          title: node.title,
          subtitle: node.subtitle,
          cover: node.cover,
          cta: node.cta,
          facts: node.facts,
          content: node.content,
          excerpt: node.excerpt,
          downloads: node.downloads,
        },
      });
    });

    data.allDocs.edges.forEach(({ node }) => {
      createPage({
        path: `/docs/${node.fileInfo.name}`,
        component: './src/templates/DocPage.vue',
        context: {
          title: node.title,
          content: node.content,
          fileInfo: node.fileInfo,
        },
      });
    });
  });
};
