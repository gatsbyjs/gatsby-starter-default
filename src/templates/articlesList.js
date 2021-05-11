import React from "react"
import { Box } from "@theme-ui/components"
import ArticleThumb from "../components/articleThumb"

const ArticlesList = ({ articles }) => {
  return (
    <Box
      sx={{
        "& > div": {
          mb: [4, 5],
        },
      }}
    >
      {articles.map(article => (
        <ArticleThumb article={article} />
      ))}
    </Box>
  )
}

export default ArticlesList
