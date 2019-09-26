import { Link } from 'gatsby';
import React from 'react';

const Welcome = ({ siteAuthor = `` }) => (
  <div>
    <h1>
      <Link to="/">{siteAuthor}</Link>
    </h1>
  </div>
);

export default Welcome;
