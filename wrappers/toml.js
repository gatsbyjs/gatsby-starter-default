import React from 'react'
import toml from 'toml-js'

module.exports = React.createClass({
  propTypes () {
    return {
      route: React.PropTypes.object,
    }
  },
  render () {
    const data = this.props.route.page.data
    return (
      <div>
        <h1>{data.title}</h1>
        <p>Raw view of toml file</p>
        <pre dangerouslySetInnerHTML={{ __html: toml.dump(data) }} />
      </div>
    )
  },
})
