require("dotenv").config({
  path: `.env.development`,
})

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
        tenant: "vistaprint",
        acceptableFailureLevel: 5,
        convertToAbsoluteUrls: false,
      },
    },
    {
      resolve: "@vp/gatsby-transformer-links",
      options: {
        containingComponent: "ContentfulProductTile",
        optionsUrlField: "url",
        optionsMPVField: ["merchandisingElement", "mpvId"],
        resolvedLinkfieldName: "transformedUrl",
        tenant: "vistaprint",
        acceptableFailureLevel: 5,
        convertToAbsoluteUrls: false,
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
        spaceId: process.env.SPACE_ID,
        accessToken: process.env.ACCESS_TOKEN,
        environment: "master",
        forceFullSync: true,
        localeFilter: locale => ["en-GB", "es-ES"].includes(locale.code),
      },
    },
    {
      resolve: "@vp/gatsby-pages-issues-tracker-plugin",
      options: {
        spaceId: "olowdmhx072v",
        environment: "master",
        tenant: "vistaprint",
        requestor: "local-test",
        isPreview: false,
        developerNotificationsSlackChannel: "testing-issues-tracker",
        authoringLink:
          "https://vistaprint.atlassian.net/wiki/spaces/MT/pages/193168378/Category+Page+Setup#Authoring-Content",
      },
    },
    {
      resolve: `@vp/gatsby-source-gallery-url`,
      options: {
        spaceId: "olowdmhx072v",
        environment: "master",
      },
    },
  ],
}
