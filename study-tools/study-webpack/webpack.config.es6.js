// example/es6 config

const path = require('path')

module.exports = {
  context: path.resolve(__dirname,'examples/es6'),
  entry: './index.js',
  output: {
    filename: 'es6.bundle.js',
    path: path.resolve(__dirname,'examples/es6/dist')
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader'],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname,'examples')
  }
}