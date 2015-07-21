React = require 'react'
Typography = require 'typography'
DocumentTitle = require 'react-document-title'

typography = new Typography()
{TypographyStyle} = typography

module.exports = React.createClass
  getDefaultProps: ->
    body: ""

  render: ->
    title = DocumentTitle.rewind()
    if @props.title then title = @props.title

    <html lang="en">
      <head>
        <meta charSet="utf-8"/>
        <meta httpEquiv="X-UA-Compatible" content="IE=edge"/>
        <meta name='viewport' content='width=device-width, initial-scale=1.0 maximum-scale=1.0'/>
        <title>{title}</title>
        <link rel="shortcut icon" href={@props.favicon}/>
        <TypographyStyle/>
      </head>
      <body>
        <div id="react-mount" dangerouslySetInnerHTML={{__html: @props.body}} />
        <script src="/bundle.js"/>
      </body>
    </html>
