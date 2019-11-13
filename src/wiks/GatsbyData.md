---
title: "Dynamic Data"
date: "2019-11-11"

---

# Dynamic Data in Gatbsy

Gatbsy allows us to use GraphQL to bring in dynamic data, out of the box. We can also use the `gatsby-config.js` file to declare any of our site specific relevant meta data, which will then populate those entries into graphQL queries for us:

`gatsby-config.js`:

```js
module.exports = {
  siteMetaData: {
    title: 'Full-Stack Bootcamp',
    author: 'Andrew Mead'
  }
  plugins: [`gatsby-plugin-sass`]
}

```



Now this data is accessible to us via our graphQL endpoint: http://localhost:8000/___graphQL

![image-20191110123538069](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tgqkhex1j312g0qo77g.jpg)

> this is gatsby's implementation of the `GraphiQL` ide for graphQL. This allows us to navigate throughour data, using automatically generated query parameters similiar to a rest api's functionality. 

![image-20191110124542825](https://tva1.sinaimg.cn/large/006y8mN6gy1g8th0z967jj311y0gzq58.jpg)

> ```graphQL
> query {
>   site {
>     siteMetadata {
>       author
>       title
>     }
>   }
> }
> ```
>
> query which returns the `siteMetadata` from `gatsby-config.js`



We can then use this data on the client side, using it to populate our site's content:

`src/components/header.js`:

```jsx
import { Link, graphQl, useStaticQuery } from "gatsby";
```

> `graphQL` - gives access to the graphQL api, `useStaticQuery` allows us to query the api from inside our components:

```jsx
const data = useStaticQuery(graphql`
   query {
    site {
      siteMetadata {
        title
      }
    }
  }
`)
```

```jsx
<h1>
  <Link className={headerStyles.title}>{data.site.siteMetadata.title}</Link>
</h1>
```





## GraphQL Playground

```shell
npm install --save-dev env-cmd
```

> **Note:** we only need this change to occur on our development server

create new file to house <u>development</u> enviroment variables:

`.env.development`:

```
GATSBY_GRAPHQL_IDE=playground
```

update `package.json` to use the new `env-cmd` variables during development:

```json
"develop": "env-cmd -f .env.development gatsby develop",
```

This now gives us a new IDE at our graphQL endpoint: http://localhost:8000/___graphql

![image-20191110130707862](https://tva1.sinaimg.cn/large/006y8mN6gy1g8thnb1v4sj312c0qqjvd.jpg)



## Import Markdown Data:

All markdown data can have `.yml` front-matter defined as such:

```yml
---
title: "The Great Gatsby Bootcamp: React"
date: "2019-05-04"
---
```

> this is similar to our siteMetadata in that these are fields that our markdown file now exposes for use to be able to target and use. 

Other than that we can create the rest of the content in markdown:

`src/wiki/posts/gatsby.md`:

```md
---
title: "The Great Gatsby Bootcamp"
date: "2019-04-04"
---



Check this out!



## Topics

1. Gatsby
2. GraphQL
3. React
```



This data exists on our filesystem so we'll need a gatsby plugin that helps us `source` this data from the filesystem: 

https://www.gatsbyjs.org/packages/gatsby-source-filesystem/?=source-file#gatsby-source-filesystem

>### gatsby-source-filesystem
>
>A Gatsby source plugin for sourcing data into your Gatsby application from your local filesystem.
>
>The plugin creates `File` nodes from files. The various Ã¢ÂÂtransformerÃ¢ÂÂ plugins can transform `File` nodes into various other types of data e.g. `gatsby-transformer-json` transforms JSON files into JSON data nodes and `gatsby-transformer-remark` transforms markdown files into `MarkdownRemark` nodes from which you can query an HTML representation of the markdown.
>
>#### Install
>
>```shell
>npm install --save gatsby-source-filesystem
>```
>
>
>
>#### How to use
>
>`gatsby-config.js`:
>
>```javascript
>module.exports = {
>  plugins: [
>    // You can have multiple instances of this plugin
>    // to read source nodes from different locations on your
>    // filesystem.
>    //
>    // The following sets up the Jekyll pattern of having a
>    // "pages" directory for Markdown files and a "data" directory
>    // for `.json`, `.yaml`, `.csv`.
>    `gatsby-plugin-sass`,
>    {
>      resolve: `gatsby-source-filesystem`,
>      options: {
>        name: `posts`,
>        path: `${__dirname}/wiki/posts`,
>      },
>    }
>  ],
>}
>```
>
>> We're now resolving this plugin and configuring it to handle all file sin the `posts/` directory.



## Querying FileSytem

Once we've correctly configured the plugin `gatsby-source-filesystem`, we should have 4 new queries available to us:

![image-20191110134430706](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tiq684ohj308a0bzdgm.jpg)

> `file, allFile, directory, allDirectory`

```
 # Write your query or mutation here
query {
  allFile {
    edges {
      node {
        name
        dir
      }
    }
  }
}
```

![image-20191110143622276](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tk8bkm4kj30tw0d7aba.jpg)



Now that we're able to access and target our markdown files, we can then tackle how to get those `markdown` files displayed as `html` posts, this is done using `gatsby-transformer-remark`

https://www.gatsbyjs.org/packages/gatsby-transformer-remark/?=remark#gatsby-transformer-remark

> ## gatsby-transformer-remark
>
> Parses Markdown files using [Remark](http://remark.js.org/).
>
> #### Install
>
> ```
> npm install --save gatsby-transformer-remark
> ```
>
> #### How to use
>
> `gatsby-config.js`
>
> ```javascript
> plugins: [
>     `gatsby-transformer-remark`,
>   ]
> ```
>
> ![image-20191110144219851](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tkecatsdj308n0fpq45.jpg)
>
> this now allows two new queries (related to markdown) `markdownRemark, allMarkdownRemark`



```
query {
  allMarkdownRemark {
    edges {
      node{
        frontmatter{
          title
          date
        }
        html
        excerpt
      }
    }
  }
}
```

![image-20191110144554338](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tki4vu6qj30zb0lv411.jpg)

> now we are able to access not only the file system but also the markdown files are now parsed as html directly.
>
> ![image-20191110145247949](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tkp89srhj30xg0oyaf2.jpg)

`src/pages/blog.js`:

```jsx
import { graphql, useStaticQuery } from "gatsby";
```

```jsx
export default () => {
  const data = useStaticQuery(graphql`
  query {
  allMarkdownRemark {
    edges {
      node{
        frontmatter{
          title
          date
        }
        id
        html
        excerpt
      }
    }
  }
}
  `)

  })
  return (
    <Layout>
      <h1>Blog</h1>
      <p>Posts will show up here...</p>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.id}>
              <h2>{edge.node.frontmatter.title}</h2>
              <p>{edge.node.frontmatter.date}</p>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
```

> now we are able to query our data from markdown files on the filesystem then parsing those files to html and render them out to the dom

![image-20191110150936275](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tl6r18nzj30ks0qmgmx.jpg)





## Generate Pages From Dynamic Data:

In order to generate pages dynamically we'll need to utilize another gatsby feature: 

https://www.gatsbyjs.org/docs/node-apis/

which can be configured by: `/gatby-node.js`:

```js
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  console.log(JSON.stringify(node, undefined, 4))
}
```

We're specifically targeting an event when a node gets created using `onCreateNode` allowing us to attach data to an individual node. <u>To test this we'll need to restart the server</u>

> ### [`onCreateNode`](https://www.gatsbyjs.org/docs/node-apis/#onCreateNode)
>
> [Source]:(https://github.com/gatsbyjs/gatsby/blob/1acac83c928dd46e245d37e77aee878bfd43f167/packages/gatsby/src/redux/actions/public.js#L831-L836)
>
> Called when a new node is created. Plugins wishing to extend or transform nodes created by other plugins should implement this API.
>
> See also the documentation for [`createNode`](https://www.gatsbyjs.org/docs/actions/#createNode) and [`createNodeField`](https://www.gatsbyjs.org/docs/actions/#createNodeField)
>
> #### Example
>
> ```javascript
> exports.onCreateNode = ({ node, actions }) => {
>   const { createNode, createNodeField } = actions
>   // Transform the new node here and create a new node or
>   // create a new node field.
> }
> ```



the above log will output metadata regarding each node, as that node gets created, this node contains information about itself and the content that gets attached to it.

```shell
{
    "internalComponentName": "ComponentAbout",
    "path": "/about/",
    "component": "/Users/bunty/werk/gatsbyBC/src/pages/about.js",
    "componentChunkName": "component---src-pages-about-js",
    "isCreatedByStatefulCreatePages": true,
    "context": {},
    "pluginCreator___NODE": "33bef912-7608-539f-aa9b-1d2e0d0b0538",
    "pluginCreatorId": "33bef912-7608-539f-aa9b-1d2e0d0b0538",
    "componentPath": "/Users/bunty/werk/gatsbyBC/src/pages/about.js",
    "id": "SitePage /about/",
    "parent": null,
    "children": [],
    "internal": {
        "type": "SitePage",
        "contentDigest": "ffd53907660005002a17230474968bb4",
        "description": "33bef912-7608-539f-aa9b-1d2e0d0b0538",
        "counter": 27,
        "owner": "internal-data-bridge"
    }
}
```

> that is the output from the node that the aboutPage gets mounted to.
>
> **NOTE:**  amongst other content the type of node for site-pages is different than the type of node for markdown content. So based on type we can determine the type of data that will be available to us.
>
> ```
> // site-page node: "type": "SitePage",
> 
> // markdown page node: type": "MarkdownRemark",
> ```



`gatsby-node.js`:

```js
module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    console.log(JSON.stringify(node, undefined, 4))
  }
}
```

> ```
> {
>     "id": "1040f765-9145-5f3e-8722-70f44b320ea1",
>     "children": [],
>     "parent": "a73dda0a-1f8f-5d8c-a504-a900f4653161",
>     "internal": {
>         "content": "\n\n\nCheck this out!\n\n\n\n## Topics\n\n1. Gatsby\n2. GraphQL\n3. React",
>         "type": "MarkdownRemark",
>         "contentDigest": "ad50b099d1e51c37c0ba43fcd406bee5",
>         "counter": 24,
>         "owner": "gatsby-transformer-remark"
>     },
>     "frontmatter": {
>         "title": "The Great Gatsby Bootcamp",
>         "date": "2019-04-04"
>     },
>     "excerpt": "",
>     "rawMarkdownBody": "\n\n\nCheck this out!\n\n\n\n## Topics\n\n1. Gatsby\n2. GraphQL\n3. React",
>     "fileAbsolutePath": "/Users/bunty/werk/gatsbyBC/wiki/posts/gatsby.md"
> }
> {
>     "id": "f1cc6844-3091-594a-9320-84954a227980",
>     "children": [],
>     "parent": "5c08c565-e359-545e-ae1c-db063ac95fa1",
>     "internal": {
>         "content": "\n\n\nCheck this out!\n\n\n\n## Topics\n\n1. React\n\n",
>         "type": "MarkdownRemark",
>         "contentDigest": "bd617ba43963570ab1271e64daac7541",
>         "counter": 25,
>         "owner": "gatsby-transformer-remark"
>     },
>     "frontmatter": {
>         "title": "The Great Gatsby Bootcamp: React",
>         "date": "2019-05-04"
>     },
>     "excerpt": "",
>     "rawMarkdownBody": "\n\n\nCheck this out!\n\n\n\n## Topics\n\n1. React\n\n",
>     "fileAbsolutePath": "/Users/bunty/werk/gatsbyBC/wiki/posts/react.md"
> }
> ```
>
> log from only `type = "MarkdownRemark"` nodes.



Now we'll need to convert our file name to a slug that we can then use to access that file as a page. To do this we can use Node.js `path` module, its `basename()` method to grab the file name and remove the file-extension from the filename:

> ## path.basename(path[, ext])[#](https://nodejs.org/api/path.html#path_path_basename_path_ext)
>
> https://nodejs.org/api/path.html
>
> History
>
> -  [`path`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
> -  [`ext`](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type) An optional file extension
> -  [Returns:](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Data_structures#String_type)
>
> The `path.basename()` methods returns the last portion of a `path`, similar to the Unix `basename` command. Trailing directory separators are ignored, see [`path.sep`](https://nodejs.org/api/path.html#path_path_sep).
>
> ```js
> path.basename('/foo/bar/baz/asdf/quux.html');
> // Returns: 'quux.html'
> 
> path.basename('/foo/bar/baz/asdf/quux.html', '.html');
> // Returns: 'quux'
> ```



`gatsby-config.js`:

```js
 const path = require('path') // require path module from Node.js

module.exports.onCreateNode = ({ node, actions }) => {
  const { createNodeField } = actions
  if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    // slug = filename - file-extension

    // console.log(JSON.stringify(node, undefined, 4))
    console.log(`@@@@@@@@@@@@${slug}@@@@@@@@@@@@@@`)
  }
}
```

> the extracted slugs logged to the console:
>
> ```
> @@@@@@@@@@@@react@@@@@@@@@@@@@@
> @@@@@@@@@@@@gatsby@@@@@@@@@@@@@@
> ```



Next we'll need to associate that slug to each markdown node:

`gatsby-node.js`:

```js
if (node.internal.type === 'MarkdownRemark') {
    const slug = path.basename(node.fileAbsolutePath, '.md')
    createNodeField({
      node,
      name: 'slug',
      value: slug
    })
```

Now this data should be available to our entire application:

```
query {
  allMarkdownRemark {
    edges {
      node{
        frontmatter{
          title
          date
        }
        id
        html
        excerpt
        fields{
          slug
        }
      }
    }
  }
}
```

![image-20191110160753857](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tmvd97eoj30w30j1774.jpg)



#### Templating Dynamic Pages

`src/templates/blog.js`:

```jsx
import React from 'react'
import Layout from "../components/Layout"

export const Blog = () => {
  return (
    <Layout>
      Blog Template
    </Layout>
  )
}
```



Now in order to get our markdown content to use these pages we'll need to utilize another method from the `gatsby-node api`:

> ### [`createPages`](https://www.gatsbyjs.org/docs/node-apis/#createPages)
>
> Source[1](https://github.com/gatsbyjs/gatsby/blob/1acac83c928dd46e245d37e77aee878bfd43f167/packages/gatsby/src/bootstrap/index.js#L452-L461)[2](https://github.com/gatsbyjs/gatsby/blob/1acac83c928dd46e245d37e77aee878bfd43f167/packages/gatsby/src/bootstrap/page-hot-reloader.js#L40-L48)
>
> Tell plugins to add pages. This extension point is called only after the initial sourcing and transformation of nodes plus creation of the GraphQL schema are complete so you can query your data in order to create pages.
>
> See also [the documentation for the action `createPage`](https://www.gatsbyjs.org/docs/actions/#createPage).

`gatsby-node.js`:

```js
module.exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;

  // 1. Get path to template:
  const blogTemplate = path.resolve('./src/templates/blog.js')
  // 2. get markdown data
  const res = await graphql(`
    query {
      allMarkdownRemark {
        edges {
          node{
            fields{
              slug
            }
          }
        }
      }
    }
  `)

  // 3. create new pages
  res.data.allMarkdownRemark.edges.forEach((edge) => {
    console.log(edge)
    createPage({
      component: blogTemplate, // template to use
      path: `/blog/${edge.node.fields.slug}`, // route definition from slug
      context: {
        slug: edge.node.fields.slug
        // passes in the slug so that the context has access to the associated data.
      }
    })
  })
}
```

NOW RESTART FOR CHANGES

![image-20191110163613251](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tnouyhr3j30kq0bmdgp.jpg)

![image-20191110163631021](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tnp3lm7zj30kt0azwfd.jpg)



Now we can take advantage and add links to each of these pages as they get generated:

`src/pages/blog.js`

```jsx
import React from 'react'
import { Link, graphql, useStaticQuery } from "gatsby";
import Layout from "../components/layout"


export default () => {
  const data = useStaticQuery(graphql`
  query {
  allMarkdownRemark {
    edges {
      node{
        frontmatter{
          title
          date
        }
        id
        html
        excerpt
        fields {
          slug
        }
      }
    }
  }
}
  `)

  return (
    <Layout>
      <h1>Blog</h1>
      <ol>
        {data.allMarkdownRemark.edges.map(edge => {
          return (
            <li key={edge.node.id}>
              <Link to={`/blog/${edge.node.fields.slug}`}>
                <h2>{edge.node.frontmatter.title}</h2>
                <p>{edge.node.frontmatter.date}</p>
              </Link>
            </li>
          )
        })}
      </ol>
    </Layout>
  )
}
```

![image-20191110164648982](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tnzvhwkoj30kj09eq3g.jpg)



And then finally we can customize the blog page layout template to properly display the data we're loading from our markdown files:

To achieve this we'll be using a dynamic query that takes in a `slug` and returns back the relevant data for that particular `slug`:

![image-20191110182027152](../../../Library/Application Support/typora-user-images/image-20191110182027152.png)

```
query {
  markdownRemark(
    fields: {
      slug: {
        eq: "react"
      }
    }
  ) {
    frontmatter{
      title
    }
  }
}
```

> ![image-20191110182303821](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tqs05n8bj30v409b0th.jpg)
>
> we are able to use the `eq` / "equality" operator to compare each value against our `slug`, by passing it as an argument to our query.
>
> This argument can be passed in dynamically and we cam simulate that by defining query variables in the playground: 
>
> ```
> {
>   "slug": "react"
> }
> ```
>
> and then we can re-define the query to take in this dynamic slug:

```
query(
  $slug: String
) {
  markdownRemark(
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter{
      title
    }
  }
}
```

![image-20191110182842227](../../../Library/Application Support/typora-user-images/image-20191110182842227.png)

`src/templates/blog.js`

```jsx
export const query = graphql`
query($slug: String) {
  markdownRemark(
    fields: {
      slug: {
        eq: $slug
      }
    }
  ) {
    frontmatter{
      title
    }
    html
  }
}
`
```

> we can place this query outside of our component as this is not our standard `static` query. Now the variable `$slug` is available within the component via the `context` we initially setup.

`src/templates/blog.js`

```jsx
export default(props) => {

  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
    </Layout>
  )
}
```

![image-20191110192805467](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tsnno4aqj30ky0fdwf7.jpg)

Now we can add the rest of the content from the markdown files:

```jsx
  return (
    <Layout>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html}}></div>
    </Layout>
  )
```

> **NOTE:** `dangerouslySetInnerHTML` is how react wants us to append HTML elements to the dom. 

![image-20191110193015579](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tspxboczj30kz0iot9n.jpg)

> That finally pulls in the rest of our HTML



## Rendering Images from External Files

![image-20191110193555761](../../../Library/Application Support/typora-user-images/image-20191110193555761.png)

We've added an image to one of our posts, the file sits in the directory next to the file itself. but when we try to allow gatsby to render it, it isn't able to:

![image-20191110193714023](../../../Library/Application Support/typora-user-images/image-20191110193714023.png)



This is because gatsby needs to be configured in order to be able to properly handle this external image, to do this we'll need to install and configure a few plugins:

```shell
npm install gatsby-plugin-sharp@2.0.32 gatsby-remark-images@3.0.10 gatsby-remark-relative-images@0.2.2
```

Next we'll need to configure our plugin settings for each of these:

`gatsby-config.js`:

```js
module.exports = {
  siteMetadata: {
    title: 'Full-Stack Bootcamp',
    author: 'This GuyÃ°ÂÂ¤Â·Ã°ÂÂÂ¼Ã¢ÂÂÃ¢ÂÂÃ¯Â¸Â '
  },
  plugins: [
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/wiki/posts`,
      },
    },
    
    `gatsby-plugin-sharp`,
    `gatsby-transformer-remark`
  ]
}
```

> **Note:** the order the plugins are defined matters, we want to ensure that our image processing loads before our markdown parsing. We'll also need to configure the other two plugins which are `remark`- specific, and will need to be defined as options of remark:

```js
{
  resolve: `gatsby-transformer-remark`,
    options: {
      plugins: [
        `gatsby-remark-relative-images`,
        {
          resolve: `gatsby-remark-images`,
          options: {
            maxWidth: 750,
            linkImagesToOriginal: false
          }
        }
      ]
    }
}
```

> we've setup two plugins as plugins of `gatsby-transformer-remark` ,  the first had no options that need to be configured so it can be defined as a simple string, while the second does have options and is defined as an object so we can use the options property on the object to define it's configurations which tells gatsby how to handle our images. 

![image-20191110194757635](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tt8fe5a0j30kl0qowng.jpg)



Styling:

`src/components/footer.module.scss`

```scss
.footer {
  margin-top: 3rem;
}
```

`src/components/footer.js`:

```jsx
import footerStyles from './footer.module.scss'
```

```jsx
<footer className={footerStyles.footer}>
```



`src/pages/blog.module.scss`

```scss
.posts {
  list-style-type: none;
  margin: 0;
}

.post {
  margin: 1rem 0;
  a {
    background: #f4f4f4;
    color: #000000;
    display: block;
    padding: 1rem;
    text-decoration: none;
  }
  
  a:hover {
    background: #e4e4e4;
  }
  
  h2 {
    margin-bottom: 0;
  }
  
  p {
    color: #777777;
    font-size: 0.8rem;
    font-style: italic;
  }
}
```

`src/pages/blog.js`

```jsx
import blogStyles from "./blog.module.scss"	
```

```jsx
<ol className={blogStyles.posts}>
  <li className={blogStyles.post}>
```

![image-20191110201049730](https://tva1.sinaimg.cn/large/006y8mN6gy1g8ttw4s5kij30kj0qqjsm.jpg)



