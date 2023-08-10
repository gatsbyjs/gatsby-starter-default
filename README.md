```sh
                     __       __
                     '.'--.--'.-'
       .,_------.___,   \' r'
       ', '-._a      '-' .'
        '.    '-'Y \._  /
          '--;____'--.'-,
       snd /..'       '''
```

# YYJ Tech Gatsby

## Development dependencies

- Node, v18.x.x
- npm

## Local development commands

```sh
# Install packages
> npm install

# Start the development server
> npm start

# Start the production server
> open http://localhost:8000
```

## Key technologies/features

- This is a [Gatsby.js](https://www.gatsbyjs.com/) project
- Styles are written with [Tailwind CSS](https://tailwindcss.com/) as the CSS framework
- Site content is editable in YAML and `/src/contents` directory
  - `src/contents/homepage.yml`: contains the Homepage content
  - `gatsby-config.js`: contains site wide meta information, such as menu links, and Gatsby plugins

## Project Structure

- `src`: contains all the code
  - `components`: contains React components
  - `contents`: contains site content
  - `hooks`: contains React shared hooks
  - `images`: contains all the public images
  - `pages`: contains all the front-end pages
  - `styles`: contains the css stylesheets

Other Gatsby files to know:

- `gatsby-config.js`: contains site wide meta information, such as menu links, and Gatsby plugins
- `tailwind.config.js`: contains TailwindCSS configuration and extending properties

## 🎓 Learning Gatsby

- **To dive straight into code samples, head [to our documentation](https://www.gatsbyjs.com/docs/).** In particular, check out the _Guides_, _API Reference_, and _Advanced Tutorials_ sections in the sidebar.

## 💫 Deploy

[Build, Deploy, and Host On Netlify](https://netlify.com)

The fastest way to combine your favorite tools and APIs to build the fastest sites, stores, and apps for the web. And also the best place to build, deploy, and host your Gatsby sites.

## Creating a Page

To create a new page in Gatsby, this project has been set up to work from Markdown

Decide on the url, e.g. "community-resources"

1. Duplicate the `pages/example.js` page and rename the file to the url you have decided on (e.g. `community-resources.js`)
2. 
3. Replace the related content in this file
  * Replace the `const Example` on line 9 e.g. `const CommunityResources` a
  * Repalce the query on line 34 with your file name e.g. `quuery CommunityResourcesQuery`
  * Replace teh slug param on line 35 wit your slug e.g. ` eq: "/community-resources"`
  * Replace `export default Example` line at the end of the file with your url name e.g. `export default CommunityResources`
4. Duplicate the `contents/example.md` file
5. Rename the file to match your url e.g. `community-resources.md`
6. Replace the slug parameter with your desired url e.g. `slug: "/community-resources"` 
7. If you now use the `npm start` command, if you've done it right you will be able to see your new url in your browser 