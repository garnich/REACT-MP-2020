const path = require('path');
const webpack = require('webpack');
const { CleanWebpackPlugin } = require('clean-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');

const isDevMod = process.env.NODE_ENV === 'development';

module.exports = {
  mode: isDevMod ? 'development' : 'production',
  output: {
    publicPath: '/',
    filename: '[name].js',
    chunkFilename: '[name].js',
    path: path.resolve(__dirname, '../dist')
  },
  resolve: {
    modules: [path.resolve(__dirname, './src'), 'node_modules'],
    extensions: ['.js', '.jsx', '.json'],
    alias: {
      'react-dom': '@hot-loader/react-dom',
    }
  },
  watch: isDevMod ? true : false,
  devtool: isDevMod ? 'source-map' : '',
  devServer: {
    contentBase: path.join(__dirname, '../dist'),
    compress: true,
    port: isDevMod ? 9000 : 8000,
    open: true,
    historyApiFallback: {
      index: '../dist/index.html',
    }
  },
  optimization: {
    splitChunks: {
      chunks: 'all',
    }
  },
  plugins: [
    isDevMod ? new webpack.NamedModulesPlugin() : new webpack.HashedModuleIdsPlugin(),
    new CleanWebpackPlugin()
  ],
  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: 'babel-loader'
      }
    ]
  }
};