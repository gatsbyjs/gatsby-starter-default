import React from 'react';
import config from 'gatsby-plugin-config';
import GridOverlay from './GridOverlay';

export default class Devtools extends React.PureComponent {
  render() {
    if (config.NODE_ENV !== 'development') {
      return null;
    }

    return (
      <React.Fragment>
        <GridOverlay columns={12} />
      </React.Fragment>
    );
  }
}
