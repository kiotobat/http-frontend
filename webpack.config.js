const { merge } = require('webpack-merge');

const commonConfig = require('./webpack.common');
const productionConfig = require('./webpack.prod');
const developmentConfig = require('./webpack.dev');

module.exports = (env) => {
  if (env.development) {
    return merge(commonConfig, developmentConfig);
  }
  return merge(commonConfig, productionConfig);
};
