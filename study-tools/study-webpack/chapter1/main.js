// JS执行入口文件
// 会从 main.js 出发，识别出源码中的模块化导入语句
// 递归的寻找出入口文件的所有依赖，把入口和其所有依赖打包到一个单独的文件中
// 从webpack2起，内置了对 ES6、CommonJS、AMD 模块化语句的支持

// 还可以引入css，这就是说将css文件也当成了js文件
// 但是webpack不支持css解析，那你引入干什么？ 这时就需要使用loader机制了
// 除了在webpack.config.js中配置loader，也可以直接在源码中指定，如下：
// 执行顺序从后往前
require('style-loader!css-loader!./index.css')
// require('./index.css')

const show = require('./show')

show('Webpack')