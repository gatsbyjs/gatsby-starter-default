import React from "react"
import { useCategories } from "../../hooks/useCategories"
import { Box, Grid, Text, Heading, Container } from "@theme-ui/components"
import { InboundLink } from "../link"
import { GatsbyImage } from "gatsby-plugin-image"
import { getCategoryPath } from "../../utils/path"

const Categories = ({ page, title, description }) => {
  const categories = useCategories()

  const filteredCategories = categories.filter(
    category => category.title !== page.title
  )

  return (
    <Container>
      <Box>
        <Heading>{title}</Heading>
        <Text dangerouslySetInnerHTML={{ __html: description }} />
      </Box>
      <Grid columns={[2, 2, 4]} sx={{ py: [6, 6, 6, 6] }}>
        {filteredCategories.map(category => {
          return (
            <InboundLink
              variant="links.normalLink"
              to={getCategoryPath(category, page.locale)}
            >
              <Box
                sx={{
                  position: "relative",
                  textAlign: "center",
                  ".gatsby-image-wrapper": {
                    height: ["", "250px"],
                  },
                }}
              >
                <Heading
                  as="h4"
                  variant="h4"
                  sx={{
                    position: "absolute",
                    m: 0,
                    width: "100%",
                    top: "50%",
                    left: "50%",
                    color: "light",
                    zIndex: 2,
                    transform: "translate(-50%,-50%)",
                  }}
                >
                  <Box sx={{ p: [3, 3, 3, 3] }}>{category.title}</Box>
                </Heading>
                {category.image.gatsbyImageData && (
                  <GatsbyImage
                    alt=""
                    image={category.image.gatsbyImageData}
                  />
                )}
              </Box>
            </InboundLink>
          )
        })}
      </Grid>
    </Container>
  )
}

export default Categories
