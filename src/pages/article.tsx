import React from 'react';
import { graphql, Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { get } from 'lodash';
import Helmet from 'react-helmet';
import Segment from 'components/segment/Segment';

export default class Article extends React.PureComponent<any> {

  get article() {
    const article = get(this.props.data, 'prismicArticle', {});
    return {
      ...article,
      ...JSON.parse(article.dataString),
    };
  }

  render() {
    return (
      <React.Fragment>
        <Helmet title="Article" />

        <Segment>
          <h1>{RichText.asText(this.article.title)}</h1>
          {RichText.render(this.article.short_description)}
          <Link to="/articles">Go back</Link>
        </Segment>

      </React.Fragment>
    );
  }
}

export const query = graphql`
  query Article($prismicId: String!) {
    prismicArticle(prismicId: { eq: $prismicId }) {
      uid
      prismicId
      dataString
    }
  }
`;
