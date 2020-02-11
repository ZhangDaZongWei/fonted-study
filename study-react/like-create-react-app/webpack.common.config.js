/**
 * common webpack config
 */
const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
const MiniCssExtractPlugin = require('mini-css-extract-plugin')
const {CleanWebpackPlugin} = require('clean-webpack-plugin')

module.exports = {
  mode: "development",
  entry: [
    'react-hot-loader/patch',
    './src/index.js',
  ],
  output: {
    path: path.resolve(__dirname,"./dist"),
    filename: '[name].[hash].js',
    chunkFilename: '[name].[contenthash].js'
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        // cacheDirectory=true参数表示缓存编译结果，用于下次加速编译过程
        use: ['react-hot-loader/webpack','babel-loader?cacheDirectory=true'],
        include: path.join(__dirname,"src"),
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'style-loader','css-loader'],
        include: path.join(__dirname,'src'),
        exclude: /node_modules/
      },
      {
        test: /\.(jpg|png|gif)$/,
        use: [{
          loader: 'url-loader',
          options: {
            limit: 8192
          }
        }],
        include: path.join(__dirname,"src"),
        exclude: /node_modules/
      }
    ]
  },
  resolve: {
    alias: {
      pages: path.join(__dirname,'src/pages'),
      components: path.join(__dirname,'src/components'),
      redux: path.join(__dirname,'src/redux'),
      route: path.join(__dirname,'src/route'),
      assets: path.join(__dirname,'src/assets'),
      components: path.join(__dirname,'src/components')
    }
  },
  plugins: [
    new CleanWebpackPlugin(),
    new HtmlWebpackPlugin({
      filename: 'index.html',
      template: path.join(__dirname,'src/index.html')
    }),
    new MiniCssExtractPlugin({
      filename: "[name].[contenthash].css"
    })
  ],
  optimization: {
    runtimeChunk: 'single',
    splitChunks: {
      cacheGroups: {
        vendor: {
          test: /[\\/]node_modules[\\/]/,
          name: 'vendors',
          chunks: 'all'
        },
        styles: {
          name: 'styles',
          test: /\.css$/,
          chunks: 'all',
          enforce: true
        }
      }
    }
  }
}