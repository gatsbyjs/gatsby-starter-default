<p align="center">
  <a href="https://ueno.co">
    <img alt="Gatsby" src="https://i.imgur.com/kXCdETH.png" />
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
    gatsby new test-www "https://github.com/ueno-llc/ueno-gatsby-starter#master --recursive"
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

A quick look at the top-level files and directories you'll see in a Ueno Gatsby project.

    .
    ├── node_modules
    ├── src
    │   ├── assets
    │   ├── components
    │   ├── pages
    │   ├── styles
    │   ├── utils
    │   └── typings.d.ts
    ├── .stylelintrc
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

See [Gatsby default starter](https://github.com/gatsbyjs/gatsby-starter-default#-whats-inside) for details.

  1.  **`/src/assets`**: This directory will contain all of the assets you will need for your site. We recommend dividing assets into subdirectories like `images`, `videos`, etc. Also there is a special directory `svg`, that when files from that directory have the extension `.svg`, will be imported as React components.
  
  2.  **`/src/pages`**: This directory will include all the rendered pages with `index.tsx` being `/`.
  
  3.  **`/src/typings.d.ts`**: You can add typing definitions here for weird things like assets and other non-typed things. Also if you can't find typing definitions for a package with @types, you can declare the module here.
  
  4.  **`.stylelintrc`**: This is a configuration file for making sure the css is up to a opinionated standard. You can add or remove rules here.

  5.  **`.editorconfig`**: This file tells the editor what indentation rules to use. Make sure you have the Editorconfig extension installed in your editor.

  6.  **`app.json`**: This is a configuration file for platforms like Heroku. We can define required environment variables and so on.
  
  7.  **`tsconfig.json`**: A configuration file for the typescript engine, similar to babelrc.
  
  8.  **`tslint.json`**: A configuration file for typescript rules, similar to eslint.
  

## Things to know

There are couple of things that are good to know about this starter, compared to the default gatsby starter.

### TypeScript

We encourage TypeScript usage and have included basic linting.

- Avoid `export default ...` - the only place you absolutely need to do this is in `./pages/*`. Rather `export const Module = ...` and `import { Module } from './file'` ([details](https://basarat.gitbooks.io/typescript/docs/tips/defaultIsBad.html))

See the [TypeScript Handbook](https://basarat.gitbooks.io/typescript) for more tips and tricks


### SCSS

All `.scss` and `.sass` imports will:

- include the [classnames package](https://www.npmjs.com/package/classnames-loader)
- output [css modules](https://github.com/css-modules/css-modules)

Take the following code snippet as an example:

```tsx
import React from 'react';
import s from './my-styles.scss';
 
export const Button = ({ disabled, children }: { disabled: boolean, children: React.ReactNode }) => (
  <button className={s('button', { disabled })}>{children}</button>
);
```

### SVG

You can import SVG files as React components by placing them in the `./src/assets/svg` folder.

Usage:
```tsx
import React from 'react';
import Logo from 'assets/svg/logo.svg';

export const Header = () => (
  <header>
    <Logo style={{ color: 'blue' }} />
  </header>
);
```


## 🎓 Learning Gatsby

Looking for more guidance? Full documentation for Gatsby lives [on the website](https://next.gatsbyjs.org/). Here are some places to start:

-   **For most developers, we recommend starting with our [in-depth tutorial for creating a site with Gatsby](https://next.gatsbyjs.org/tutorial/).** It starts with zero assumptions about your level of ability and walks through every step of the process.

-   **To dive straight into code samples head [to our documentation](https://next.gatsbyjs.org/docs/).** In particular, check out the “Guides”, API reference, and “Advanced Tutorials” sections in the sidebar.

## 💫 Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
