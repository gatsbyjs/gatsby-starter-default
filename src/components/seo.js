/**
 * SEO component that queries for data with
 *  Gatsby's useStaticQuery React hook
 *
 * See: https://www.gatsbyjs.org/docs/use-static-query/
 */

import React from "react"
import PropTypes from "prop-types"
import Helmet from "react-helmet"
import { useStaticQuery, graphql } from "gatsby"

function SEO({ description, lang, meta, title, img }) {
  const { site } = useStaticQuery(
    graphql`
      query {
        site {
          siteMetadata {
            title
            description
            author
          }
        }
      }
    `
  )

  const metaDescription = description || site.siteMetadata.description

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={`%s | ${site.siteMetadata.title}`}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },

        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          property: `og:image`,
          content: img,
        },
        {
          property: `og:site_name`,
          content: `Ask your dog guru`,
        },

        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: site.siteMetadata.author,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
        {
          name: `twitter:image`,
          content: img,
        },
      ].concat(meta)}
    />
  )
}

SEO.defaultProps = {
  lang: `en`,
  meta: [],
  description: ``,
}

SEO.propTypes = {
  description: PropTypes.string,
  lang: PropTypes.string,
  meta: PropTypes.arrayOf(PropTypes.object),
  title: PropTypes.string.isRequired,
}

export default SEO

// {/* <meta name="twitter:card" content="summary">
// <meta name="twitter:site" content="@publisher_handle">
// <meta name="twitter:title" content="Page Title">
// <meta name="twitter:description" content="Page description less than 200 characters">
// <meta name="twitter:creator" content="@author_handle">
// <meta name="twitter:image" content="http://www.example.com/image.jpg"> */}

// {/* <meta property="og:title" content="Title Here" />
// <meta property="og:type" content="article" />
// <meta property="og:description" content="Description Here" />
// <meta property="og:image" content="http://example.com/image.jpg" />
// <meta property="og:site_name" content="Site Name, i.e. Moz" />

// <meta property="og:url" content="http://www.example.com/" />
// <meta property="fb:admins" content="Facebook numeric ID" /> */}
