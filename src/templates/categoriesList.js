import React from "react"
import { Box } from "@theme-ui/components"
import { Link } from "../components/link"
import { getArticleCategoryPath, getBlogPath } from "../utils/path"
import { i18nContext } from "../context/i18nContext"

const CategoriesList = ({ categories }) => {
  return (
    <Box
      sx={{
        mb: 4,
      }}
    >
      <i18nContext.Consumer>
        {t => (
          <Link to={getBlogPath(categories[0].locale)} variant="tab">
            {t.all}
          </Link>
        )}
      </i18nContext.Consumer>
      {categories.map(category => (
        <Link
          to={getArticleCategoryPath(category, category.locale)}
          key={category.id}
          variant="tab"
        >
          {category.title}
        </Link>
      ))}
    </Box>
  )
}

export default CategoriesList
