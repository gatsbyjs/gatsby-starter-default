import React from 'react'
import styles from './example.module.css'
import Helmet from 'react-helmet'
import { config } from 'config'

export default class PostCSS extends React.Component {
  render () {
    return (
      <div>
        <Helmet
          title={`${config.siteTitle} | Hi PostCSSy friends`} 
        />
        <h1 className={styles['the-css-module-class']}>
          Hi CSS Modules friends
        </h1>
        <p>You can use CSS Modules in Gatsby with Postcss, Less, and Sass. They
          are enabled for any file in the format *.module.*
        </p>
        <div className={styles['css-modules-nav-example']}>
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

