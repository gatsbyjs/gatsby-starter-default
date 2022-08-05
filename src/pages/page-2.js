import * as React from "react"
import { Link } from "gatsby"

import Layout from "../components/layout"
import Seo from "../components/seo"

const SecondPage = () => (
  <Layout>
    <h1>Selected Event</h1>
      <h2>
        Defense in the Digital age
      </h2>
      <p> Status: Open
      </p>
    <b>September 12, 0900 - 1015</b>
    <Link to="/">Home</Link>
  </Layout>
)

export const Head = () => <Seo title="Page two" />

export default SecondPage
