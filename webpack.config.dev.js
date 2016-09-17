const path = require('path');
const webpack = require('webpack');
const HtmlWebpackPlugin = require('html-webpack-plugin');

module.exports = {
  devtool: 'cheap-module-eval-source-map',
  devtool: 'cheap-source-map',
  entry: {
    index: './src/entry/index.js',
    dev:[
      'babel-polyfill',
      'webpack-dev-server/client?http://localhost:9000',
      'webpack/hot/dev-server'
    ]
  },
  output: {
    path: path.join(__dirname, 'dist'),
    filename: '[name].js',
    chunkFilename: '[hash:6]/[name].js'
    // filename: '[name].js'
  },
  plugins: [
    new webpack.HotModuleReplacementPlugin(),
    new HtmlWebpackPlugin({
      template: './src/public/index.html'
    }),
    new webpack.DefinePlugin({
      'process.env': {
        'NODE_ENV': '"development"'
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
      'presets': ['es2015', 'react', 'stage-0']
      // 'plugins': ['add-module-exports', ['antd', {style: 'css'}], 'transform-runtime']
      // loaders: ['babel?cacheDirectory', 'antd']

    },{
      test: /\.js[x]?$/,
      exclude: /node_modules/,
      loader: 'eslint'
    }]
  },
  eslint: {
    configFile: './.eslintrc'
  },

  devServer: {
    contentBase: './src/public',
    hot: true,
    debug: true,
    inline: true,
    host: '0.0.0.0',
    port: '9000',
    'display-chunks': false,
    'display-modules': true,
    progress: true
  }
};
