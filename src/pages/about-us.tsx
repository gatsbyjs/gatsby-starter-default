import * as React from "react"
import { Link } from "gatsby"

import { Layout, Seo } from "components"

const AboutUS = () => (
  <Layout>
    <Seo title="About Us" />
    <h1>About Us</h1>
    <p>Welcome to About Us</p>
    <Link to="/">Go back to the Homepage</Link>
  </Layout>
)

export default AboutUS;
