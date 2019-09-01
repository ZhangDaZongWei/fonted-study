// new的实现方式
// new运算符创建一个用户自定义或者具有构造函数的内置对象类型之一
// 看new实现的效果是什么：

function girlFriend() {
  this.name = '段书晴'
  this.age = 23
  this.habit = 'study'

  return {
    name: 'zhangzongwei',
    age: 25
  }
}

girlFriend.prototype.appearance = 'beautiful'

girlFriend.prototype.say = () => {
  console.log('l love zhangzongwei')
}

// 可以看到，gf访问到了构造函数girlFriend中的属性及其原型上的属性
let gf = new girlFriend()

console.log('gf: ', gf.name,gf.age,gf.appearance)

// gf.say()

// 则实现new的功能如下：

function likeNew() {
  let target = {}
  let constructor = [].shift.call(arguments)
  target.__proto__ = constructor.prototype
  constructor.apply(target,arguments)
  return target
}

let gf2 = likeNew(girlFriend)

console.log('gf2: ', gf2.name,gf2.age,gf2.appearance)

gf2.say()

// 若构造函数返回Object/Function，则new的结果即为此Object/Function；若返回的是基本类型，可以无视
// 则改造如下：

function likeNew2() {
  let target = {}
  // let constructor = [].shift.call(arguments)
  // target.__proto__ = constructor.prototype
  // let returnValue = constructor.apply(target,arguments)
  // 上述效果还可以用如下方法实现：
  let [constructor,...args] = [...arguments]
  target.__proto__ = constructor.prototype
  let returnValue = constructor.apply(target,args)
  return (typeof returnValue === 'object') ? returnValue : target
}

let gf3 = likeNew2(girlFriend)

console.log('gf3: ', gf3.name,gf3.age,gf3.appearance)

// gf3.say()