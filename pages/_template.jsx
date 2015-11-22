import React from 'react';
import { RouteHandler, Link, State } from 'react-router';
import { Container, Grid, Breakpoint, Span } from 'react-responsive-grid';

import { rhythm, fontSizeToMS } from 'utils/typography';

module.exports = React.createClass({
  mixins: [State],

  render: function() {
    return (
      <div>
        <Container
          style={{
            maxWidth: 960,
            padding: `${rhythm(1)} ${rhythm(1/2)}`,
            paddingTop: 0
          }}
        >
          <RouteHandler {...this.props}/>
        </Container>
      </div>
    );
  }
});
