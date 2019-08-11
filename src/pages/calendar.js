import React from "react"

import Layout from "../components/layout"
import SEO from "../components/seo"

import '../styles/main.scss'

const CalendarPage = () => (
  <Layout>
    <div className="flex-center-column">
      <SEO title="YYJ Tech Events" />
      <div className="calendarContainer">
        <a href="http://bit.ly/yyjtech-events" className="button" target="_blank">Add an event</a> 
        <iframe src="https://calendar.google.com/calendar/embed?src=techyyj@gmail.com&ctz=America%2FVancouver" className="styleCalendar"></iframe>
      </div>
  </div>
  </Layout>
)

export default CalendarPage
