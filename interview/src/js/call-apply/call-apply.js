/**
 * 1. call和apply方法调用一个函数, 其具有一个指定的 this 值和分别地提供的参数(参数的列表)
 */

// 连接数组

const array1 = ['a','b','c']
const array2 = ['d','e','f']

Array.prototype.push.apply(array1,array2)

console.log('array1: ',array1)

// 一个函数所能接受的参数个数是一定的，不同引擎的限制是不一样的，js核心限制在65535
// 如下是解决方式，即将参数给拆开，然后多次push

function concatArray(array1,array2) {
  const spliceNum = 32768
  for (let i=0, len=array2.length; i < len; i+=spliceNum) {
    Array.prototype.push.apply(array1,array2.slice(i,Math.min(i+spliceNum,len)))
  }
  return array1
}

const array3 = ['zhang','zong','wei']
const array4 = []
for (let i=0; i<1000000; i++) {
  array4.push(i)
}

// 出现爆栈的情况
// Array.prototype.push.apply(array3,array4)

const concatArray1 = concatArray(array3,array4)

console.log('concatArray1: ',concatArray1)