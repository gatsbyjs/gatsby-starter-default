import React from 'react';
import Helmet from 'react-helmet';
import { Segment } from 'components/segment/Segment';

export default class About extends React.PureComponent<any> {
  render() {
    return (
      <React.Fragment>
        <Helmet title="About" />

        <Segment>
          <h1>About</h1>
        </Segment>

      </React.Fragment>
    );
  }
}
