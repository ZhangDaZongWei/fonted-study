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

  // 首先判断Object有无assgin函数
  if (typeof assign2 !== 'function') {
    Object.defineProperty(Object,'assign2',{
    // 因为在Object上的属性是不可枚举的，而如果直接使用Object.a的方式定义则是可枚举的，所以使用了defineProperty
    // 可以使用Object.getOwnPropertyDescriptor查看对象属性的描述符或者使用Object.propertyIsEnumerable,它可以判断给定的属性名是否存在对象中(不是原型链上)且满足可枚举属性,来判断一个属性是否可枚举.
    // Object.getOwnPropertyNames得到对象上不包括原型上所有属性名
      value: function (target) {
        'use strict'
        // 其实还应该判断undefined的,但是因为undefinded == null,所以如下就可以了
        if (target == null) {
          throw new TypeError("Don't convert null or undefined to object")
        }
        // 当传入的是基本类型的时候需要进行包装类型转换,使用Object即可
        // 在转换string时,已有的属性为不可写,但是必须在严格模式下才报错
        // Object.key返回一个包含对象上不包括原型上可枚举属性的数组
        let to = Object(target)
        for(let i=0; i<arguments.length; i++) {
          let nextSource = arguments[i]
          if (nextSource != null) {
            // 如何访问对象上不包括原型上的所有属性呢?
            // 使用in操作符可以遍历出对象上包括原型的所有属性,而Object.hasOwnProperty则可识别出哪些是对象上的属性
            // 注意考虑到有的对象并没有继承Object.prototype(如Object.create(null)来创建的对象),则无法使用此函数,所以要使用显示绑定
            // 若是基本类型就直接忽略,除了字符串
            for (let nextKey in nextSource) {
              if (Object.prototype.hasOwnProperty.call(nextSource,nextKey)) {
                to[nextKey] = nextSource[nextKey]
              }
            } 
            
          }
        }
        return to
      },
      enumerable: false,
      writable: true,
      configurable: true
    })
  }

let newTarget ={
  name: '张宗伟',
  age: 25
}

let source1 = 'abc'

let source2 = {
  name: '段书晴'
}

let targetObj = Object.assign2(newTarget,source1,source2)

console.log('targetObj: ',targetObj)