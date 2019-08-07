// Object.assign
// 将所有非继承的，可枚举属性的值从一个或多个源对象复制到目标对象。它将返回目标对象。

// 拷贝时会调用setter和getter，String和symbol类型的属性都会拷贝，对于undefined/null作为值得属性不会忽略
// 后面相同属性名的属性值会覆盖前面的属性值

// 原始类型会被进行包装转换，但是只有字符串的包装对象才可能有自身可枚举属性，对于undefined/null直接忽略

const v1 = 'abc'
const v2 = 10
const v3 = undefined
const v4 = Symbol('foo')

let obj = Object.assign({}, v1,v2,v3,v4)

console.log('obj: ', obj)

// 出现异常会打断后续的拷贝，会报错

const target = Object.defineProperty({}, "foo", {
  value: 1,
  writable: false
})

let obj2 = Object.assign(target, {baz: 3},{foo2: 5})

console.log('obj2: ', obj2.baz,obj2.foo2)

// 实现一个Object.assgin

function test(target) {
  console.log('target: ', target)
  console.log('arguments: ', arguments)
}

test(5,2,3)