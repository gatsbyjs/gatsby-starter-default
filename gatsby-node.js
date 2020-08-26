const path = require("path")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: "en-gb/aPage",
    component: path.resolve(`./src/templates/index.jsx`),
    context: {
      availability: "Internal",
      locale: "en-GB",
      // categoryPageId: "75WIKPg3mdGcMauu3TBNCS", // Business cards
      categoryPageId: "01HPMWw7VuJVYd2gVmNXmy", // Stationary
    },
  })

  createPage({
    path: "es-es/aPage",
    component: path.resolve(`./src/templates/index.jsx`),
    context: {
      availability: "Public",
      locale: "es-ES",
      // categoryPageId: "75WIKPg3mdGcMauu3TBNCS", // Business cards
      categoryPageId: "01HPMWw7VuJVYd2gVmNXmy", // Stationary
    },
  })
}
