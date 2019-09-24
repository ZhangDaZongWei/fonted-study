// Webpack 在执行构建时默认会从项目根目录下的 webpack.config.js 文件读取配置

const path = require('path')
// 引入插件
const ExtractTextPlugin = require('extract-text-webpack-plugin')

// 因为webpack运行在node环境下，所以最后要导出一个描述如何构建的object对象
module.exports = {
  // js入口文件
  entry: './chapter1/main.js',
  output: {
    // 把所有依赖的模块合并输出到一个 bundle.js 文件
    filename: 'bundle.js',
    // 输出文件都放在dist文件夹下
    path: path.resolve(__dirname,'./chapter1/dist')
  },
  // loader机制
  module: {
    rules: [
      {
        // 使用正则匹配.css结尾的文件
        test: /\.css$/,
        // use是一个数组，表示用那些loader去转换对应的文件，注意！执行顺序是从后往前的
        // 每个loader都可以通过queryString的方式传入参数，如下面的?minimize所示
        // 对于每个loader的详细使用情况，请看文档
        use: ['style-loader','css-loader']
        // 给loader传入属性除了有上述方式，还可以通过Object传入
        // use: [
        //   'style-loader',
        //   {
        //     loader: 'css-loader',
        //     options: {
        //     }
        //   }
        // ]
        // 当使用plugin时，loader的配置需要改变
        // use: ExtractTextPlugin.extract({
        //   fallback: "style-loader",
        //   use: "css-loader"
        // })
      }
    ]
  },
  // 使用plugin,它用来扩展webpack的功能，是通过在构建流程中注入钩子实现的
  // 例如将上述css loader转换的css提取到一个单独的文件里
  // plugins: [
    // 可以看出来，plugins是一个数组，每一项都是一个plugin实例
    // new ExtractTextPlugin({
      // 设置提取出来的css文件名
    //   filename: `[name]_[contenthash:8].css`
    // })
  // ]
}