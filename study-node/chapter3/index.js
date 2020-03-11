/**
 * 1. 文件操作简介
 *    1. 应用实例如下
 *    2. 常见API
 *       1. Buffer数据块
 *          1. 因为js只有字符串类型，没有二进制类型，而Buffer就是被提供来生成二进制数据的。读写文件可以产生Buffer的实例，也可以使用Buffer构造函数生成
 *       2. Stream数据流，即流动的数据，以免一次性数据太大，撑爆内存，所以边读边处理会变得更加高效。
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
// Buffer构造函数已经废弃，因为不安全
var bin = new Buffer.alloc(5,'hello')

// 类似字符串的操作一样，有length属性，可以通过下标的方式进行访问

console.log('bin length: ',bin.length)

// bin[0]输出的是十进制的数，也就是会将十六进制转换为十进制
console.log('bin: ', bin[0])

// 这次不类似字符串，因为字符串是只读的，所以对字符串的任何更改都会返回一个新的字符串，原字符串不会改变
// 而Buffer更像是可以做指针操作的C一样，你可以修改某一位置的值，或者进行其他类似字符串的操作

// slice返回的Buffer修改会影响原来的Buffer，这里注意一下，即使说会影响原Buffer，它的含义是并未返回一个新的Buffer
// 而是返回将指针指向Buffer某个位置的Buffer。哈哈，有点绕哈！
var sub = bin.slice(2)

sub[1] = 0x78

console.log('new bin: ',bin)

// 拷贝Buffer
// 如下这种方式，直接赋值的话是浅拷贝，copyBin的改变会影响到原Buffer的
var copyBin = bin

copyBin[0] = 0x56

// 所以正确的方式是先申请一块新的空间，然后使用copy函数进行拷贝

var copyBin = new Buffer.alloc(5)

bin.copy(copyBin)

copyBin[0] = 0xa5

console.log('copy bin: ', copyBin,bin)

// 1.2.2的例子
// Stream是依赖事件监听机制的，即EventEmitter。话说这个机制是Node的强大特性之一啊！
// 创造一个只读数据流

var src = './files/f1.txt'
var dst = './files/f2.txt'

var rs = fs.createReadStream(src)

// 这时会出现一个问题，就是data事件会源源不断地触发，那么doSomething可能就承受不住了
// 所以在这次doSomething未完成之前，data事件应该暂停的，完成之后再恢复。完美！
// rs.on('data',function(chunk) {
//   rs.pause()
//   doSomething(chunk,function() {
//     rs.resume()
//   }) 
// })


// 创造一个只写数据流,并把上面的doSomething换成写数据的操作函数
// 这里还是出现了如上同样的问题，读的太快，写的太慢，照样会撑爆内存的
// 解决方式同上，只不过有判断条件了
// 利用了ws.write的返回值来判断目标是否写入文件内了true，还是临时放入缓存了false。放入缓存时，很明显需要暂停
// 再根据写文件的drain事件来判断缓存中的数据是否已经写入目标
// 这儿有点绕，其实ws.write只是判断数据在缓存中还是目标文件中，但是drain是缓存中的数据写入目标文件中才触发
// 但是对比上面的大文件读取,使用pipe貌似根本没有这么复杂啊,其实你不知不觉中已经实现了类似pipe的功能!
var ws = fs.createWriteStream(dst)

rs.on('data',function(chunk) {
  console.log('reading...')
  if (ws.write(chunk) === false) {
    console.log('pausing...')
    rs.pause()
  } else {
    console.log('writed...')
  }
})

ws.on('drain',function() {
  console.log('resuming...')
  rs.resume()
})

rs.on('end',function() {
  console.log('ending...')
  ws.end()
})

