var path = require('path');
var webpack = require('webpack');
var HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  entry: {
    app: './src/entry/index',
    babel: 'babel-polyfill',
    reactlibs: ['react', 'react-redux', 'react-router', 'redux']
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: 'components/[name].[chunkhash:6].js',
    chunkFilename: 'components/[name].[chunkhash:6].js'
  },
  plugins: [
    new webpack.optimize.UglifyJsPlugin({
      compressor: {
        warnings: false
      }
    }),
    new webpack.optimize.OccurenceOrderPlugin(),
    new HtmlWebpackPlugin({
      template: './src/public/index.html',
      hash: false
    }),
    new webpack.optimize.CommonsChunkPlugin('reactlibs', 'components/reactlibs.[chunkhash:6].js'),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"production"'
      }
    })
  ],
  module: {
    loaders: [{
      test: /\.css$/,
      loaders: ['style', 'css']
    },{
      test: /\.scss$/,
      loaders: ['style', 'css', 'sass']
    },{
      test: /\.less$/,
      loaders: ['style', 'css', 'less']
    },{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'babel',
      "presets": ["es2015", "react", "stage-0"]
    }]
  }
};

