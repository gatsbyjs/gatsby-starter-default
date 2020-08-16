const proejctEnums = {
  html: "HTML",
  css: "CSS",
  javascript: "Javascript",
  react: "React",
  vueJS: "VueJS",
  angularJS: "AngularJS",
  bootstrap: "Bootstrap",
  jquery: "jQuery"
}
const devRolesEnum = {
  uiDev: "UI Developer",
  frontendDev: "Frontend Developer",
  uiuxDev: "UI/UX developer"
}
module.exports = {
  siteMetadata: {
    title: `Satya`,
    description: `Demonstrating my work, services and interests.`,
    author: `Satyaprakash kumawat`
  },
  navItems: [
    {
      key: "work",
      displayName: "Work",
      link: "/work"
    },
    {
      key: "blogs",
      displayName: "Blogs",
      link: "/blogs"
    },
    {
      key: "about",
      displayName: "About",
      link: "/about"
    },
    {
      key: "contact",
      displayName: "Contact",
      link: "/contact"
    },
    {
      key: "resume",
      displayName: "Resume",
      link: "/resume"
    }
  ],
  projectDetails: [
    {
      title: "Paytm Credit Score",
      description: "A free credit score product by paytm.",
      techStack: [proejctEnums["javascript"], proejctEnums["css"]],
      role: devRolesEnum["frontendDev"]
    },
    {
      title: "Paytm Merchant Cash Advancement",
      description: "A merchant can avail business loan online",
      techStack: [proejctEnums["javascript"], proejctEnums["css"]],
      role: devRolesEnum["frontendDev"]
    },
    {
      title: "Paytm Bureau base Loans",
      description: "A merchant can avail business loan online",
      techStack: [proejctEnums["javascript"], proejctEnums["css"]],
      role: devRolesEnum["frontendDev"]
    }
  ],
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png` // This path is relative to the root of the site.
      }
    }
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ]
}
