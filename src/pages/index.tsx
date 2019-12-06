import * as React from 'react';
import Helmet from 'react-helmet';

import { Intro } from 'components/intro/Intro';
import { Highlight } from 'components/intro/Highlight';
import { BlockText } from 'components/block-text/BlockText';

// tslint:disable-next-line: no-default-export
export default () => (
  <>
    <Helmet title="Home" />

    <Intro>
      Opinionated starter by Ueno, using opinionated dependencies 🤪, <Highlight>TypeScript</Highlight>, <Highlight>React Hooks</Highlight>
      ,&nbsp;
      <Highlight>Styled Components</Highlight>, <Highlight>Code Splitting</Highlight> and a lot of love.
    </Intro>

    <BlockText
      heading="Who we are"
      description={
        <>
          Ueno is a full-service agency, busy designing and building beautiful digital products, brands, and
          experiences. For more informations go to{' '}
          <a href="https://ueno.co" target="_blank" rel="noopener noreferrer">
            ueno.co
          </a>
          .
        </>
      }
    />
  </>
);
