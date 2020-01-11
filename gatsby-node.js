const path = require(`path`)

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions
  const clueTemplate = path.resolve(`src/components/clue.js`)

  return graphql(
    `
      query ClueQuery {
        allDataJson {
          edges {
            node {
              id
              airdate(formatString: "MM-DD-YYYY")
              category {
                title
              }
              question
              answer
              value
            }
          }
        }
      }
    `
  ).then(result => {
    if (result.errors) {
      throw result.errors
    }

    result.data.allDataJson.edges.forEach(edge => {
      createPage({
        path: `/clues/${edge.node.id}`,
        component: clueTemplate,
        context: {
          category: `${edge.node.category.title}`,
          airdate: `${edge.node.airdate}`,
          answer: `${edge.node.answer}`,
          question: `${edge.node.question}`,
          value: `${edge.node.value}`,
        },
      })
    })
  })
}
