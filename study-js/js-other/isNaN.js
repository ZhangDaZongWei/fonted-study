/**
 * 1. isNaN(value)函数用来判断一个值是否是NaN，在ES2015(6)中是用Number.isNaN()来代替，其实它们之间有区别
 *    1. value参数
 *       1. 可以是任何值，本来就是判断一个值是不是NaN，所以毫无禁忌
 *    2. 运行规则
 *       1. 如果参数value不是Number类型的，那么会先尝试转换为数值，然后再判断。这不合理啊！这就会出现一些明显不是数值的参数，返回false
 *       2. 其实上述的奇异行为还是出在计算机处理浮点数的机制上，具体的就不说了
 *    3. 返回值：false 或 true
 *    4. 函数周边
 *       1. 为什么会出现这个函数呢？ 原因是不论是 == 还是 === 操作符，都不能判断一个值是否是NaN，只要其中一边是NaN，都是false
 *       2. 什么时候会产生NaN呢？
 *          1. 当算术运算返回一个未定义的或无法表示的值时，NaN就产生了。如0除以0会返回NaN，但是其他数除以0则不会返回NaN
 *          2. 当使用Number()转换其他类型值到数值时，如果不能转换，NaN就产生了
 *       3. 使用 x != x 比使用isNaN更加可靠，有谁不等于自身呢？没错，NaN、{}就不能！
 *       4. NaN参与的任何运算，终将是NaN
 *       5. 存在即合理，它的作用，就是去判断函数的参数是否是可运算的，并且给它们设置默认值
 */

let n1 = isNaN({})
n1 = isNaN(undefined)
n1 = isNaN(NaN)

console.log('n1: ',n1)

// 针对4.2.1中的问题
console.log('math: ',0/0)

// 使用4.3中的特点，写一个polyfill

function newIsNaN(value) {
  value = Number(value)
  return value != value
}

console.log('newIsNaN: ',newIsNaN(undefined))

// 4.5

function increment(x) {
  if (Number.isNaN(Number(x))) x = 0;
  return x + 1;
};

console.log('increment: ',increment("1"))
console.log('increment: ',increment(true))