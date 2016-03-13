import React from 'react'
import { Link } from 'react-router'
import { link } from 'gatsby-helpers'
// Styles for highlighted code blocks.
import 'css/zenburn.css'

export default class Sass extends React.Component {
  render () {
    return (
      <div>
        <h1>
          Hi people
        </h1>
        <p>Welcome to your new Gatsby site</p>
        <h3>Below are some pages showing different capabilities built-in to Gatsby</h3>
        <h4>Supported file types</h4>
        <ul>
          <li>
            <Link to={link('/markdown/')}>Markdown</Link>
          </li>
          <li>
            <Link to={link('/react/')}>JSX (React components)</Link>
          </li>
          <li>
            <Link to={link('/coffee-react/')}>CJSX (Coffeescript React components)</Link>
          </li>
          <li>
            <Link to={link('/html/')}>HTML</Link>
          </li>
          <li>
            <Link to={link('/json/')}>JSON</Link>
          </li>
          <li>
            <Link to={link('/yaml/')}>YAML</Link>
          </li>
          <li>
            <Link to={link('/toml/')}>TOML</Link>
          </li>
        </ul>
        <h4>Supported CSS Preprocessors</h4>
        <ul>
          <li>
            <Link to={link('/postcss/')}>PostCSS</Link>
          </li>
          <li>
            <Link to={link('/sass/')}>Sass</Link>
          </li>
          <li>
            <Link to={link('/less/')}>Less</Link>
          </li>
        </ul>
      </div>
    )
  }
}
