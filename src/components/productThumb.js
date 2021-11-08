import React from "react"
import { Box, Flex, Grid, Heading, Text } from "@theme-ui/components"
import { getProductPath } from "../utils/path"
import { GatsbyImage } from "gatsby-plugin-image"
import { i18nContext } from "../context/i18nContext"
import { Plus } from "react-feather"
import { getColor } from "@theme-ui/color"
import themeUiTheme from "../gatsby-plugin-theme-ui"
import { Link } from 'gatsby'


const ProductThumb = ({ product, category }) => {
  const primary = getColor(themeUiTheme, "primary")
  const dark = getColor(themeUiTheme, "dark")

  return (
    <Link
      className="product-thumb-link"
      sx={{ color: "dark" }}
      state={{ category }}
      to={getProductPath(product, product.locale)}
    >
      <Box sx={{ aspectRatio: "1" }}>
        <Box
          sx={{
            backgroundColor: "lightBackground",
            overflow: "hidden",
            width: "100%",

            ".gatsby-image-wrapper": {
              width: "100%",
            },
          }}
        >
          <GatsbyImage image={product.images[0].gatsbyImageData} alt="" />
        </Box>

        <Flex
          sx={{
            backgroundColor: "darkGrey",
            p: [3],
            justifyContent: "space-between",
            alignItems: "center",
            alignContent: "center",
          }}
        >
          <Box sx={{ width: "80%", height: ["50px"] }}>{product.name}</Box>
          <Box sx={{ textAlign: "right" }}>
            <Plus color={primary} size={32} />
          </Box>
        </Flex>
      </Box>
    </Link>
  )
}

export default ProductThumb
