/**
 * 1. 类中constructor方法和ES5中构造函数一样
 * 2. 定义的类就是一个函数，它指向它的构造函数
 */

class Person {
  constructor() {
    this.name = 'zhangzongwei';
    this.age = 25;
    this.say = () => {
      console.log(`name: ${this.name} age: ${this.age}`)
    }
    return {
      address: 'xuchang',
      company: 'heju'
    }
  }

  getName() {
    console.log('hahaha')
  }
}

const person1 = new Person()

console.log('person: ',person1)

// 访问Person的constructor方法

console.log('constructor: ', Person.prototype.constructor)

function Test() {
  console.log('test')
}