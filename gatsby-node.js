const path = require("path")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: "aPage",
    component: path.resolve(`./src/templates/index.jsx`),
    context: {
      locale: "es-ES",
      // categoryPageId: "75WIKPg3mdGcMauu3TBNCS", // Business cards
      categoryPageId: "01HPMWw7VuJVYd2gVmNXmy", // Stationary
    },
  })
}
