// example/es6 config

const path = require('path')

module.exports = {
  context: path.resolve(__dirname,'examples/es6'),
  entry: './index.js',
  output: {
    filename: 'es6.bundle.js',
    path: path.resolve(__dirname,'examples/es6/dist')
  },
  devServer: {
    contentBase: path.join(__dirname,'examples')
  }
}