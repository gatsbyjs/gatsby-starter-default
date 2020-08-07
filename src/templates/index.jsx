import React from "react"
import { graphql } from "gatsby"

export default ({ data }) => {
  const { marqueeCta } = data.contentfulPageCategoryPage

  return (
    <div>
      This is a page with marquee data in Spain:
      <div>Marquee text: {marqueeCta.text}</div>
      <div>Contentful url: {marqueeCta.targetUrl.contentfulUrl}</div>
    </div>
  )
}

export const IndexPage = graphql`
  query($categoryPageId: String!, $locale: String!) {
    contentfulPageCategoryPage(
      contentful_id: { eq: $categoryPageId }
      node_locale: { eq: $locale }
    ) {
      marqueeCta {
        text
        targetUrl {
          contentfulUrl
        }
      }
    }
  }
`

export const validateData = ({ issuesRegistry, helpers, pageData }) => {
  issuesRegistry.registerDataIssueIfEmpty(
    ["contentfulPageCategoryPage.marqueeCta.text"],
    {
      group: "Marquee CTA",
    }
  )
}
