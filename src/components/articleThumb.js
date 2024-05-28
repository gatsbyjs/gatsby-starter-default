import React, { useContext } from "react"
import { Box, Flex, Grid, Heading, Text } from "@theme-ui/components"
import { getArticlePath } from "../utils/path"
import { GatsbyImage } from "gatsby-plugin-image"
import { InboundLink  } from "./link"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"

const ArticleThumb = ({ article, small }) => {
  const locale = useContext(LanguageSwitcherContext).activeLocale
  return (
    <Box
      sx={{
        backgroundColor: "lightBackground",
        borderRadius: "sm",
        overflow: "hidden",
        height: "100%",
      }}
    >
      <InboundLink
        to={getArticlePath(article, locale)}
        sx={{ textDecoration: "none" }}
      >
        <Grid columns={[1, small ? 1 : "5fr 3fr"]} gap={0}>
          <Box
            sx={{
              ".gatsby-image-wrapper": {
                height: "100%",
              },
            }}
          >
            <GatsbyImage image={article.heroImage.gatsbyImageData} alt="" />
          </Box>
          <Flex
            sx={{
              p: 4,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Heading as="h2" variant="h4" sx={{ mb: 3, mt:0, color: "text" }}>
              {article.title} dadada
            </Heading>
            <Text variant="caption">
              {article.meta.firstPublishedAt}
              {article.category ? ` - ${article.category.title}` : null}
            </Text>
          </Flex>
        </Grid>
      </InboundLink>
    </Box>
  )
}

export default ArticleThumb
