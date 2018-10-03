<p align="center">
  <a href="https://next.gatsbyjs.org">
    <img alt="Gatsby" src="https://www.gatsbyjs.org/monogram.svg" width="60" />
  </a>
</p>
<h1 align="center">
  Ueno's Gatsby starter
</h1>

Kick off your project with this opinionated boilerplate. This barebones starter ships with the main Gatsby configuration files you might need. 

## 🚀 Quick start

1.  **Install the Gatsby CLI.**

    The Gatsby CLI helps you create new sites using Gatsby starters (like this one!)

    ```sh
    # install the Gatsby CLI globally
    npm install -g gatsby-cli
    ```

2.  **Create a Gatsby site.**

    Use the Gatsby CLI to create a new site, specifying the correct starter.

    ```sh
    # create a new Gatsby site using Ueno's starter
    gatsby new test-www https://github.com/ueno-llc/ueno-gatsby-starter
    ```

3.  **Start developing.**

    Navigate into your new site’s directory and start it up.

    ```sh
    cd test-www/
    gatsby develop
    ```

4.  **Open the source code and start editing!**

    Your site is now running at `http://localhost:8000`!
    
    *Note: You'll also see a second link: `http://localhost:8000___graphql`. This is a tool you can use to experiment with querying your data. Learn more about using this tool in the [Gatsby tutorial](https://next.gatsbyjs.org/tutorial/part-five/#introducing-graphiql).*
    
    Open the the `my-default-starter` directory in your code editor of choice and edit `src/pages/index.js`. Save your changes and the browser will update in real time!
    
## 🧐 What's inside?

A quick look at the top-level files and directories you'll see in a Gatsby project.

    .
    ├── node_modules
    ├── src
    │   ├── assets
    │   ├── components
    │   ├── pages
    │   ├── styles
    │   ├── utils
    │   └── typings.d.ts
    ├── .stylelintrc.json
    ├── .editorconfig
    ├── .gitignore
    ├── app.json
    ├── gatsby-browser.js
    ├── gatsby-config.js
    ├── gatsby-node.js
    ├── gatsby-ssr.js
    ├── LICENSE
    ├── package.json
    ├── README.md
    ├── tsconfig.json
    ├── tslint.json
    └── yarn.lock

  1.  **`/node_modules`**: The directory where all of the modules of code that your project depends on (npm packages) are automatically installed.  
  
  2.  **`/src`**: This directory will contain all of the code related to what you will see on the front-end of your site (what you see in the browser), like your site header, or a page template. “Src” is a convention for “source code”.

  3.  **`/src/assets`**: This directory will contain all of the assets you will need for your site. We recommend dividing assets into subdirectories like `images`, `videos`, etc. Also there is a special directory `svg`, that when files from that directory have the extension `.svg`, will be imported as React components.
  
  4.  **`/src/pages`**: This directory will include all the rendered pages with `index.tsx` being `/`.
  
  5.  **`/src/typings.d.ts`**: You can add typing definitions here for weird things like assets and other non-typed things. Also if you can't find typing definitions for a package with @types, you can declare the module here.
  
  6.  **`.stylelintrc.json`**: This is a configuration file for making sure the css is up to a opinionated standard. You can add or remove rules here.

  7.  **`.editorconfig`**: This file tells the editor what indentation rules to use. Make sure you have the Editorconfig extension installed in your editor.

  8.  **`.gitignore`**: This file tells git which files it should not track / not maintain a version history for.

  9.  **`app.json`**: This is a configuration file for platforms like Heroku. We can define required environment variables and so on.
  
  10.  **`gatsby-browser.js`**: This file is where Gatsby expects to find any usage of the [Gatsby browser APIs](https://next.gatsbyjs.org/docs/browser-apis/) (if any). These allow customization/extension of default Gatsby settings affecting the browser.
  
  11.  **`gatsby-config.js`**: This is the main configuration file for a Gatsby site. This is where you can specify information about your site (metadata) like the site title and description, which Gatsby plugins you’d like to include, etc. (Check out the [config docs](https://next.gatsbyjs.org/docs/gatsby-config/) for more detail).
  
  12.  **`gatsby-node.js`**: This file is where Gatsby expects to find any usage of the [Gatsby node APIs](https://next.gatsbyjs.org/docs/node-apis/) (if any). These allow customization/extension of default Gatsby settings affecting pieces of the site build process.
  
  13.  **`gatsby-ssr.js`**: This file is where Gatsby expects to find any usage of the [Gatsby server-side rendering APIs](https://next.gatsbyjs.org/docs/ssr-apis/) (if any). These allow customization of default Gatsby settings affecting server-side rendering.
  
  14.  **`LICENSE`**: Gatsby is licensed under the MIT license.
  
  15.  **`package.json`**: A manifest file for Node.js projects, which includes things like metadata (the project’s name, author, etc). This manifest is how npm knows which packages to install for your project.
  
  16.  **`README.md`**: A text file containing useful reference information about your project.
  
  17.  **`tsconfig.json`**: A configuration file for the typescript engine, similar to babelrc.
  
  18.  **`tslint.json`**: A configuration file for typescript rules, similar to eslint.
  
  19.  **`yarn.lock`**: This is an automatically generated file based on the exact versions of your npm dependencies that were installed for your project. (You won’t change this file directly).

## Things to know

 - All scss imports are treated as css modules.
 - Imported svg files from `./src/assets/svg` will be React Compontents.


## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://next.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://next.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples head [to our documentation](https://next.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)
