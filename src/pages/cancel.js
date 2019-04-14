import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const CancelPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the CANCEL page</h1>
    <p>Welcome to CANCEL</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default CancelPage
