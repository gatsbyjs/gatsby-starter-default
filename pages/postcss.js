import React from 'react'
import './example.css'

export default class PostCSS extends React.Component {
  render () {
    return (
      <div>
        <h1 className="the-postcss-class">
          Hi PostCSSy friends
        </h1>
        <div className="postcss-nav-example">
          <h2>Nav example</h2>
          <ul>
            <li>
              <a href="#">Store</a>
            </li>
            <li>
              <a href="#">Help</a>
            </li>
            <li>
              <a href="#">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
