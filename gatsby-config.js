require('dotenv').config();

// const config = require('gatsby-plugin-config');

module.exports = {
  siteMetadata: {
    title: 'Ueno Gatsby Starter',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    'gatsby-plugin-typescript',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',

    // {
    //   resolve: 'gatsby-source-prismic',
    //   options: {
    //     repositoryName: config.PRISMIC_ENDPOINT,
    //     accessToken: config.PRISMIC_ACCESS_TOKEN,
    //     linkResolver: () => require('./src/utils/linkResolver'),
    //   },
    // },

    // {
    //   resolve: 'gatsby-plugin-prismic-preview',
    //   options: {
    //     path: '/preview',
    //     repositoryName: config.PRISMIC_ENDPOINT,
    //     linkResolver: require('./src/utils/linkResolver'),
    //   }
    // },

    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/favicon.png',
      },
    },
    {
      resolve: 'gatsby-plugin-react-svg',
      options: {
        rule: {
          include: /assets\/svg/,
        },
      },
    },
    {
      resolve: 'gatsby-plugin-layout',
      options: {
        component: require.resolve('./src/components/app-layout/AppLayout.tsx'),
      },
    },
  ],
}
