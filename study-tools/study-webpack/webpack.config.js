const path = require('path')

module.exports = {
  context: path.resolve(__dirname,'examples/ts'),
  entry: './index.ts',
  output: {
    filename: 'ts.bundle.js',
    path: path.resolve(__dirname, '/dist')
  },
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: ['awesome-typescript-loader'],
        exclude: /node_modules/
      }
    ]
  },
  devServer: {
    contentBase: path.join(__dirname,'examples')
  }

}