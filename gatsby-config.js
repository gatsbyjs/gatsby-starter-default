module.exports = {
  siteMetadata: {
    title: `Gatsby Default Starter`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: "@vp/gatsby-transformer-links",
      options: {
        containingComponent: "ContentfulSimpleLink",
        optionsUrlField: "targetUrl",
        optionsMPVField: "targetUrl",
        resolvedLinkfieldName: "transformedTargetUrl",
        tenant: process.env.GATSBY_TENANT,
        /**
         * Acceptable failure level 0-5
         * 0 - All exceptions are thrown
         * 1 - Author exceptions are consumed silently and not thrown
         * 2 - Data model exceptions are consumed silently and not thrown
         * 3 - Url Service 400 level errors are consumed silently and are not thrown
         * 4 - Url Service 500 level errors are consumed silently and are not thrown
         * 5 - Consume everything possible
         */
        acceptableFailureLevel: 5,
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    {
      resolve: `gatsby-source-contentful`,
      options: {
        spaceId: "olowdmhx072v",
        accessToken: "w52kGuO0utnkP3dHQYRNjy369tgL3QoS8t8hl3AlmvQ",
        environment: "master",
        forceFullSync: true,
        localeFilter: locale => locale.code === "es-ES",
      },
    },
    {
      resolve: "@vp/gatsby-pages-issues-tracker-plugin",
      options: {
        spaceId: "olowdmhx072v",
        environment: "master",
        tenant: "vistaprint",
        isPreview: true,
        authoringLink:
          "https://vistaprint.atlassian.net/wiki/spaces/MT/pages/193168378/Category+Page+Setup#Authoring-Content",
      },
    },
  ],
}
