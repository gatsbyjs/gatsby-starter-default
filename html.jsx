import React from 'react';
import Typography from 'typography';
import DocumentTitle from 'react-document-title';

var TypographyStyle = new Typography().TypographyStyle;

module.exports = React.createClass({
  getDefaultProps: function() {
    return {
      body: ""
    };
  },

  render: function() {
    var title;
    title = DocumentTitle.rewind();
    if (this.props.title) {
      title = this.props.title;
    }

    return (
      <html lang="en">
        <head>
          <meta charSet="utf-8"/>
          <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
          <meta name='viewport' content='width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
          <title>{title}</title>
          <link rel="shortcut icon" href={this.props.favicon}/>
          <TypographyStyle/>
        </head>
        <body>
          <div id="react-mount" dangerouslySetInnerHTML={{__html: this.props.body}} />
          <script src="/bundle.js"/>
        </body>
      </html>
    );
  }
});
