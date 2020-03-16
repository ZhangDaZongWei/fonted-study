// 类和接口的区别
interface Human {
  name: string,
  eat(): void
}

// 类实现接口时，要实现接口中所有的成员
// 接口只能约束类的公有成员
class Asian implements Human {
  constructor(name: string) {
    this.name = name
  }
  name: string
  eat() {console.log('name: ',this.name)}
}

let asian = new Asian('zhangzongwei')
asian.eat()

// 接口之间可以相互继承,可以抽离出可重用的接口
interface Man extends Human {
  run(): void
}

interface Child {
  cry(): void
}

// 继承多个接口
interface Boy extends Man, Child {}

let boy: Boy = {
  name: 'zhangzongwei',
  eat() {},
  run() {},
  cry() {}
}

// 接口也可以继承类, 实则是抽离类的成员
class Auto {
  state = 1
  // 如何声明了private,那么只能是这个类的子类去实现它所被抽离的接口
  // private state2 = 0
}

interface AutoInterface extends Auto { }

class Bus implements AutoInterface {
  state = 1
}

// 类的子类也可以实现接口
class Car extends Auto implements AutoInterface { }


