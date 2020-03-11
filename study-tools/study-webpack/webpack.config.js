const path = require('path')

// 使用插件将css文件提取到单独的文件里
const MiniCssExtractPlugin = require('mini-css-extract-plugin')

module.exports = {
  mode: 'development',
  // context: path.resolve(__dirname,'examples'),
  context: path.resolve(__dirname,'chapter5'),
  entry: {
    // chapter3
    // es6: './es6/index.js',
    // ts: './ts/index.ts',
    // flow: './flow/index.js',
    // scss: './scss/index.js',
    // postcss: './postcss/index.js',
    // react: './react/index.js',
    // tsReact: './react/tsReact/index.tsx',
    // chapter5
    loader: './loader.js',
  },
  output: {
    filename: '[name].js',
    // path: path.resolve(__dirname, 'examples/dist')
    path: path.resolve(__dirname, 'chapter5/dist')
  },
  resolveLoader: {
    modules: ['node_modules','./loaders/'],
    extensions: ['.js']
  },
  module: {
    rules: [
      {
        test: /\.js$/,
        use: ['babel-loader','comment-require-loader'],
        exclude: /node_modules/
      },
      {
        test: [/\.ts$/,/\.tsx$/],
        use: ['awesome-typescript-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader,'css-loader','postcss-loader']
      }
    ]
  },
  resolve: {
    // ts的坑，一定要加上这个配置
    extensions: ['.ts','.tsx','.js']
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