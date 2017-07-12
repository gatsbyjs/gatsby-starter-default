import React from 'react'
import PropTypes from 'prop-types'

const renderInlineCSS = () => {
  if (process.env.NODE_ENV === 'production') {
    return (
      <style
        dangerouslySetInnerHTML={{
          __html: require('!raw!../public/styles.css'),
        }}
      />
    )
  }
}

const HTML = ({
  headComponents,
  body,
  postBodyComponents,
}) => (
  <html lang="en">
    <head>
      <meta charSet="utf-8" />
      <meta httpEquiv="X-UA-Compatible" content="IE=edge" />
      <meta
        name="viewport"
        content="width=device-width, initial-scale=1.0"
      />
      {headComponents}
      {renderInlineCSS()}
    </head>
    <body>
      <div
        id="___gatsby"
        dangerouslySetInnerHTML={{ __html: body }}
      />
      {postBodyComponents}
    </body>
  </html>
)

HTML.propTypes = {
  headComponents: PropTypes.array,
  body: PropTypes.string,
  postBodyComponents: PropTypes.array,
}

export default HTML
