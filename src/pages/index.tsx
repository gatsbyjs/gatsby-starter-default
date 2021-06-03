import * as React from "react"
import { Link } from "gatsby"
import { Layout, Seo } from "components"

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <h1>Hi Developers</h1>
    <p>Welcome to new Custom Gatsby Starter </p>
    <p>
      <Link to="/about-us/">Go to About Us</Link> <br />
    </p>
  </Layout>
)

export default IndexPage
