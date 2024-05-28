import React, { useContext } from "react"
import { Box } from "@theme-ui/components"
import { InboundLink } from "../components/link"
import { getArticleCategoryPath, getBlogPath } from "../utils/path"
import { i18nContext } from "../context/i18nContext"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"

const CategoriesList = ({ categories }) => {
  const locale = useContext(LanguageSwitcherContext).activeLocale
  return (
    <Box
      sx={{
        mb: 4,
      }}
    >
      <i18nContext.Consumer>
        {t => (
          <InboundLink to={getBlogPath(locale)} variant="tab">
            {t.all}
          </InboundLink>
        )}
      </i18nContext.Consumer>
      {categories.map(category => (
        <InboundLink
          to={getArticleCategoryPath(category, locale)}
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
