import * as React from "react"
import { Link } from "gatsby"

import { Layout, Seo } from "components"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <p>
      <Link to="/page-2/">Go to page 2</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
