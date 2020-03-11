/**
 * 1. 文件操作简介
 *    2. 常见API
 *       3. file System 文件系统api
 *          1. 文件属性读写。其中常用的有fs.stat、fs.chmod(目录权限)、fs.chown(改变目录所属)等等
 *          2. 文件内容读写。其中常用的有fs.readFile、fs.readdir、fs.writeFile、fs.mkdir等等
 *          3. 底层文件操作。其中常用的有fs.open、fs.read、fs.write、fs.close等等
 *       4. 路径path。path.normalize、path.join、path.extname等等
 */

const fs = require('fs')
const path = require('path')
// 1.2.3的例子
// Node.js的精华部分异步IO模型在fs库中有着充分的体现，回调回调！
// 另外注意一点，就是一种类型的函数有异步和同步之分。一般同步的函数名后面会加上Sync
fs.stat('./files/f1.txt',function(err,status) {
  // console.log('files/f1.txt status: ', status)
})

// 1.2.4的例子 路径处理
// path.normalize将路径转换为标准路径。标准化路径后，其中的分隔符，在windows系统下是\，在linux系统下是/
// 会除去路径中一些不规范的符号等。其实就是规范化路径

var cache = {}

function store(key,value) {
  cache[path.normalize(key)] = value
}

var p1 = '...\\.\\..files/f1'
var value = 't1.txt'

store(p1,value)

console.log('cache: ',cache)

// path.join拼接路径，就是将一个个字符串拼接成标准路径
// 其实这个拼接规则和normalize还不太一样。有必要了解一下具体拼接规则是什么样子的，只是以后的事情了

var p2 = path.join('.../','.','/..files/f1')

console.log('p2: ',p2)

// path.extname获取文件扩展名，很实用哦！

var p3 = path.extname('../files/f2.txt')

console.log('p3 extname: ',p3)