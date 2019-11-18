const path = require('path')

// 使用插件将css文件提取到单独的文件里
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  context: path.resolve(__dirname,'examples'),
  entry: {
    // es6: './es6/index.js',
    // ts: './ts/index.ts',
    // flow: './flow/index.js',
    scss: './scss/index.js'
  },
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname, 'examples/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader'],
        exclude: /node_modules/
      },{
        test: /\.scss$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','sass-loader']
      }
    ]
  },
  resolve: {
    // ts的坑，一定要加上这个配置
    extensions: ['.ts','.js']
  },
  devServer: {
    contentBase: path.join(__dirname,'examples')
  },
  plugins: [
    new MiniCssExtractPlugin({
      filename: "[name].css",
      chunkFilename: "[id].css"
    })
  ]
} 