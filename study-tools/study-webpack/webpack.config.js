const path = require('path')

module.exports = {
  context: path.resolve(__dirname,'examples/ts'),
  entry: './index.ts',
  output: {
    filename: 'ts.bundle.js',
    path: path.resolve(__dirname, 'examples/ts/dist')
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
  resolve: {
    // ts的坑，一定要加上这个配置
    extensions: ['.ts','.js']
  },
  devServer: {
    contentBase: path.join(__dirname,'examples')
  }

}