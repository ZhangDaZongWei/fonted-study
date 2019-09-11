/**
 * 遍历目录
 *  1. 递归遍历。递归虽好，但是总是会调用函数，所以性能上要下降，一般使用循环代替，不过很不简洁
 *  2. 遍历算法。很明显文件的组织结构是树形结构，所以遍历时遵循深度优先 + 先序遍历的原则。
 */

const fs = require('fs')
const path = require('path')

// 看一个极简单的入门递归例子

function factorial(n) {
  if (n === 1) {
    return 1
  }
  return n*factorial(n-1)
}

console.log('n!: ',factorial(10))

// readdirSync(path)读取指定路径下的文件名和文件夹名
// const dirContent = fs.readdirSync(process.argv.slice(2)[0])

// console.log('dirContent: ', dirContent)

// 利用以上两个算法实现遍历目录
// 以下为同步方式
function travelSync(dir,callback=function(file){console.log('file: ',file)}) {
  const pathname = fs.readdirSync(dir)

  pathname.forEach(file => {
    // 拼接成当前所获得的文件或者文件夹路径
    file = path.join(dir,file)
    // 判断path是文件还是文件夹
    if (fs.statSync(file).isDirectory()) {
      travel(file,callback)
    } else {
      callback(file)
    }
  })
}

// travelSync(process.argv.slice(2)[0])

// 以下为异步方式
// 当然我的这个异步方式有待提高

function travel(dir,callback=function(file){console.log('file: ',file)}) {
  let pathname = []
  fs.readdir(dir,(err,data) => {
    if (err) return
    pathname = data
    pathname.forEach(file => {
      file = path.join(dir,file)
      fs.stat(file,(err,data) => {
        if (err) return
        if (data.isDirectory()) {
          travel(file,callback)
        } else {
          callback(file)
        }
      })
    })
  })
}

travel(process.argv.slice(2)[0])