[![logo](https://user-images.githubusercontent.com/937328/51597521-57c62380-1ef3-11e9-99ed-7f9ac3f2804e.png)](https://ueno.co/?utm_source=github&utm_campaign=ueno-gatsby-starter)
<br /><br />
![banner](https://user-images.githubusercontent.com/937328/53875866-6da02b80-3ffd-11e9-8f45-15e80e876c81.png)
<br /><br />
[![about](https://user-images.githubusercontent.com/937328/51540139-999c8e80-1e4d-11e9-866d-284657a34744.png)](https://ueno.co/contact/?utm_source=github&utm_campaign=ueno-gatsby-starter)
<br /><br />

## Ueno Gatsby Starter

Kick off your project with this opinionated boilerplate. This barebones starter ships with the main Gatsby configuration files you might need.

## Installation

Install [create-ueno-app](https://github.com/ueno-llc/create-ueno-app):

```bash
npm install -g create-ueno-app
yarn global add create-ueno-app
```

Create your app:

```bash
create-ueno-app gatsby my-app
```

<details>
  <summary>Alternative setup</summary>

  You also have the choice to use `gatsby-cli` to setup your project without installing `create-ueno-app`.

  ```bash
  npm install -g gatsby-cli
  gatsby new my-app "https://github.com/ueno-llc/ueno-gatsby-starter#master --recursive"
  ```

  We recommend you changing straight away `src/components/link/Link.tsx` which is use for our 3 starter kits. You probably want something similar to that: [Link.tsx](https://github.com/ueno-llc/create-ueno-app/blob/master/overwrites/gatsby/Link.tsx).
</details>

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

## Deploy

[![Deploy to Netlify](https://www.netlify.com/img/deploy/button.svg)](https://app.netlify.com/start/deploy?repository=https://github.com/gatsbyjs/gatsby-starter-default)

[![Deploy to Heroku](https://www.herokucdn.com/deploy/button.svg)](https://heroku.com/deploy)
