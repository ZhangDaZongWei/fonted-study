/**
 * call函数
 */

// call 做什么？
// 1. 将this指向指定的对象
// 2. 执行函数

let foo = {
  name: '张宗伟'
}

name = 'zhangzongwei'

function say(age,name) {
  console.log('My name is ', this.name, age,' 岁')
  console.log('I love '+ name)
  return {
    boy: this.name,
    girl: name
  }
}

// say.call(foo)

// 第一版call，无参数
Function.prototype.MyCall = function (context) {
  // 这里用this去指代函数，因为this的指向是谁调用就指向谁
  context.fn = this
  context.fn()
  delete context.fn
}

// say.MyCall(foo)

// 第二版，有参数
Function.prototype.MyCall2 = function (context,...args) {
  context.fn = this
  context.fn(...args)
}

// say.MyCall2(foo,25,'段书晴')

// 第三版，对于传入null就指向window，函数也许有返回值
Function.prototype.MyCall3 = function (context,...args) {
  if (!context) context = global
  context.fn = this
  let ret = context.fn(...args)
  delete context.fn
  return ret
}

console.log('return value: ',say.MyCall3(null,25,'段书晴'))