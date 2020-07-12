// This is where project configuration and plugin options are located.
// Learn more: https://gridsome.org/docs/config

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

module.exports = {
  siteName: 'Pattern Buildings',
  siteDescription:
    'An open-source industrial building system for mass-customizable buildings',
  siteUrl: 'https://patternbuildings.com',
  transformers: {
    remark: {
      externalLinksTarget: '_blank',
      externalLinksRel: ['nofollow', 'noopener', 'noreferrer'],
      anchorClassName: 'icon icon-link',
      plugins: [
        // ...global plugins
      ],
    },
    netlify: {},
  },
  plugins: [
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_data/projects/*.md',
        typeName: 'Projects',
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_data/docs/*.md',
        typeName: 'Docs',
        remark: {
          plugins: [
            // ...local plugins
          ],
        },
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_data/settings/home-settings.yml',
        typeName: 'Settings',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_data/settings/navigation.yml',
        typeName: 'Navigation',
      },
    },
    {
      use: `gridsome-plugin-netlify-cms`,
      options: {
        publicPath: `/admin`,
      },
    },
    {
      use: 'gridsome-plugin-tailwindcss',
    },
  ],
};
