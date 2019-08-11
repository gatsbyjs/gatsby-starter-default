import React from "react"

const Footer = () => (
  <footer className="footer">
    <div className="footer__link">
      <a
        href="/resources">
        <span className="footer__link-icon" role="img" aria-hidden="true">🗂️</span>
        Resources
      </a>
    </div>
    <div className="footer__link">
      <a
        href="/calendar">
        <span className="footer__link-icon" role="img" aria-hidden="true">📅</span>
        Events
      </a>
    </div>
    <div className="footer__link">
      <a
        href="https://forms.gle/6QWUZ8PFh4vX5yfE6">
        <span className="footer__link-icon" role="img" aria-hidden="true">📰</span>
        Post a Job
      </a>
    </div>
    <div className="footer__link">
      <a
        href="https://yyjtech.slack.com">
        <img className="footer__link-icon" alt="" aria-hidden="true" src="https://cdn.brandfolder.io/5H442O3W/as/pl546j-7le8zk-4nzzs1/Slack_Mark_Web.png?width=25" />
        Login
      </a>
    </div>
  </footer>
)

export default Footer
