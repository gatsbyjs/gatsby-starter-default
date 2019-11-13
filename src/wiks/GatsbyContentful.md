---
title: "Gatsby Contentful"
date: "2019-11-11"

---

# Contentful gatsby integration



![image-20191110202036043](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tu6x5nosj312a0hq0th.jpg)

![image-20191110202142535](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tu7f4po0j30lz0jk0v4.jpg)

![image-20191110202048274](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tu6yjhrvj30lw0dlt9v.jpg)

![image-20191110202156022](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tu7o8jhuj30ls0b1wfp.jpg)

![image-20191110202211119](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tu7wtepij311x0of78x.jpg)



Next we can create a content model that we can add some structured data to to replicate the data that we were getting from markdown:

![createContentModel](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tuaw3gobg312e0qsqv5.gif)



![createTitle](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tui7p1hyg312e0qqe81.gif)

![image-20191110203044090](../../../Library/Application Support/typora-user-images/image-20191110203044090.png)

> The 4 types of structured data we'll need, as well as the type for each.

![createPosts](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tunt38mgg312e0skx6s.gif)

Now that we have some posts and data that we can work with in contentful, we can integrate that data from contentful into our site, using another gatsby plugin used just for this:

https://www.gatsbyjs.org/packages/gatsby-source-contentful/?=contentful#gatsby-source-contentful

