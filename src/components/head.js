import React from 'react'
import { useStaticQuery } from 'gatsby'
import { Helmet } from 'react-helmet'


const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
  )
}

export default Head
