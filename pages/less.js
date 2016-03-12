import React from 'react'
import './example.less'

export default class Less extends React.Component {
  render () {
    return (
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
