import React from "react"
import { graphql } from "gatsby"

const CategoryPageSections = categoryPageSections => {
  return categoryPageSections.map(categoryPageSection => (
    <div>
      <span bold="true">{categoryPageSection.sectionHeader}</span>
      {
        <ul>
          {categoryPageSection.productTiles.map((productTile, index) => (
            <li key={index}>
              {productTile.productTileHeader} - {productTile.transformedUrl}
            </li>
          ))}
        </ul>
      }
    </div>
  ))
}

const SideBarSectionLinks = sidebarSections => {
  // each sectionLink is an array
  return sidebarSections.map(sidebarSection => (
    <div>
      <span bold="true">{sidebarSection.sectionHeader}</span>
      {
        <ul>
          {sidebarSection.sectionLinks.map((link, index) => (
            <li key={index}>
              {link.text} - {link.transformedTargetUrl}
            </li>
          ))}
        </ul>
      }
    </div>
  ))
}

export default ({ data }) => {
  const {
    marqueeCta,
    sidebarSections,
    categoryPageSections,
  } = data.contentfulPageCategoryPage

  return (
    <div>
      This is a page with data:
      {marqueeCta && (
        <div>
          <div>Marquee text: {marqueeCta.text}</div>
          <div>Contentful url: {marqueeCta.targetUrl.contentfulUrl}</div>
          <div>Transformed target url: {marqueeCta.transformedTargetUrl}</div>
        </div>
      )}
      <h3>Sidebar section links</h3>
      {SideBarSectionLinks(sidebarSections)}
      <h3>Category page sections</h3>
      {CategoryPageSections(categoryPageSections)}
    </div>
  )
}

export const IndexPage = graphql`
  query($categoryPageId: String!, $locale: String!) {
    contentfulPageCategoryPage(
      contentful_id: { eq: $categoryPageId }
      node_locale: { eq: $locale }
    ) {
      showSidebar
      seo {
        metaDescription {
          internal {
            content
          }
        }
      }
      #marqueeCta {
      #  text
      #  targetUrl {
      #    contentfulUrl
      #  }
      #  transformedTargetUrl(locale: $locale)
      #}
      sidebarSections {
        sectionHeader
        sectionLinks {
          text
          targetUrl {
            contentfulUrl
          }
          transformedTargetUrl(locale: $locale)
        }
      }
      categoryPageSections {
        sectionHeader
        productTiles {
          productTileHeader
          transformedUrl(locale: $locale)
        }
      }
    }
  }
`

export const validateData = ({ issuesRegistry, helpers, pageData }) => {
  // if (
  //   helpers.getValue(pageData, "contentfulPageCategoryPage.marqueeCta") === true
  // ) {
  // issuesRegistry.registerDataIssueIfEmpty(
  //   [
  //     "contentfulPageCategoryPage.marqueeCta.textX",
  //     "contentfulPageCategoryPage.marqueeCtaX.text",
  //     "contentfulPageCategoryPageX.marqueeCta.text",
  //     "contentfulPageCategoryPage[].marqueeCta.text",
  //     "contentfulPageCategoryPage.marqueeCta[].text",
  //     "contentfulPageCategoryPage.marqueeCta.text[]",
  //   ],
  //   {
  //     group: "Marquee CTA",
  //   }
  // )
  // }
  // if (
  //   helpers.getValue(pageData, "contentfulPageCategoryPage.showSidebar") ===
  //   true
  // ) {
  //   issuesRegistry.registerDataIssueIfEmpty(
  //     [
  //       // "contentfulPageCategoryPage.sidebarHeader",
  //       // "contentfulPageCategoryPage.sidebarSections[].sectionLinks[].text",
  //       // Wrong validation
  //       "contentfulPageCategoryPage.sidebarSections[].sectionLinks.text",
  //       "contentfulPageCategoryPage.sidebarSections.sectionLinks[].text",
  //       "contentfulPageCategoryPage.sidebarSections.sectionLinks[].text",
  //     ],
  //     { group: "sidebar" }
  //   )
  // }
  issuesRegistry.registerDataIssueIfEmpty(
    [
      "contentfulPageCategoryPage.seo.metaDescription.internal[].content",
      "contentfulPageCategoryPage.seo[].metaDescription.internal.content",
    ],
    { group: "seo" }
  )

  issuesRegistry.registerDataIssueIf(
    "contentfulPageCategoryPage.seo.metaDescription",
    value => value !== "critical",
    { group: "critical", message: "Critical issue detected" }
  )

  issuesRegistry.registerDataIssueIf(
    "contentfulPageCategoryPage.seo.metaDescription",
    value => value !== "criticalDeveloper",
    { group: "critical", isDeveloper: true, message: "Critical developer issue detected" }
  )

  issuesRegistry.registerDataIssueIf(
    "contentfulPageCategoryPage.seo.metaDescription",
    value => value !== "developer",
    { group: "developer", isDeveloper: true, message: "Developer issue detected" }
  )
  issuesRegistry.registerDataIssueIf(
    "contentfulPageCategoryPage.seo.metaDescription",
    value => value !== "normal",
    { group: "normal", message: "Normal issue detected" }
  )
}
