Hi! We are really excited that you are interested in contributing to Gatsby and its related projects part of the [Gatsby organization](https://github.com/gatsbyjs).

Please take a moment to review this document in order to make the contribution process easy and effective for everyone involved.

## Code of Conduct

Help us keep Gatsby open and inclusive—please read and follow our [Code of Conduct](https://www.gatsbyjs.org/code-of-conduct/).

## Issues and general contributing guidelines

Please take a look at our [general contributing guidelines](https://www.gatsbyjs.org/docs/how-to-contribute/) for the main Gatsby repository for universal information on [filing an issue](https://www.gatsbyjs.org/docs/how-to-contribute/#filing-an-issue) and [contributing](https://www.gatsbyjs.org/docs/how-to-contribute/#contributing).

## Pull requests

Good pull requests—bug fixes, improvements, new features—are a great help. Gatsby would not be what it is without the contributions of our community. Please consider the following guidelines:

- Please take a moment before starting to work on any significant pull request (e.g. implementing features or refactoring code) and find out whether your idea fits with the scope and aims of the project. If you are unsure, please consider opening a new issue to discuss your idea before you do any significant work that the project's developers might not want to merge into the project.
- Pull requests should remain focused in scope and avoid containing unrelated commits.
- It is fine to have multiple, smaller commits as you work on the PR. We will let GitHub automatically squash your individual commits before merging.
- *If you are adding new feature*:
  - Please provide a convincing reason to add this feature. Ideally you should open a suggestion issue first and have it greenlighted before working on it.
- *If you are fixing a bug*:
  - If you are resolving a special issue, please add `(fix #xxxx[,#xxx])` (where `#xxxx` is the GitHub issue ID) to your pull request title, e.g. "`Update documentation (fix #9998)`".
  - Provide a detailed description of the bug in the pull request. If possible, add a link to a live demo.

### Committing Changes

Possible TODO, see https://github.com/gatsbyjs/gatsby/issues/3920

## Code Guidelines

To ensure consistency throughout the source code, keep these guidelines in mind as you are working:

- We use [Prettier](https://prettier.io/) to automate our code formatting
- TODO semicolons, etc.?
- TODO editorconfig?, see https://github.com/gatsbyjs/gatsby/issues/3922

## What is Gatsby?

Gatsby lets you build a blazing-fast a static PWA (Progressive Web App) with your data—whatever the source—using React.js, Webpack, GraphQL, modern JavaScript, CSS, and more. Our [home page](https://www.gatsbyjs.org/) provides a high-level introduction as well as detailed information that we are continuously trying to improve:

* [Documentation and Guides](https://www.gatsbyjs.org/docs/)
  * [What are Guide articles?](https://www.gatsbyjs.org/docs/gatsby-style-guide/#what-are-guide-articles)
* [Tutorial](https://www.gatsbyjs.org/tutorial/)
* [Features](https://www.gatsbyjs.org/features/)
* [Blog](https://www.gatsbyjs.org/blog/)
* [Showcase](https://github.com/gatsbyjs/gatsby#showcase)

## Development Setup

Gatsby is built using Node.js and supports versions back to v4 and npm to v3. You also need [Git](https://git-scm.com/) and the [Gatsby CLI](https://www.npmjs.com/package/gatsby-cli).

Please refer to our [Get started](https://www.gatsbyjs.org/docs/) section for detailed instructions how to get install and use Gatsby's command line tool.

After cloning this repository or installing a "Gatsby Starter", run the following command to install the project dependencies:

```bash
npm install # or yarn
```

## What is a "Gatsby Starter"?

Gatsby uses “starters” for starting new projects. Starters are partially built Gatsby sites pre-configured to help you get moving faster. There are several official starters and many others contributed from the Gatsby community! [See the Starters page for the full list](https://www.gatsbyjs.org/docs/gatsby-starters/)

### Commonly used NPM scripts

- **`npm develop`**: TODO
- **`npm build`**: TODO
- **`npm format`**: TODO

## Project Structure

- **`src`**: contains the source code. :-) TODO Explain subfolders, mention similar naming for these is not a must.
  - **`components`**: TODO
  - **`layouts`**: TODO
  - **`pages`**: TODO
  - **`templates`**: TODO
  - **`utils`**: TODO
- **`public`**: TODO
- **`static`**: TODO

[`gatsby-config.js`](https://www.gatsbyjs.org/docs/gatsby-config/) and the files exporting your [browser, Node, and SSR API](https://www.gatsbyjs.org/docs/gatsby-lifecycle-apis/) implementations

* [`gatsby-browser.js`](https://www.gatsbyjs.org/docs/browser-apis/)
* [`gatsby-node.js`](https://www.gatsbyjs.org/docs/node-apis/)
* [`gatsby-ssr.js`](https://www.gatsbyjs.org/docs/ssr-apis/))

live in the root directory of your project as siblings of the folders listed above.

*Heads up*: TODO Explain why certain files mentioned here might not be in the starter that this document is part of.

## Core Concepts

- https://www.gatsbyjs.org/docs/building-with-components/
- [Gatsby Lifecycle APIs](https://www.gatsbyjs.org/docs/gatsby-lifecycle-apis/)
  - [Browser APIs](https://www.gatsbyjs.org/docs/browser-apis/)
  - [Node APIs](https://www.gatsbyjs.org/docs/node-apis/)
  - [Server Rendering APIs](https://www.gatsbyjs.org/docs/ssr-apis/)
- [Plugins and Transformers](https://www.gatsbyjs.org/docs/plugins/)
- [Querying data with GraphQL](https://www.gatsbyjs.org/docs/querying-with-graphql/)
  - [GraphQL Reference](https://www.gatsbyjs.org/docs/graphql-reference/)
- [Node Interface](https://www.gatsbyjs.org/docs/node-interface/)
- [API Specification](https://www.gatsbyjs.org/docs/api-specification/)
- [Gatsby Config](https://www.gatsbyjs.org/docs/gatsby-config/)
- [Adding custom webpack configuration](https://www.gatsbyjs.org/docs/add-custom-webpack-config/)

## License

By contributing your code, you agree to license your contribution under the [MIT License](https://github.com/twbs/bootstrap/blob/master/LICENSE). By contributing to the documentation, you agree to license your contribution under the [Creative Commons Attribution 3.0 Unported License](https://github.com/twbs/bootstrap/blob/master/docs/LICENSE).