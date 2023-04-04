import * as React from "react"

import Header from "@/components/Header"
import Layout from "@/components/Layout"
import Link from "@/components/Link"
import Seo from "@/components/Seo"

const NotFoundPage = () => {
  return (
    <Layout>
      <Header />
      <main className="container flex flex-col items-center justify-center sm:mt-10">
        <h1 className="text-8xl tracking-tighter leading-relaxed drop-shadow-sm mb-2.5 font-bold font-heading">
          404
        </h1>

        <p className="text-xl leading-7 text-center md:max-w-xl">
          We're sorry, that page cannot be found.
        </p>
        <p className="text-xl leading-7 text-center md:max-w-xl">
          Return to the
          <Link to="/" className="inline pl-1.5">
            homepage
          </Link>
          .
        </p>
      </main>
    </Layout>
  )
}

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Page Not Found" />

export default NotFoundPage
