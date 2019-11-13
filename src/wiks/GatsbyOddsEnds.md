---
title: "Gatsby odds and ends"
date: "2019-11-11"


---

# 404 Pages and React Helmet

Setup a 404 page `src/pages/404.js`:

```jsx
import React from 'react'
import { Link } from 'gatsby'
import Layout from '../components/layout'

export default () => {
  return (
    <Layout>
      <h1> Page Not Found</h1>
      <p><Link to="/">Go Back</Link></p>
    </Layout>
  )
}

```

![image-20191111003121287](https://tva1.sinaimg.cn/large/006y8mN6gy1g8u1fbkghxj30ku0lcq3l.jpg)





## Setup React Helmet

> ## gatsby-plugin-react-helmet
>
> https://www.gatsbyjs.org/packages/gatsby-plugin-react-helmet/
>
> Provides drop-in support for server rendering data added with [React Helmet](https://github.com/nfl/react-helmet).
>
> React Helmet is a component which lets you control your document head using their React component.
>
> With this plugin, attributes you add in their component, e.g. title, meta attributes, etc. will get added to the static HTML pages Gatsby builds.
>
> This is important not just for site viewers, but also for SEO Ã¢ÂÂ title and description metadata stored in the document head is a key component used by Google in determining placement in search results.
>
> #### Install
>
> ```
> npm install --save gatsby-plugin-react-helmet react-helmet
> ```
>
> #### How to use
>
> Just add the plugin to the plugins array in your `gatsby-config.js`
>
> ```javascript
> plugins: [`gatsby-plugin-react-helmet`]
> ```



`src/components/head.js`

```jsx
import React from 'react'
import { Helmet } from 'react-helmet'

const Head = () => {
  return (
    <Helmet title="this is a test of the head" />
  )
}

export default Head
```

`src/pages/index.js`

```jsx
import Head from "../components/head"

export default () => (
  <Layout>
    <Head/>
  	{/* ... */}
  </Layout>
);
```

> this changes our document title to the title we define in the head, which we can see output in our browser tab title:
>
> ![image-20191111003802491](https://tva1.sinaimg.cn/large/006y8mN6gy1g8u1m6186vj30l60cjq48.jpg)



We'll want to make this site-title a dynamic field:

`src/components/head.js`

```jsx
import {useStaticQuery} from 'gatsby'

const Head = ({ title }) => {
  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          title
        }
      }
    }
  `)
  return (
    <Helmet title={`${title} | ${data.site.siteMetadata.title}`} />
  )
}
```

![image-20191111004407424](https://tva1.sinaimg.cn/large/006y8mN6gy1g8u1si0gspj30hj0c9q43.jpg)

