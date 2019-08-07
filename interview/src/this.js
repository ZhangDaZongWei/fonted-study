'use strict'
// this指向问题，即谁调用它就指向谁

// 浏览器环境下，无论是严格模式，还是非严格模式，都是window; node环境中都是{}
console.log('this: ',this)

// new绑定，指的是构造函数，若其返回值不是function/object，则new出的为this，否则为function/object

function Person(age) {
  this.age = age
  return {
    name: 'zhangzongwei'
  }
}

function Home(address) {
  this.address = address
  return function() {
    console.log('address: ',address)
  }
}

const person1 = new Person(25)
console.log('age: ',person1.name)

const home = new Home('guangshan')
home()

// 显示绑定call，apply，bind
// 特殊情况，若第一个参数为undefined/null,那么在严格模式下为undefined/null,非严格模式下，浏览器为window，node为global

 global.name = 'htu'
 global.address = 'xinxiang'

const company = {
  name: '和聚',
  address: '许昌'
}

function work() {
  this.money = 3200
  console.log('company: ', this.name)
  console.log('address: ', this.address)
}

work.call(company)
console.log('money: ', company.money)

// work.call(undefined)

// 隐式绑定

function say() {
  console.log('l love you, ', this.name)
}

let girlFriend = {
  name: '段书晴',
  status: 'perfect',
  say
}


girlFriend.say()

// 默认绑定，在严格模式下为undefined,非严格模式下，浏览器为window，node为global

// 箭头函数没有自己的this，继承外层上下文的绑定的this