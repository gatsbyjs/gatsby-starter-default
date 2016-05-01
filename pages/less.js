import React from 'react'
import './example.less'
import DocumentTitle from 'react-document-title'
import { config } from 'config'

export default class Less extends React.Component {
  render () {
    return (
      <DocumentTitle title={`${config.siteTitle} | Hi lessy friends`}>
        <div>
          <h1
            className="the-less-class"
          >
            Hi lessy friends
          </h1>
          <div className="less-nav-example">
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
      </DocumentTitle>
    )
  }
}
