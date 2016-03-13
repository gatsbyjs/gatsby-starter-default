import React from 'react'
import { Link } from 'react-router'
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
            <Link to="/markdown/">Markdown</Link>
          </li>
          <li>
            <Link to="/react/">JSX (React components)</Link>
          </li>
          <li>
            <Link to="/coffee-react/">CJSX (Coffeescript React components)</Link>
          </li>
          <li>
            <Link to="/html/">HTML</Link>
          </li>
          <li>
            <Link to="/json/">JSON</Link>
          </li>
          <li>
            <Link to="/yaml/">YAML</Link>
          </li>
          <li>
            <Link to="/toml/">TOML</Link>
          </li>
        </ul>
        <h4>Supported CSS Preprocessors</h4>
        <ul>
          <li>
            <Link to="/postcss/">PostCSS</Link>
          </li>
          <li>
            <Link to="/sass/">Sass</Link>
          </li>
          <li>
            <Link to="/less/">Less</Link>
          </li>
        </ul>
      </div>
    )
  }
}
