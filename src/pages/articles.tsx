import React from 'react';
import { graphql, Link } from 'gatsby';
import { RichText } from 'prismic-reactjs';
import { get } from 'lodash';
import Helmet from 'react-helmet';
import Segment from 'components/segment/Segment';

export default class Articles extends React.PureComponent<any> {

  get articles() {
    const edges = get(this.props.data, 'allPrismicArticle.edges', []);
    return [].concat(edges).map(({ node }: any) => {
      const author = [].concat(get(node, 'data.author.document', []))
        .map((doc) => ({ ...doc, ...JSON.parse(doc.dataString) }))
        .shift();

      return {
        ...node,
        ...JSON.parse(node.dataString),
        author,
      };
    });
  }

  renderArticle = (article: any) => (
    <li key={article.uid}>
      <Link to={`/articles/${article.uid}`}>{RichText.asText(article.title)}</Link>
    </li>
  )

  render() {
    return (
      <React.Fragment>
        <Helmet title="Articles" />

        <Segment>
          <h1>Articles</h1>
          <ul>
            {this.articles.map(this.renderArticle)}
          </ul>
        </Segment>

      </React.Fragment>
    );
  }
}

export const query = graphql`
  query Articles {
    allPrismicArticle {
      edges {
        node {
          uid
          prismicId
          dataString

          # dataString will not fetch linked documents
          # (we need to fetch them separately and link them manually)
          data {
            author {
              document {
                prismicId
                dataString
              }
            }
          }
        }
      }
    }
  }
`;
