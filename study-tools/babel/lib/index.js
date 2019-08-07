"use strict";

var _store = _interopRequireDefault(require("./store"));

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// babel是一个工具链，采用模块化的构建，它主要有两个功能
// 第一是将es6，7 ~，转换为低版本的es；第二是对新语法特性进行编译，即ployfill。
// 更新到Babel7，主要包括(@表示域)：
// @babel/cli, 执行babel命令,进行编译操作, 适合安装在本地项目里，而不是全局安装
// @babel/node,跟node cli类似，不适用在产品中，意味着适合全局安装
// @babel/core 要想使babel命令生效,必须依赖这个包,因执行编译的transform方法在其中
// @babel/preset-env
// @babel/polyfill
// @babel/runtime
// @babel/plugin-transform-runtime
// @babel/plugin-transform-xxx
let fun = () => {
  console.log('babl');
};

fun();

let fun2 = () => console.log('babelsr');

fun2();
let initStr = 'duanshuqing';
let addStr = initStr.padStart(23, 'zhangzongwei');
console.log(addStr);