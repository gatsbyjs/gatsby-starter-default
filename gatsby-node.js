const path = require("path")

exports.createPages = async ({ actions }) => {
  const { createPage } = actions

  createPage({
    path: "aPage",
    component: path.resolve(`./src/templates/index.jsx`),
    context: {
      locale: "es-ES",
      categoryPageId: "75WIKPg3mdGcMauu3TBNCS",
    },
  })
}
