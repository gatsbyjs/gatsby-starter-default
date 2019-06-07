import React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import SEO from "../components/seo"
import '../styles/main.scss'

const IndexPage = ({siteDescription}) => (
  <Layout>
    <SEO title="YYJ Tech" />
    <p>We're a self-organizing slack community for people who are looking to discuss topics related to technology + Victoria, BC. </p>
    <Link
      to="https://join.slack.com/t/yyjtech/shared_invite/enQtNjQ3NTkzMDg2MDk4LTI4NDdiNjJjNTRmMmI0NTlmNzJkNDg2OWJmNjY5N2IwZWQxMTRkOWNkZTMzYmExMzE1NmY2ZWJmYjY3ZDg1NTc"
      className="button is-primary"
    >
      Sign Up
    </Link>
  </Layout>
)

export default IndexPage