> ## gatsby-source-contentful
>
> Source plugin for pulling content types, entries, and assets into Gatsby from Contentful spaces. It creates links between entry types and asset so they can be queried in Gatsby using GraphQL.
>
> An example site for using this plugin is at https://using-contentful.gatsbyjs.org/
>
> #### Install
>
> ```
> npm install --save gatsby-source-contentful
> ```
>
> #### How to use
>
> First, you need a way to pass environment variables to the build process, so secrets and other secured data arenÃ¢ÂÂt committed to source control. We recommend using [`dotenv`](https://github.com/motdotla/dotenv) which will then expose environment variables. [Read more about dotenv and using environment variables here](https://gatsby.dev/env-vars). Then we can *use* these environment variables and configure our plugin.
>
> `.env.development`
>
> ```
> CONTENTFUL_SPACE_ID=amymailrwozs
> CONTENTFUL_ACCESS_TOKEN=2mnZoCTZ7wXfbS8GmpxS1uVCjcP_CkL5ahF4SpApRhA
> ```
>
> `gatsby-config.js`:
>
> ```js
> module.exports = {
>   plugins: [
>     {
>       resolve: `gatsby-source-contentful`,
>       options: {
>         spaceId: process.env.CONTENTFUL_SPACE_ID,
>         accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
>       },
>     },
>   ],
> }
> ```

We need to quickly add an image asset via contentful or else it seems to throw some errors:

![image-20191110205904103](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tvacin5jj312i0my464.jpg)

With this in place we now have access to several new queries along with the fields we defined in our content model:

![image-20191110205958563](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tvb9d7gqj30g90oq0xg.jpg)

![image-20191110210115315](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tvcmaqarj312g0g50ul.jpg)





## Render posts from Contentful

We can use arguments in our query to do things like sort and filter through our data:

![image-20191110213843185](https://tva1.sinaimg.cn/large/006y8mN6gy1g8twfm5tz4j30zz0dddhi.jpg)

here we've sorted our contentful posts by publishedDate in an ASC (ascending) order.

 

Next we may want to display a more human-friendly date syntax:

![image-20191110214100790](https://tva1.sinaimg.cn/large/006y8mN6gy1g8twhzixw3j30x20j5q7p.jpg)

As we can see the `publishedDate` field accepts several arguments that can help us.

![image-20191110214258012](https://tva1.sinaimg.cn/large/006y8mN6gy1g8twk0why9j30ys0epgne.jpg)

The syntax used for the formatString date pattern argument, is using the `moment.js` library. Which returns a more readable date. https://momentjs.com/

Now that we have the query for the particular data we want to use, we can bring it into our application:

`src/pages/blog.js`

```jsx
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
  },
  allContentfulBlogPost(sort: {
        fields: publishedDate,
        order: ASC

      }) {
        edges {
          node {
            title
            slug
            publishedDate(formatString:"MMMM Do, YYYY")
          }
        }
      }
    }
  `)

```

Then this can be used to render our data:

```jsx
{data.allContentfulBlogPost.edges.map(edge => {
  return (
    <li key={edge.id} className={blogStyles.post}>
      <Link to={`/blog/${edge.node.slug}`}>
        <h2>{edge.node.title}</h2>
        <p>{edge.node.publishedDate}</p>
      </Link>
    </li>
  )
})}
```



Now we can display the posts by targeting the particular post based on its slug:

![image-20191110220240059](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tx4i6o7jj30z50n60uf.jpg)



First we need to tell gatsby how to handle the new posts:

`gatsby-node.js`

```js
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
      contentfulBlogPost {
        edges {
          node {
            slug
          }
        }
      }
    }
  `)
```

> modified query to grab both markdown and contentful posts

````js
  res.data.allContentfulBlogPost.edges.forEach((edge) => {
    createPage({
      component: blogTemplate,
      path: `/blog/${edge.node.slug}`,
      context: {
        slug: edge.node.slug
      }
    })
  })
````

> handles the templating when the slug is encoutered as a route.

`src/template/blog.js`

```jsx
export const query = graphql`
query($slug: String!) {
  markdownRemark( fields: { slug: { eq: $slug } } ) {
    frontmatter { title }
    html
  },
  contentfulBlogPost( slug:{ eq: $slug}) {
    id
    title
    publishedDate(formatString: "MMMM Do, YYYY")
  }
}
`
```

> modified query to handle both post types

We've also modified the template file to serve up both files conditionally:

```jsx
<Layout>
  {props.data.markdownRemark && (
    <>
      <h1>{props.data.markdownRemark.frontmatter.title}</h1>
      <p>{props.data.markdownRemark.frontmatter.date}</p>
      <div dangerouslySetInnerHTML={{ __html: props.data.markdownRemark.html }}>		
    	</div>
    </>
  )}
  {props.data.contentfulBlogPost && (
    <>
      <h1>{props.data.contentfulBlogPost.title}</h1>
      <p>{props.data.contentfulBlogPost.publishedDate}</p>

    </>
  )}
</Layout>
```



Now let's render the body of our contentful post:

![image-20191110223502206](https://tva1.sinaimg.cn/large/006y8mN6gy1g8ty27f5zej310v0i640r.jpg)

> as we can see we've queried for our body content as json, and it returns a semi-large data-structure that has our content nested within it. To help us work with and parse this data easily contentful provides a library that we can use which returns our posts back as a react component:
>
> https://www.contentful.com/developers/docs/javascript/tutorials/rendering-contentful-rich-text-with-javascript/

```shell
npm i @contentful/rich-text-react-renderer
```

> **USAGE:**
>
> `src/templates/blog.js`:
>
> ```js
>  import { documentToReactComponents } from "@contentful/rich-text-react-renderer"
> ```
>
> ```jsx
> {props.data.contentfulBlogPost && (
>   <>
>     <h1>{props.data.contentfulBlogPost.title}</h1>
>     <p>{props.data.contentfulBlogPost.publishedDate}</p>
>     {documentToReactComponents(props.data.contentfulBlogPost.body.json)}
>   </>
>  )}
> ```

![image-20191110224427222](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tycadug3j30kc0en0tf.jpg)

![image-20191110224450176](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tycf855dj30ky0cq0t8.jpg)

Now we can add more content, including images:

![image-20191110224859806](https://tva1.sinaimg.cn/large/006y8mN6gy1g8tygqq6nxj30zj0klwkb.jpg)

In order for the image to get pulled in we'll have to make a change to 

`src/templates/blog.js` 

```jsx
export default (props) => {
  const options = {
	
  }
  return (
    <Layout>
            {props.data.contentfulBlogPost && (
        <>
          <h1>{props.data.contentfulBlogPost.title}</h1>
          <p>{props.data.contentfulBlogPost.publishedDate}</p>
          {documentToReactComponents(props.data.contentfulBlogPost.body.json, options)}
        </>
      )}
    </Layout>
  )
}
```

> we can pass in options that we define as the 2nd argument to `documentToReactComponents`

`Options ` has a property `renderNode` that helps us define the type of node we want to render, and return a compoent or (jsx) that renders it for us:



**NOTE** if rich-text content image urls don't show up in the query, try replacing the image with a new image in contentful. 

