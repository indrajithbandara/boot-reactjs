var webpack = require('webpack');
var WebpackConfig = require('webpack-config');

module.exports = new WebpackConfig().extend({
  './webpack.config.prod.js': function(config){
    config.plugins[config.plugins.length - 1] = new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"stage"'
      }
    });
    return config;
  }
});
