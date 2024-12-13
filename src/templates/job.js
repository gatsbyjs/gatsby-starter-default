import React from "react"
import { graphql } from "gatsby"
import { Box, Container, Grid, Heading } from "@theme-ui/components"
import Layout from "../components/layout"
import { getJobPath } from "../utils/path"
import { HelmetDatoCms } from "gatsby-source-datocms"
import { i18nContext } from "../context/i18nContext"
import PageHero from "./pageHero"
import JobForm from "../components/blocks/jobForm"
const JobPage = ({ data: { page, site, menu, footer }, pageContext }) => {
  const locale = pageContext.locale
  const pageAllSlugLocales = page._allSlugLocales.sort(function (a, b) {
    return site.locales.indexOf(a.locale) - site.locales.indexOf(b.locale)
  })

  const i18nPaths = pageAllSlugLocales.map(locale => {
    return {
      locale: locale.locale,
      value: getJobPath(page, locale.locale),
    }
  })
  console.log(page)

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
      <PageHero page={page} />
      <Box as="section">
        <Container>
          <Grid
            columns={[1, 1, 1, "1fr 2.5fr"]}
            gap={[32, 32, 32, 96]}
            mb={[2, 3, 5, 6]}
          >
            <Box>
              <Heading
                sx={{
                  textTransform: "uppercase",
                  mt: [0],
                }}
                variant="h2"
              >
                {page.name}
              </Heading>
            </Box>
            <Box>
              <Box
                dangerouslySetInnerHTML={{ __html: page.description }}
                sx={{
                  fontFamily: "roc",
                  fontSize: [3, 4],
                  a: {
                    fontSize: [3, 4],
                    color: "dark",
                  },
                  ul: {
                    listStyle: "none",
                    margin: 0,
                    padding: 0,
                    li: {
                      display: "flex",
                      mb: 1,
                      alignItems: "flex-start",
                      position: "relative",
                      "&::before": {
                        display: "flex",
                        marginTop: "14px",
                        WebkitBoxAlign: "center",
                        alignItems: "center",
                        WebkitBoxPack: "center",
                        justifyContent: "center",
                        content: '"—"',
                        marginRight: "16px",
                        marginLeft: "16px",
                        width: "4px",
                        height: "4px",
                        minWidth: "4px",
                        minHeight: "4px",
                        position: "relative",
                        lineHeight: 1.33,
                        color: "dark",
                      },
                      p: {
                        fontSize: [2, 3, 4],
                        mb: 0,
                      },
                    },
                  },
                }}
              />
            </Box>
          </Grid>
        </Container>
      </Box>
      <Box as="section">
        <JobForm
          title="Vieni a scoprire il tuo futuro posto di lavoro"
          jobPosition={page.name}
        />
      </Box>
    </Layout>
  )
}

export default JobPage

export const query = graphql`
  query JobQuery($id: String!, $locale: String!) {
    footer: allDatoCmsFooter(
      locale: $locale
      filter: { root: { eq: true }, locales: { eq: $locale } }
      sort: { position: ASC }
    ) {
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
    page: datoCmsJob(id: { eq: $id }) {
      id
      seoMetaTags {
        ...GatsbyDatoCmsSeoMetaTags
      }
      locales
      name
      description
      slug
      model {
        apiKey
      }
      _allSlugLocales {
        value
        locale
      }
    }
    site: datoCmsSite {
      locales
    }
  }
`
