import React from "react"
import { Box, Flex, Grid, Heading, Text } from "@theme-ui/components"
import { getArticlePath } from "../utils/path"
import { GatsbyImage } from "gatsby-plugin-image"
import { Link } from "./link"

const ArticleThumb = ({ article }) => {
  return (
    <Box
      sx={{
        backgroundColor: "lightBackground",
        borderRadius: "sm",
        overflow: "hidden",
      }}
    >
      <Link
        to={getArticlePath(article, article.locale)}
        sx={{ textDecoration: "none" }}
      >
        <Grid columns={[1, "5fr 3fr"]} gap={0}>
          <Box
            sx={{
              ".gatsby-image-wrapper": {
                height: "100%",
              },
            }}
          >
            <GatsbyImage
              image={article.heroImage.gatsbyImageData}
              alt=""
            />
          </Box>
          <Flex
            sx={{
              p: 4,
              flexDirection: "column",
              justifyContent: "space-between",
            }}
          >
            <Heading
              as="h2"
              variant="h4"
              sx={{ mb: 3, color: "text" }}
            >
              {article.title}
            </Heading>
            <Text variant="caption">
              {article.meta.firstPublishedAt}
              {article.category ? ` - ${article.category.title}` : null}
            </Text>
          </Flex>
        </Grid>
      </Link>
    </Box>
  )
}

export default ArticleThumb
