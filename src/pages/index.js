import * as React from "react"

import { Link } from "gatsby"
import { StaticImage } from "gatsby-plugin-image"


import Footer from '../components/Footer/footer'
import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"

const links = [
  {
    text: "Army Week",
    url: "https://www.ArmyWeek.com/selectEvent/",
    description:
      "Find information on Selected Event.",
  },
  // {
  //   text: "Calendar View",
  //   url: "https://github.com/gatsbyjs/gatsby/tree/master/examples",
  //   description:
  //     "A collection of websites ranging from very basic to complex/complete that illustrate how to accomplish specific tasks within your Gatsby sites.",
  // },
  // {
  //   text: "Plugin Library",
  //   url: "https://www.gatsbyjs.com/plugins",
  //   description:
  //     "Learn how to add functionality and customize your Gatsby site or app with thousands of plugins built by our amazing developer community.",
  // },
]

const samplePageLinks = [
  {
    text: "Select Event",
    url: "selectedEvent",
    badge: true,
    description:
      "Get more info on this page",
  },
  // { text: "TypeScript", url: "using-typescript" },
  // { text: "Server Side Rendering", url: "using-ssr" },
  // { text: "Deferred Static Generation", url: "using-dsg" },

  // {
  //   text: "Event test dummy",
  //   url: "page-2",
  //   badge: true,
  //   description:
  //     "Get more info on this page",
  // },
  { text: "Profile", url: "profile" },
  { text: "Calendar", url: "Calendar" },
  { text: "FAQ", url: "faq" },

]

const moreLinks = [
  // { text: "Join us on Discord", url: "https://gatsby.dev/discord" },
  // {
  //   text: "Documentation",
  //   url: "https://gatsbyjs.com/docs/",
  // },
  // {
  //   text: "Starters",
  //   url: "https://gatsbyjs.com/starters/",
  // },
  // {
  //   text: "User Profile",
  //   url: "https://gatsbyjs.com/showcase/",
  // },
]

const utmParameters = `?utm_source=starter&utm_medium=start-page&utm_campaign=default-starter`

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <div className={styles.textCenter}>
      <StaticImage
        src="../images/army-week-logo-black-font.svg"
        loading="eager"
        width={350}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt=""
        style={{ marginTop: `var(--space-1)` }}
      />
      <h1>
      <b> Welcome to Army Week</b>
      </h1>
      <h2>
        Register here.
      </h2>
      <p className={styles.intro}>
       {" "}
        {samplePageLinks.map((link, i) => (
          <React.Fragment key={link.url}>
            <Link to={link.url}>{link.text}</Link>
            {i !== samplePageLinks.length - 1 && <> · </>}
          </React.Fragment>
        ))}
        <br />
        Fun fact: <code>src/pages/index.js</code> to update this page.
      </p>
    </div>

    <ul className={styles.list}>
      {links.map(link => (
        <li key={link.url} className={styles.listItem}>
          <a
            className={styles.listItemLink}
            href={`${link.url}${utmParameters}`}
          >
            {link.text} ↗
          </a>
          <p className={styles.listItemDescription}>{link.description}</p>
        </li>
      ))}
    </ul>
    {moreLinks.map((link, i) => (
      <React.Fragment key={link.url}>
        <a href={`${link.url}${utmParameters}`}>{link.text}</a>
        {i !== moreLinks.length - 1 && <> · </>}
      </React.Fragment>
    ))}
  </Layout>
)

/**
 * Head export to define metadata for the page
 *
 * See: https://www.gatsbyjs.com/docs/reference/built-in-components/gatsby-head/
 */
export const Head = () => <Seo title="Home" />

export default IndexPage
