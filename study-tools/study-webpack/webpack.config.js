const path = require('path')

module.exports = {
  context: path.resolve(__dirname,'examples'),
  entry: {
    es6: './es6/index.js',
    ts: './ts/index.ts',
    flow: './flow/index.js'
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
      }
    ]
  },
  resolve: {
    // ts的坑，一定要加上这个配置
    extensions: ['.ts','.js']
  },
  devServer: {
    contentBase: path.join(__dirname,'examples')
  }
} 