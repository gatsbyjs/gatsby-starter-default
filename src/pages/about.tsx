import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';

// tslint:disable no-default-export
export default () => (
  <>
    <Helmet title="About" />

    <Intro>
      About page
    </Intro>
  </>
);
