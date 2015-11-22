import React from 'react';

module.exports = React.createClass({
  render: function() {
    var post = this.props.page.data
    return (
      <div>
        <h1>{post.title}</h1>
        <div dangerouslySetInnerHTML={{__html: post.body}}/>
      </div>
    );
  }
});
