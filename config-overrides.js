const webpack = require('webpack');
const path = require('path');

module.exports = function override(config) {
  const fallback = config.resolve.fallback || {};
  Object.assign(fallback, {
    crypto: require.resolve('crypto-browserify'),
    http: require.resolve('stream-http'),
    https: require.resolve('https-browserify'),
    stream: require.resolve('stream-browserify'),
    os: require.resolve('os-browserify'),
    assert: require.resolve('assert'),
    url: require.resolve('url'),
  });
  config.resolve.fallback = fallback;
  config.plugins = (config.plugins || []).concat([
    new webpack.ProvidePlugin({
      process: 'process/browser',
      Buffer: ['buffer', 'Buffer'],
    }),
  ]);
  config.module.rules.push({
    test: /\.m?js/,
    resolve: {
      fullySpecified: false,
    },
  });
  config.resolve = {
    ...config.resolve,
    modules: [
      path.resolve(__dirname, 'src'), // Add 'src' to module resolution paths
      'node_modules' // Default node_modules directory
    ],
    alias: {
      ...config.resolve.alias,
      components: path.resolve(__dirname, 'src/components'),
      utils: path.resolve(__dirname, 'src/utils'),
      'redux-alias': 'redux',
      api: path.resolve(__dirname, 'src/api'),
      app_code: path.resolve(__dirname, 'src/app_code'),
      assets: path.resolve(__dirname, 'src/assets'),
      hooks: path.resolve(__dirname, 'src/hooks'),
      pages: path.resolve(__dirname, 'src/pages'),
      style: path.resolve(__dirname, 'src/style'),
      utility: path.resolve(__dirname, 'src/utility'),
    },
  };
  
  return config;
};