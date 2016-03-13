import React from 'react'

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
        <p>Raw view of json file</p>
        <pre dangerouslySetInnerHTML={{ __html: JSON.stringify(data, null, 4) }} />
      </div>
    )
  },
})
