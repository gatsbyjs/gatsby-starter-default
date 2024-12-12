import React, { useState } from "react"
import { graphql } from "gatsby"
import { Box, Container, Grid, Heading, Text, Flex } from "@theme-ui/components"
import Layout from "../components/layout"
import { getCategoryPath } from "../utils/path"
import { HelmetDatoCms } from "gatsby-source-datocms"
import PageHero from "./pageHero"
import ProductThumb from "../components/productThumb.js"
import { InboundLink } from "../components/link"
import { LanguageSwitcherContext } from "../context/languageSwitcherContext"

const Page = ({
  data: {
    page,
    categories,
    products,
    site,
    articles,
    contactFooter,

    menu,
    footer,
  },
  pageContext,
}) => {
  const locale = pageContext.locale
  const pageAllSlugLocales = page._allSlugLocales.sort(function (a, b) {
    return site.locales.indexOf(a.locale) - site.locales.indexOf(b.locale)
  })

  const [hasProducts, setHasProducts] = useState(
    products.nodes.find(product => page.title == product.category.title) ? 1 : 0
  )
  const i18nPaths = pageAllSlugLocales.map(locale => {
    return {
      locale: locale.locale,
      value: getCategoryPath(page, locale.locale),
    }
  })

  return (
    <Layout
      locale={locale}
      i18nPaths={i18nPaths}
      menuData={menu.nodes}
      footerData={footer.nodes}
    >
      <HelmetDatoCms seo={page.seoMetaTags}>
        <html lang={page.locale} />
      </HelmetDatoCms>
      <PageHero page={page} image={page.heroImage} />
      <Box>{page.content && page.content.map(block => <Box>22</Box>)}</Box>
      <Box>
        <Container>
          <Box>
            <Box sx={{ pt: [0], pb: [6] }}>
              <Heading as="h3" variant="h3" sx={{ textAlign: "center" }}>
                {page.title}
              </Heading>
              <Text
                as="div"
                variant="sectionTitle"
                sx={{ px: [3, 3, 6, 10], p: { textAlign: "center" } }}
                dangerouslySetInnerHTML={{ __html: page.description }}
              />
            </Box>
            <Grid columns={[1, 1, 1, ".2fr .8fr"]} gap={[2, 2, 2, 6]}>
              <Box sx={{ display: ["none", "none", "none", "block"] }}>
                {categories.nodes.map(category => {
                  return (
                    <Box>
                      <Box>
                        <Heading
                          as="h4"
                          variant="h4"
                          sx={{
                            my: [3],
                            mb: [hasProducts && 2],
                            color:
                              category.title == page.title ? "primary" : "dark",
                          }}
                        >
                          {category.title != page.title ? (
                            <InboundLink
                              variant="normalDarkLink"
                              sx={{ fontSize: "body" }}
                              to={getCategoryPath(category, locale)}
                            >
                              {category.title}
                            </InboundLink>
                          ) : (
                            category.title
                          )}
                        </Heading>
                      </Box>
                    </Box>
                  )
                })}
              </Box>
              <Grid columns={[1, 2, 3, 3]} gap={[2, 2, 2, 4]}>
                {products.nodes.map(product => {
                  page.title == product.category.title && (
                    <ProductThumb product={product} category={page.title} />
                  )
                })}
              </Grid>
            </Grid>
          </Box>
        </Container>
      </Box>
    </Layout>
  )
}

export default Page

export const query = graphql`
  query ProductCategoryQuery($id: String!, $locale: String!) {
    site: datoCmsSite {
      locales
    }
    footer: allDatoCmsFooter(locale: $locale) {
      nodes {
        ...FooterDetails
      }
    }
    menu: allDatoCmsMenu(
      locale: $locale
      filter: { root: { eq: true }, locales: { eq: $locale } }
      sort: { position: ASC }
    ) {
      nodes {
        ...MenuDetails
      }
    }
    page: datoCmsProductCategory(id: { eq: $id }, locale: $locale) {
      id
      locales
      _allSlugLocales {
        value
        locale
      }
      title
      slug
      description
      model {
        apiKey
      }
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      image {
        gatsbyImageData(
          width: 1920
          placeholder: NONE
          forceBlurhash: false
          imgixParams: {
            blendColor: "#212C30"
            blendMode: "multiply"
            blendAlpha: 30
          }
        )
      }
      heroImage {
        desktop: gatsbyImageData(
          placeholder: NONE
          forceBlurhash: false
          imgixParams: {
            blendColor: "#212C30"
            blendMode: "multiply"
            blendAlpha: 30
          }
        )
        mobile: gatsbyImageData(
          placeholder: NONE
          forceBlurhash: false
          imgixParams: {
            fit: "crop"
            ar: "16:10"
            h: "800"
            blendColor: "#212C30"
            blendMode: "multiply"
            blendAlpha: 30
          }
        )
      }
      model {
        apiKey
      }
    }

    categories: allDatoCmsProductCategory(
      locale: $locale
      filter: { slug: { ne: null } }
      sort: { position: ASC }
    ) {
      nodes {
        id
        title
        locales
        ...ProductCategoryPageDetails
        model {
          apiKey
        }
      }
    }

    products: allDatoCmsProduct(
      locale: $locale
      filter: { category: { id: { eq: $id } } }
      sort: { position: ASC }
    ) {
      nodes {
        id
        _allSlugLocales {
          value
          locale
        }
        title
        slug
        position
        description
        locales
        category {
          id
          title
          locales
          ...ProductCategoryPageDetails
          model {
            apiKey
          }
        }
        images {
          gatsbyImageData(width: 1920, placeholder: NONE, forceBlurhash: false)
        }
      }
    }

    menu: allDatoCmsMenu(
      locale: $locale
      filter: { root: { eq: true }, locales: { eq: $locale } }
      sort: { position: ASC }
    ) {
      nodes {
        ...MenuDetails
      }
    }
  }

  fragment ProductCategoryPageDetails on DatoCmsProductCategory {
    id
    locales
    title
    slug
    description
    _allSlugLocales {
      value
      locale
    }
    model {
      apiKey
    }
    image {
      gatsbyImageData(
        width: 1920
        placeholder: NONE
        forceBlurhash: false
        imgixParams: {
          blendColor: "#212C30"
          blendMode: "multiply"
          blendAlpha: 30
        }
      )
    }
    heroImage {
      gatsbyImageData(
        width: 1920
        placeholder: NONE
        forceBlurhash: false
        imgixParams: {
          blendColor: "#212C30"
          blendMode: "multiply"
          blendAlpha: 30
        }
      )
    }
  }
`
