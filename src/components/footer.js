import React from 'react'
import { graphql, useStaticQuery } from "gatsby";
import footerStyles from './footer.module.scss'

export default () => {
  const data = useStaticQuery(graphql`
   query {
    site {
      siteMetadata {
        author
      }
    }
  }
`)
  return (
    <footer className={footerStyles.footer}>
      created by {data.site.siteMetadata.author} <span role="img" aria-label="hands up emoji">Ã°ÂÂÂ</span>
    </footer>
  )
}
