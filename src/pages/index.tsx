import React from 'react';
import Helmet from 'react-helmet';
import { Segment } from 'components/segment/Segment';
import { Button } from 'components/button/Button';

export default class Home extends React.PureComponent<any> {
  render() {
    return (
      <React.Fragment>
        <Helmet title="Home" />

        <Segment>
          <h1>Hello world!</h1>
        </Segment>

        <Segment>
          <Button>Button</Button>
          <Button to="http://ueno.co">Ueno.co</Button>
          <Button to="/about">About</Button>
        </Segment>

      </React.Fragment>
    );
  }
}
