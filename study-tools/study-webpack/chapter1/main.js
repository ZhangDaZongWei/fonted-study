// JS执行入口文件
// 会从 main.js 出发，识别出源码中的模块化导入语句
// 递归的寻找出入口文件的所有依赖，把入口和其所有依赖打包到一个单独的文件中
// 从webpack2起，内置了对 ES6、CommonJS、AMD 模块化语句的支持
// 还可以引入css，这就是说将css文件也当成了js文件
// 但是webpack不支持css解析，那你引入干什么？ 这时就需要使用loader机制了
// 除了在webpack.config.js中配置loader，也可以直接在源码中指定，如下：
// 执行顺序从后往前
// require('style-loader!css-loader!./index.css')

require('./index.css')

const show = require('./show')

show('Webpack')

/**
 * 在实际的开发中，你可能还需要：
 * 1. 使用http服务去达到文件预览，需要使用DevServer
 * 2. 监听文件的变化，做到实时预览 ，webpack原生支持
 * 3. 支持source map，方便调试，，webpack原生支持
 * 
 * 注意哈，使用DevServer之后就不用使用webpack命令了，也就是说没有dist文件和bundle.js文件
 * DevServer做些什么工作的呢？
 * 1. 启动一个http服务器用于服务网页请求
 * 2. 启动webpack，并接收webpack发出的文件变更信号，通过WebSocket协议(这个协议是一直保持连接的)
 *    自动刷新网页做到实时预览
 * 3. 需要注意的是，DevServer会把webpack构建的文件保存在内存中，
 *    所以呢，webpack.config.js中的output.path就没有用了，但是其他还是有用处的，如loader设置
 * 
 * Webpack默认取消监听模式，但是通过DevServer启动的webpack会开启监听模式
 * 
 * DevServer的工作原理：
 *  DevServer 会让 Webpack 在构建出的 JavaScript 代码里注入一个代理客户端用于控制网页，网页和 DevServer 之间通过 WebSocket 协议通信，
 *  以方便 DevServer 主动向客户端发送命令。DevServer 在收到来自 Webpack 的文件变化通知时通过注入的客户端控制网页刷新。
 * 
 * 但是对于index.html文件的更新却不会触发webpack的更新，因为webpack的启动时根据entry属性设置，然后递归去解析的，index.html并不在其中
 * 
 * DevServer的模块热替换，就是不重新刷新整个网页的情况下，进行文件变更的响应。它是更新过的模块替换老的模块，再重新执行一次。开发体验更好
 * 需要加上 --hot
 * 
 * DevServer支持Source Map，加上 --devtool source-map即可，主要作用是便于调试代码。
 * 因为浏览器中运行的 JavaScript 代码都是编译器输出的代码，这些代码的可读性很差
 */

/**
 * 基本名词概念：
 * 1. Entry：入口
 * 2. Module：模块，webpack中一切皆模块，一个模块对应一个文件
 * 3. Chunk：代码块，一个Chunk由多个模块组成，其实就是用于代码的合并和分割
 * 4. Loader：模块转换器，用于把模块原内容按照需求转换成新内容
 * 5. Plugin：扩展插件，在 Webpack 构建流程中的特定时机注入扩展逻辑来改变构建结果或做你想要的事情
 * 6. Output: 出口
 * 
 * webpack执行的大致流程是：
 *  首先从入口文件出发，递归地解析文件，期间对module使用设置的loader进行转换。还会以entry为单位进行分组进而形成Chunk
 *  在整个流程当中会适当地使用设置的plugin，最后把所有chunk一并输出
 */