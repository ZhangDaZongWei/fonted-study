/**
 * development env webpack config
 */
const merge = require('webpack-merge')
const common = require('./webpack.common.config')

module.exports = merge(common, {
  mode: 'development',
  devServer: {
    contentBase: './dist',
    // 当访问不存在页面时，统一访问index.html
    historyApiFallback: true,
    // 指定访问的域
    host: '0.0.0.0',
    // 指定访问的端口
    port: '5000',
    // 热替换模块
    // host: ""
    // 若有后端服务，可使用
    // proxy: "",
  },
  devtool: 'inline-source-map',
})