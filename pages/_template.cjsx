React = require 'react'
Router = require 'react-router'
{RouteHandler, Link, State} = Router
{Container, Grid, Breakpoint, Span} = require 'react-responsive-grid'
Typography = require 'typography'

typography = Typography()
{rhythm, fontSizeToPx} = typography

module.exports = React.createClass
  mixins: [State]
  render: ->
    <div>
      <Container
        style={{
          maxWidth: 960
          padding: "#{rhythm(1)} #{rhythm(1/2)}"
          paddingTop: 0
        }}
      >
        <RouteHandler typography={typography} {...@props}/>
      </Container>
    </div>
