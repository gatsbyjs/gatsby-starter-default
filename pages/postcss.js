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
              <a href="google.com">Store</a>
            </li>
            <li>
              <a href="yahoo.com">Help</a>
            </li>
            <li>
              <a href="amazon.com">Logout</a>
            </li>
          </ul>
        </div>
      </div>
    )
  }
}
