/**
 * Configure your Gatsby site with this file.
 *
 * See: https://www.gatsbyjs.com/docs/reference/config-files/gatsby-config/
 */

/**
 * @type {import('gatsby').GatsbyConfig}
 */

require("dotenv").config({
  path: `.env.${process.env.NODE_ENV}`,
 })

module.exports = {
  siteMetadata: {
    title: `YYJ Tech`,
    description: `YYJ Tech is an online community that connects & supports professionals in the tech industry in and around Victoria, BC.`,
    siteMenu: [
      {
        icon: null,
        label: "Resources",
        url: "/resources",
        isHidden: true,
      },
      {
        icon: null,
        label: "Events",
        url: "/events",
        isHidden: true,
      },
      {
        icon: "job",
        label: "Post a Job",
        url: "https://forms.gle/6QWUZ8PFh4vX5yfE6",
        isNewWindow: true,
      },
      {
        icon: "slack",
        label: "Join Slack",
        url: "https://join.slack.com/t/yyjtech/shared_invite/zt-9q7q7q0p-~Z1Z4Z8Z1Zq2QZqZqZqZ~g",
        isNewWindow: true,
      },
    ],
  },
  plugins: [
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-images`,
            options: {
              // It's important to specify the maxWidth (in pixels) of
              // the content container as this plugin uses this as the
              // base for generating different widths of each image.
              maxWidth: 2000,
            },
          },
          {
            resolve: `gatsby-remark-table-of-contents`,
            options: {
              exclude: "Table of Contents",
              tight: false,
              ordered: false,
              fromHeading: 1,
              toHeading: 4,
              className: "table-of-contents"
            },
          },
          `gatsby-remark-autolink-headers`,
          `gatsby-remark-copy-linked-files`
        ],
      },
    },
    {
      resolve: "gatsby-source-filesystem",
      options: {
        name: "content",
        path: `${__dirname}/src/contents`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-plugin-sharp`,
    `gatsby-plugin-postcss`,
    `gatsby-plugin-image`,
    `gatsby-transformer-yaml`,
    `gatsby-transformer-sharp`,
    {
      resolve: `gatsby-omni-font-loader`,
      options: {
        mode: "async",
        enableListener: true,
        preconnect: [
          `https://fonts.googleapis.com`,
          `https://fonts.gstatic.com`,
        ],
        web: [
          {
            name: `K2D`,
            file: `https://fonts.googleapis.com/css2?family=K2D:wght@100;700&display=swap`,
          },
          {
            name: `Kanit`,
            file: `https://fonts.googleapis.com/css2?family=Kanit:wght@400&display=swap`,
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-alias-imports`,
      options: {
        alias: {
          "@/components": "./src/components",
          "@/contents": "./src/contents",
          "@/hooks": "./src/hooks",
          "@/images": "./src/images",
          "@/utils": "./src/utils",
        },
        extensions: [".js", ".css", ".yml"],
      },
    },
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#2e2c4a`,
        // This will impact how browsers show your PWA/website
        // https://css-tricks.com/meta-theme-color-and-trickery/
        // theme_color: `#2e2c4a`,
        display: `minimal-ui`,
        icon: `src/images/yyj-slack.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-plugin-google-gtag`,
      options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
        trackingIds: [
          process.env.GA_ID, // Google Analytics / GA
        ],
        // This object is used for configuration specific to this plugin
        pluginConfig: {
          // Puts tracking script in the head instead of the body
          head: true,
          // Setting this parameter is also optional
          respectDNT: true,
          // Avoids sending pageview hits from custom paths
          exclude: [],
        },
      },
    },
  ],
}
