/**
 * 根据上一章的描述，配置webpack有两种方式：
 *  1. 用一个js文件来配置，如webpack.config.js
 *  2. 使用命令行参数，如--hot
 *  主要是两种方式可以同时使用，上一章已经见过了。需要注意的是，可以使用
 *  --config 参数来指定js的配置文件，也就是说你将webpack.config.js替换为
 *  你想要的文件
 * 
 * 那可配置的功能有哪些呢：
 *  1. Entry：配置模块的入口。必填
 *  2. output：配置输出代码的出口
 *  3. Module：配置处理模块的规则
 *  4. Resolve：配置寻找模块的规则
 *  5. plugins：配置插件
 *  6. DevServer：配置DevServer
 *  7. 整体配置结构：整体地描述各配置项的结构
 *  8. 其他配置项
 *  9. 多种配置类型：配置文件不止可以返回Object，还可以返回其他形式
 */

const show = require('./show')

show('Webpack')

/**
 * Entry：
 *  1. context属性：webpack在寻找相对路径的文件时会以context属性的值为根目录，默认当然是执行启动
 *     webpack时所在的当前工作目录，你也可以在配置文件中设置它。需要注意的是，context必须是一个
 *     绝对路径
 *  2. entry值的类型：string、array、object。具体见entry.jpg
 *  3. Chunk的名称
 *     每一个生成的Chunk都有一个名称。这个名称呢和Entry的配置有关：
 *     如果Entry的值是string或者array，那么就只有一个chunk，名称为main
 *     如果Entry的值是object，那么就会生成多个chunk，每个chunk名称为对象的键
 *  4. 配置动态Entry
 *     当为多个页面配置不同的Entry时，将Entry设置成一个函数动态返回配置更好
 *     函数既可以使用同步，也可以使用异步
 */ 


/**
 * Output(object)：
 *  1. output.filename: 配置输出文件的名称，是string类型。
 *     若只有一个输出文件或者chunk，那么可以写成静态不变的
 *     若有多个chunk输出呢？就要使用模板和变量了。如：filename: '[name].js'
 *     注意上面所写的是一个字符串模板，[name]代表用内置的chunk名称，其中name就是一个变量
 *     还有其他的内置变量，见filename.jpg。其实这些东西都是内部所暴露出来的
 *  2. output.chunkFilename: 配置无入口的Chunk在输出时的文件名称，其实就是用于在运行过程中
 *     生成的Chunk输出时的文件名称。运行时生成Chunk的场景包括：使用CommonChunkPlugin、
 *     使用import('path/to/module')动态加载等。
 *     同样chunkFilename也支持内置变量
 *  3. output.path: 配置输出文件存放在本地的目录。注意，必须是绝对路径
 *  4. publicPath：有的项目里会有一些构建出的资源需要异步加载，比如放在CDN上加速。这时就需要对应的URL地址
 *     而此属性就是配置发布到线上资源的URL前缀，为string类型，默认是空字符串''，表示
 *     使用相对路径
 *     另外path和publicPath都支持字符串模板，但是只有[hash]有效，此hash代表一次编译操作的Hash值
 *  5. output.crossOriginLoading: webpack输出的部分代码块可能需要异步加载，注意要区别上述的资源异步加载！
 *     而异步加载是通过JSONP实现的，就是动态地想HTML中插入<script>标签，此属性则是用于配置这个<script>标签
 *     的crossorigin值。crossorigin属性一般取以下的值：
 *     anonnymous(默认)：加载脚本资源时，不会带上用户的cookies
 *     use-credentials: 与上个值相反
 *  6. output.libraryTarget和library：当用Webpack去构建一个可以被其他模块导入使用的库时，
 *     就需要用到它们。
 *     libraryTarget配置以何种方式导出库，library配置导出库的名称
 *     output.libraryTarget是字符串的枚举类型，支持以下配置：
 * 
 *     var(默认)：编写的库将通过var被赋值给通过library指定名称的变量。
 *     例如，配置output.library='LibraryName'，则
 *     var LibraryName = lb_code, 即将webpack输出的代码赋值给变量LibraryName，
 *     其中lb_code是导出库的代码内容，是一个有返回值的自执行函数
 *     LibraryName.doSomething()，通过这样就可以使用导出库了
 * 
 *     commonjs：即通过CommonJS规范导出
 *     output.library配置和以上相同，则
 *     exports['LibraryName'] = lb_code,
 *     使用，require('library-name-in-npm')['LibraryName'].doSomething(),
 *     library-name-in-npm是指模块被发布到NPM仓库的名称
 * 
 *     commonjs2：即通过CommonJS2规范导出
 *     这里的output.libraryName不需要配置，因为用不着，而是直接使用
 *     module.exports = lb_code
 *     使用，require('library-name-in-npm').doSomething()
 * 
 *     this：即通过this赋值给通过library指定的名称
 *     this['LibraryName'] = lib_code
 *     使用：this.LibraryName.doSomething()
 *     
 *     window: 即通过window赋值给通过library指定的名称
 *     window['LibraryName'] = lib_code
 *     使用：window.LibraryName.doSomething()
 * 
 *     global: 即通过global赋值给通过library指定的名称
 *     global['LibraryName'] = lib_code
 *     使用：global.LibraryName.doSomething()
 * 
 *  7. output.libraryExport配置要导出的模块张哪些子模块需要被导出
 *     只在output.libraryTarget被设置成commonjs或者commonjs2时有效
 *     例如，源代码是：
 *     export const a=1
 *     export default b=2
 *     如果只导出a呢？ 就可以使用 output.libraryExport = a, 构建出的代码就是：
 *     module.exports = lib_code['a']
 *     使用：require('library-name-in-npm') === 1
 * 
 */