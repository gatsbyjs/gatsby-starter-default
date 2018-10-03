const path = require('path');
const fs = require('fs');

exports.onCreateBabelConfig = ({ actions }, pluginOptions) => {
  actions.setBabelPlugin({
    name: '@babel/plugin-proposal-decorators',
    options: {
      legacy: true,
    },
  });
}

exports.onCreateWebpackConfig = ({ stage, loaders, actions }, { postCssPlugins, ...sassOptions }) => {

  const PRODUCTION = stage !== 'develop';
  const isSSR = stage.includes('html');

  const sassLoader = {
    loader: require.resolve('sass-loader'),
    options: {
      sourceMap: !PRODUCTION,
      ...sassOptions,
    },
  };

  actions.setWebpackConfig({
    module: {
      rules: [{
        test: /\.s(a|c)ss$/,
        use: [
          { loader: require.resolve('classnames-loader') },
          !isSSR && loaders.miniCssExtract(),
          loaders.css({ modules: true, importLoaders: 2 }),
          loaders.postcss({ plugins: postCssPlugins }),
          sassLoader,
        ].filter(Boolean),
      }],
    },
    resolve: {
      modules: [
        path.resolve(__dirname, 'src'),
        'node_modules'
      ],
    },
  });
}

exports.createPages = ({ graphql, actions }) => {
  return new Promise((resolve, reject) => {
    graphql(`
      query CreatePages {
        allPrismicArticle {
          edges {
            node {
              uid
              prismicId
            }
          }
        }
      }
    `)
    .then((result) => {
      result.data.allPrismicArticle.edges.forEach(({ node }) => {
        actions.createPage({
          path: `articles/${node.uid}`,
          component: path.resolve('./src/pages/article.tsx'),
          context: {
            prismicId: node.prismicId,
          },
        });
      });
      resolve();
    });
  });
}
