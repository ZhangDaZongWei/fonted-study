/**
 * 1. 文件操作简介
 */

//  文件拷贝

var fs = require('fs')

// src源文件路径，dst目标文件路径
function copy(src,dst) {
  fs.open(src,'r+',function(err,fd) {
    if (err) {
      console.log('err: ',err)
    }
    console.log('open files success!')
  })
  fs.writeFileSync(dst,fs.readFileSync(src))
}

// 主函数
function main(argv) {
  copy(argv[0],argv[1])
}

main(['f1.txt','f2.txt'])

