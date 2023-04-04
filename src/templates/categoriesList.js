import React from "react"
import { Box } from "@theme-ui/components"
import { InboundLink } from "../components/link"
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
          <InboundLink to={getBlogPath(categories[0].locale)} variant="tab">
            {t.all}
          </InboundLink>
        )}
      </i18nContext.Consumer>
      {categories.map(category => (
        <InboundLink
          to={getArticleCategoryPath(category, category.locale)}
          key={category.id}
          variant="tab"
        >
          {category.title}
        </InboundLink>
      ))}
    </Box>
  )
}

export default CategoriesList
