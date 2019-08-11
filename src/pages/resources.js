import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/main.scss'

const IndexPage = ({siteDescription}) => (
  <Layout>
    <div className="flex-center-column">
      <SEO title="YYJ Tech Resources" />
      <h2>Jobs</h2>
      
      <h2>Events & Networking</h2>
    </div>
  </Layout>
)

export default IndexPage
