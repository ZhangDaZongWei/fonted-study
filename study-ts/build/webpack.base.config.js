const HtmlWebpackPlugin = require('html-webpack-plugin')

module.exports = {
  entry: './src/class/class.ts',
  output: {
    filename: 'app.js'
  },
  resolve: {
    extensions: ['.js','.ts','.tsx']
  },
  module: {
    rules: [
      {
        test: /\.tsx?$/i,
        use: ['ts-loader'],
        exclude: /node_modules/
      }
    ]
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './src/tel/index.html'
    })
  ]
}