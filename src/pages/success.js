import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"

const SuccessPage = () => (
  <Layout>
    <SEO title="Page two" />
    <h1>Hi from the SUCCESS page</h1>
    <p>Welcome to SUCCESS</p>
    <Link to="/">Go back to the homepage</Link>
  </Layout>
)

export default SuccessPage
