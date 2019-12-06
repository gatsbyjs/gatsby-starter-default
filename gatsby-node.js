function onCreateWebpackConfig({ actions }) {
  actions.setWebpackConfig({
    resolve: {
      modules: [
        'src',
        'node_modules',
      ],
    },
  });
}

exports.onCreateWebpackConfig = onCreateWebpackConfig
