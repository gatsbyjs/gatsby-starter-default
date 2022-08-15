import * as React from "react"


import { StaticImage } from "gatsby-plugin-image"

import Box from '@mui/material/Box';

import Icon from '@mui/material/Icon';
import AppleIcon from '@mui/icons-material/Apple';
import FacebookIcon from '@mui/icons-material/Facebook';
import GoogleIcon from '@mui/icons-material/Google';

import Layout from "../components/layout"
import Seo from "../components/seo"
import * as styles from "../components/index.module.css"
import CustomInput from "../components/CustomInput/CustomInput";
import Button from "../components/Button/Button";

const links = [
  {
    text: "Army Week",
 url: "https://acims.mil.ca/plan/AGM/Pages/welcome.aspx",
    description:
      "Army Week on Sharepoint.",
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
    badge: true
  },
{ text: "Profile", url: "Profile" },
{ text: "Calendar", url: "Calendar" },
{ text: "Lookup Materials", url: "lookup-materials" },
{ text: "FAQ", url: "faq" },
{ text: "Server Side Rendering", url: "using-ssr" }
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

const handleChange = e => {
  this.setState({ [e.currentTarget.id]: e.currentTarget.value });
};

const IndexPage = () => (
  
  <Layout>
    
    
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
      <div className="App">
        <form className="form">
          <CustomInput
            labelText="Email"
            id="email"
            formControlProps={{
              fullWidth: true
            }}
            
            type="text"
          />
          <CustomInput
            labelText="Password"
            id="password"
            formControlProps={{
              fullWidth: true
            }}

            type="password"
          />

          <Button type="button" color="primary" className="form__custom-button">
            Log in
          </Button>
        </form>
        <Box
      sx={{
        '& > :not(style)': {
          m: 2,
        },
      }}
    >
      <FacebookIcon color="primary">Google</FacebookIcon>
      <GoogleIcon color="primary">Apple</GoogleIcon>
      <AppleIcon color="primary">Facebook</AppleIcon>
      
      
      
    </Box>
      </div>
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




//const Head = () => <Seo title="Home" />

export default IndexPage
