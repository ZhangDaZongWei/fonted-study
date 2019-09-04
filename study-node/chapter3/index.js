/**
 * 1. 文件操作简介
 *    1. 应用实例如下
 *    2. 常见API
 *       1. Buffer数据块
 *          1. 因为js只有字符串类型，没有二进制类型，而Buffer就是被提供来生成二进制数据的。读写文件可以产生Buffer的实例，也可以使用Buffer构造函数生成
 */

//  1.1的例子

// 文件拷贝

var fs = require('fs')

// src源文件路径，dst目标文件路径
function copy(src,dst) {
  fs.writeFileSync(dst,fs.readFileSync(src))
}

// 主函数
function main(argv) {
  copy(argv[0],argv[1])
}

// 以下是直接使用相对路径作为参数
// main(['./files/f1.txt','./files/f2.txt'])

// 下面使用process.argv来获取命令行所输入的参数
// 为什么要使用slice从数组中截取第三个值到最后的值呢？因为process.argv数组的第一个元素代表Node.js执行的绝对路径(就是Node.js.exe文件所在的绝对路径)
// 第二个元素表示当前执行文件的绝对路径(就是现在index.js所在的绝对路径)
// 后面的才是通过命令行输入的参数
// main(process.argv.slice(2))

// 大文件拷贝
// 文件在拷贝的过程中，是先将源内容读入内存中，然后再写入目的文件中。所以对一些大文件，一次性读入内存是不可行的，内存会爆仓！
// 所以需要边读边写，这时根据以往的经验，就要使用读写数据流了，读写数据流通过pipe连接起来。pipe就是管道的意思，很形象

function copyBig(src,dst) {
  fs.createReadStream(src).pipe(fs.createWriteStream(dst))
}

function mainBig(argv) {
  copyBig(argv[0],argv[1])
}

// mainBig(process.argv.slice(2))

// 1.2.1的例子

var bin = new Buffer.alloc(5,[ 0x68, 0x65, 0x6c, 0x6c, 0x6f ])

// 类似字符串的操作一样，有length属性，可以通过下标的方式进行访问

console.log('bin length: ',bin.length)

console.log('bin: ', bin)