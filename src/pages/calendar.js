import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/main.scss'

const IndexPage = ({siteDescription}) => (
  <Layout>
    <div className="flex-center-column">
      <div className="box">
          <SEO title="YYJ Tech Events" />
          <iframe src="https://calendar.google.com/calendar/embed?src=techyyj@gmail.com&ctz=America%2FVancouver" style="border: 0" width="800" height="600" frameborder="0" scrolling="no"></iframe>
      </div>
    </div>
  </Layout>
)

export default CalendarPage
