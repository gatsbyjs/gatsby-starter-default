import React from "react"
import { Link } from "gatsby"

// import Layout from "@components/layout"
import { Button } from "@components/Button"
// import SEO from "@components/seo"

const IndexPage = () => (
  <div>
    <Button>Button</Button>
    <Button variant="primary">primary</Button>
    <Button variant="success">success</Button>
    <Button variant="warning">warning</Button>
    <Link to="/page-2/">Go to page 2</Link>
  </div>
)

export default IndexPage
