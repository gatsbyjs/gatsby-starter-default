---
title: "Gatsby Basics"
date: "2019-11-11"

---



https://www.npmjs.com/package/gatsby

https://www.gatsbyjs.org/docs/



Starting A New Gatsby Project:

```shell
gatsby new <PROJECT_NAME> https://github.com/gatsbyjs/gatsby-starter-hello-world
```

Starter Libraries: https://www.gatsbyjs.org/starters/?v=2



Start Gatsby Server: 

```shell
npm run develop
```

> You can now view gatsby-starter-hello-world in the browser.
> Ã¢Â Â
>   http://localhost:8000/
> Ã¢Â Â
> View GraphiQL, an in-browser IDE, to explore your site's data and schema
> Ã¢Â Â
>   http://localhost:8000/___graphql
> Ã¢Â Â
> Note that the development build is not optimized.
> To create a production build, use gatsby build

![image-20191110013718323](https://tva1.sinaimg.cn/large/006y8mN6gy1g8sxpl78cgj30rt0a4t9b.jpg)

currently being served by: `src/pages/index.js`

```jsx
import React from "react"

export default () => <div>Hello world!</div>
```

The pages directory is gatsby's default directory which is why `index.js` gets served from here



Creating new pages is as simple  as added a new `.js` file to the `/pages` directory:

`src/pages/blog.js`:

```jsx
import React from 'react'

export default BlogPage = () => {
  return (
    <div>
      <h1>Blog</h1>
      <p>Posts will show up here...</p>
    </div>
  )
}
```

![image-20191110014826827](https://tva1.sinaimg.cn/large/006y8mN6gy1g8sy14g782j30kg06rdgc.jpg)

`src/pages/about.js`

```jsx
import React from 'react'

export default () => {
  return (
    <div>
      <h1>About</h1>
      <p>About text here Lorem ipsum dolor sit amet consectetur adipisicing eli</p>
    </div>
  )
}
```

`src/pages/contact.js`

```jsx
import React from 'react'

export default () => {
  return (
    <div>
      <h1>Contact</h1>
      <p>holla: <a href="http://twitter.com/gaurangrshah" target="_blank" rel="noopener noreferrer">@sohamasmi</a></p>
    </div>
  )
}
```

> **Note**: linking `<a>` tags with gatsby requires the `rel="noopener noreferrer"` attribute/values:
>
> ```shell
> 9:59  warning  Using target="_blank" without rel="noopener noreferrer" is a security risk: see
> https://mathiasbynens.github.io/rel-noopener  react/jsx-no-target-blank
> ```





## Linking In Gatsby

---



> **NOTE:** `<a>` tags will work, but will cause full page refreshes, and is still recommended when linking to content off-site, but for internal links use the gatsby `<Link>` tag:



https://www.gatsbyjs.org/docs/linking-between-pages/

```js
import {Link} from 'gatsby'
```

usage: `src/pages/index.js`

```jsx
import React from "react"
import { Link } from "gatsby";

export default () => <div>
  <h1>Hello.</h1>
  <p>Developer?<Link to="/contact">Holla atcha boi</Link></p>
</div>
```



Gatsby optimizes the `<Link>` component behind the scenes handling the transition of content, and rendering what needs to be re-rendered, otherwise it can just replace only the content that it needs to.





## Shared Components

---



`/src/components/`

`components/footer.js`:

```jsx
import React from 'react'

export default () => {
  return (
    <footer>
      created with Ã°ÂÂÂ
    </footer>
  )
}
```

`/components/header.js`

```jsx
import React from 'react'
import { Link } from "gatsby";

export default () => {
  return (
    <header>
      <h1>SiteName</h1>
      <nav>
        <ul>
          <li><Link to="/">Home</Link></li>
          <li><Link to="/blog">Blog</Link></li>
          <li><Link to="/about">About</Link></li>
          <li><Link to="/contact">Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
```





## Layout Component

---

We can group together components that we need to display on each page into a single layout component:

`src/components/layout.js`

```jsx
import React from 'react'
import Footer from "../components/footer"
import Header from "../components/header"

export default (props) => {
  return (
    <div>
      <Header />
      {props.children}
      <Footer />
    </div>
  )
}
```



usage:

`src/pages/index.js`:

```jsx
import React from "react"
import { Link } from "gatsby";
import Layout from "../components/layout"

export default () => (
  <Layout>
    <h1>Hello.</h1>
    <p>Developer? <Link to="/contact">Holla atcha boi</Link></p>
  </Layout>
);
```

> this reduces the amount of repeated components we need to import onto each page.





## Setup StyleSheet

---

`src/pages/index.js`:

```js
import "../styles/index.css"
```

> setup directory: `src/styles/index.css`



### Enable SCSS:

https://www.gatsbyjs.org/packages/gatsby-plugin-sass/?=scss

Provides drop-in support for SASS/SCSS stylesheets

#### Install

```shell
npm install --save node-sass gatsby-plugin-sass
```

> **NOTE**:  must install `node-sass` as well to handle scss files.

> #### How to use
>
> 1. Include the plugin in your `gatsby-config.js` file.
>
> `gatsby-config.js`
>
> https://www.gatsbyjs.org/docs/gatsby-config/
>
> ```javascript
> plugins: [`gatsby-plugin-sass`]
> ```
>
> > **NOTE**: `gatsby-config.js` is a `node.js` file, and uses the `module.exports` syntax to export a single object.
>
> 
>
> **MUST RESTART SERVER BEFORE CHANGES WILL TAKE EFFECT**
>
> 
>
> `src/styles/index.scss`
>
> ```css
> $color: green;
> 
> * {
> color: $color;
> }
> 
> ```
>
> `src/pages/index.js`
>
> ```js
> import "../styles/index.scss"
> ```
>
>
> #### Reset Stylesheet:
>
> [reset]:("./cssReset.md")



### Creating Component Stylesheets

> **NOTE**: stylesheets imported by a particular component is not locally scoped to that component, but in fact can affect the entirety of our project, that is why we use css modules for component styles in gatsby:



`src/components/header.module.scss`:

```scss
.link {
  color: #999999;
}
```

> this nomenclature dictates the behavior of this fime as a css module. 

`src/components/header.js`

```jsx
import React from 'react'
import { Link } from "gatsby";
import headerStyles from "./header.module.scss"

export default () => {
  return (
    <header>
      <h1>SiteName</h1>
      <nav>
        <ul>
          <li><Link to="/" className={headerStyles.link}>Home</Link></li>
          <li><Link to="/blog" className={headerStyles.link}>Blog</Link></li>
          <li><Link to="/about" className={headerStyles.link}>About</Link></li>
          <li><Link to="/contact" className={headerStyles.link}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
```

> styles are imported via modules as an object, each property (selector) defined in the styles gets imported as a default import, and applied to each element, allowing for local semantic scoping.
>
> **NOTE**: any `kebab-case` properties from `.scss` selector definitons get references as their `camel-case` counterparts in the corresponding jsx className attribute:

`src/components/header.module.scss`

```scss
.header{
  padding: 1rem 0 3rem;
}

.title {
  color: #000000;
  font-size: 3rem;
  text-decoration: none;
}

.link {
  color: #999999;
}

.nav-list {
  display: flex;
  list-style-type: none;
  margin: 0;
}
```

`src/components/header.js`:

```jsx
import React from 'react'
import { Link } from "gatsby";
import headerStyles from "./header.module.scss"

export default () => {
  return (
    <header className={headerStyles.header}>
      <h1>
        <Link className={headerStyles.title}>SiteName</Link>
      </h1>
      <nav>
        <ul className={headerStyles.navList}>
          <li><Link to="/" className={headerStyles.link}>Home</Link></li>
          <li><Link to="/blog" className={headerStyles.link}>Blog</Link></li>
          <li><Link to="/about" className={headerStyles.link}>About</Link></li>
          <li><Link to="/contact" className={headerStyles.link}>Contact</Link></li>
        </ul>
      </nav>
    </header>
  )
}
```

> **NOTE:**
>
> ```
> scss:
> ".nav-list"
> 
> becomes...
> 
> "navList"
> ```



`src/components/header.module/scss`

```scss
.header{
  padding: 1rem 0 3rem;
}

.title {
  color: #000000;
  font-size: 3rem;
  text-decoration: none;
}

.nav-list {
  display: flex;
  list-style-type: none;
  margin: 0;
}

.nav-item {
  color: #999999;
  font-size: .9rem;
  margin-right: 1.3rem;
  text-decoration: none;
}

.nav-item:hover {
  color: #666666;
}

.active-nav-item {
  color: #333333;
}

```

> **NOTE:** we're able to add pseudo selectors such as `:hover` and setup active styles by using the `activeClassName` prop below:

`src/components/header.js`

```jsx
<ul className={headerStyles.navList}>
  <li>
    <Link to="/" 
      className={headerStyles.navItem} 
      activeClassName={headerStyles.activeNavItem}
      >
      Home
    </Link>
  </li>
</ul>
```



