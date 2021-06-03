import React, { FC } from "react"
import { useStaticQuery, graphql } from "gatsby"
import { Header, Footer } from "components"
import 'sass/style.scss';
export interface LayoutProps {
  children: JSX.IntrinsicElements["div"]
}

export const Layout: FC<LayoutProps> = ({ children }) => {
  const data = useStaticQuery(graphql`
    query SiteTitleQuery {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)

  return (
    <>
      <Header siteTitle={data.site.siteMetadata?.title || `Title`} />
      <div
        style={{
          margin: `0 auto`,
          maxWidth: 960,
          padding: `0 1.0875rem 1.45rem`,
        }}
      >
        <main>{children}</main>
      <Footer/>
      </div>
    </>
  )
}
