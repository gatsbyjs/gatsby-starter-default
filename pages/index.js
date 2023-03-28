import React from "react"

import SignupForm from "/components/signup-form"
import Layout from "/components/layout"
import SEO from "/components/seo"

const IndexPage = ({ siteDescription }) => (
  <Layout>
    <div className="flex-center-column">
      <SEO title="YYJ Tech" />
      <p>
        YYJ Tech is an online community that connects & supports professionals in the tech industry in and around Victoria, BC.{" "}
      </p>
      <SignupForm />
    </div>
  </Layout>
)

export default IndexPage
