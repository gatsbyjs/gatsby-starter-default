import React from "react"

import SignupForm from "../components/signup-form"
import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/main.scss'

const IndexPage = ({siteDescription}) => (
  <Layout>
    <div className="flex-center-column">
      <SEO title="YYJ Tech" />
      <p>We're a self-organizing slack community for people who are looking to discuss topics related to technology + Victoria, BC. </p>
      <SignupForm />
    </div>
  </Layout>
)

export default IndexPage
