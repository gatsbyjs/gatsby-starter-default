import React from 'react';
import Helmet from 'react-helmet';
import { Segment } from 'components/segment/Segment';

export default class NotFound extends React.PureComponent<any> {
  render() {
    return (
      <React.Fragment>
        <Helmet title="404 Not Found" />

        <Segment>
          <h1>Page was not found</h1>
        </Segment>

      </React.Fragment>
    );
  }
}
