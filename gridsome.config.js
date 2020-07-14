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
        path: '_data/downloads/*.md',
        typeName: 'Downloads',
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
        path: '_data/settings/discover-settings.yml',
        typeName: 'DiscoverSettings',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_data/settings/learn-settings.yml',
        typeName: 'LearnSettings',
      },
    },
    {
      use: '@gridsome/source-filesystem',
      options: {
        path: '_data/settings/engage-settings.yml',
        typeName: 'EngageSettings',
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
    {
      use: '@gridsome/plugin-sitemap',
      options: {
        exclude: ['/success'],
      },
    },
    {
      use: 'gridsome-plugin-robots-txt',
    },
    {
      use: '@gridsome/plugin-google-analytics',
      options: {
        id: 'UA-XXXXXXXXX-X',
      },
    },
    {
      use: 'gridsome-plugin-manifest',
      options: {
        background_color: '#000000',
        icon_path: './src/favicon.png',
        name: 'Pattern Building',
        short_name: 'Pattern Building',
        theme_color: '#FFFFFF',
        lang: 'en',
      },
    },
    {
      use: 'gridsome-plugin-bundle-analyzer',
      options: {
        onlyProduction: true, // only production bundle will be analyzed by default
        analyzerOptions: {
          analyzerMode: 'static',
        }, // see https://github.com/webpack-contrib/webpack-bundle-analyzer
      },
    },
  ],
};
