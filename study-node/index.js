/**
 * 1. Node.js是一个js运行环境，并不是一门语言或者框架，正如js在浏览器运行的目的是操作DOM，node环境下实现了js能够操作磁盘文件读写，http服务等计算机底层的东西。
 * 2. Node.js的侧重点在于 事件机制和异步IO(EventLoop)，以实现高性能Web服务器。
 */

/**
 * 3. 模块
 *    1. 每个js文件都是一个模块，模块名就是文件名。
 *    2. 提供了三个变量：
 *    require: 导入模块，传入模块名，返回模块对象。模块名可以是相对路径/绝对路径，.js后缀名可以省略。
 *    exports：导出模块对象。
 *    module:  可以访问到当前模块的一些相关信息，但最多的用途是替换当前模块的导出对象。 
 *    3. 拥有一个主模块。
 *    4. 二进制模块，以C/C++编写，以.node作为后缀名，不过难度较大。
 */

var t1 = require('./chapter1/t1')

console.log('t1: ',t1)

/**
 * 4. 模块解析路径，用上述方法可以引用模块，但是它的灵活性很低，假如模块的位置变了，那么改起来会很麻烦的。于是Node通过一种规则来解决这个问题：
 *    1. 内置模块，直接引用即可。
 *    2. node_modules目录，它用于存放模块，当使用require('foo/baz')时，它会自动寻找路径，规则如下(假如要导入的文件路径为/home/user/index.js)：
 *      首先在同级目录：/home/user/node_modules/foo/baz
 *      上级目录：/home/node_modules/foo/baz
 *      根目录：node_modules/foo/baz
 */

var person = require('./chapter2/home/user/t1')

console.log('person: ',person)

/**
 * 5. NODE_PATH，Node环境变量，和Windows中path一样，就是提前指定某一路径然后全局生效。
 *  1. 当指定多条路径时，Linux下使用:分隔，Windows下使用;分隔。
 *  2. 在计算机的环境变量中指定。
 */

/**
 * 6. 包package，当模块多了之后，就把它们放在一个目录下(按功能等)，就形成了包的概念。
 *    1. 包需要有一个入口文件，也就是总文件，便于导出。
 *    2. 为了简便的考虑，例如包入口文件路径为/home/user/t1.js，那么导入时是，require(/home/user/main)，有点不太优雅，不像是导出一个包的样子，所以
 *       规定当入口文件为index.js时，导入时可写成require(/home/user)。
 *    3. 第二点所使用的方式，未免有点儿太死板了，所以可以在包目录下新建一个package.json文件，指定入口文件，主要一下两个字段：{"name": "包名","main": "入口文件路径"}
 */

