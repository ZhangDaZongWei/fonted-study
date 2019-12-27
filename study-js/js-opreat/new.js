/**
 * new 操作符
 */

// new 做了哪些事情呢？

function Baby(name) {
  this.name = name
  this.say = function() {
    console.log('I love '+ this.name)
  }
  // 返回基本类型的值会被忽略
  return 5
  // 返回引用类型的值会被保留
  // return {
  //   name: 'zhangzongwei'
  // }
} 

// new 原始实现
let b1 = new Baby('段书晴')

b1.say()

// 模拟 new 实现
// 1. 新建一个对象
let b2 = {}
// 2. 将新建对象的原型指向构造函数的prototype
b2.__proto__ = Baby.prototype
// 3. 将this指向新建对象
// 4. 如果构造函数返回引用类型，则赋值给新建对象
let ret = Baby.call(b2,'段书晴')
if (typeof ret === 'object') {
  b2 = ret
}

b2.say()
