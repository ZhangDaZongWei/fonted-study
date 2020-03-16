// 类成员的属性都是实例属性，成员方法都是原型方法
class Dogs {
  // constructor的返回值是Dogs，即类的本身
  constructor(name: string) {
    // 类的成员属性必须赋初始值，第一种是如下
    this.name = name
  }
  name: string
  // 第二种是如下
  age: number = 25
  // 第三种是如下
  addr?: string
  run() {}
}

let dog = new Dogs('dog')
console.log('Dogs: ', Dogs.prototype, Dogs)
console.log('dog: ', dog.age, dog.addr)

// 类的继承
// 类的成员修饰符：
// 1. public，对所有类的实例和子类都有作用，默认
// 2. private，只能被类本身内部调用，其他均不可调用
// 3. protected，只能在类或者子类内访问，不可在实例中访问
// 4. readonly，只读属性，一定要初始化
// 5. static，静态成员，只能由类本身调用，包括其子类
class Husky extends Dogs {
  // 可以给构函声明为private，这样这个类既不可实例化，也不可继承
  // 构函也可以被声明为protected，这样这个类只能被继承，不能实例化，相当于基类
  constructor(name: string, color: string) {
    super(name)
    this.color = color
  }
  color: string
  protected say() {}
  look() {this.say()}
  static food: string = 'bones'
}

let husky = new Husky('husky','tomato')
console.log('Husky: ', Husky.prototype)

// 构造函数中的参数也可以被声明，这样就自动变为实例的属性，就无需再次声明了
class Me {
  constructor(public name: string) {
    this.name = name
  }
}

let me = new Me('zhangzongwei')
console.log('name: ', me.name)

// 对于不能通过实例访问的属性，可以设置访问器set/get
class Accessor {
  name: string = ''
  set(newName: string) {
    this.name = newName
  }
  get() {
    return this.name
  }
}

let access = new Accessor()
access.set('zhangzongwei')
console.log('Accessor: ', access.get())


// 抽象类，只能被继承，不能被实例化
abstract class Animals {
  // 在抽象类中定义的方法，可以实现复用
  eat(): void {
    console.log('eat')
  }
  // 也可以只定义不实现，在子类中进行实现，这叫做多态
  abstract run(x:string): void
}

// 无法实例化
// let animal = new Animals()
class Chicken extends Animals {
  constructor() {
    super()
  }
  run(x: string) {
    console.log(`${x} running`)
  }
}

let ch = new Chicken()
ch.eat()
ch.run("chicken")

class Cat extends Animals {
  run(x: string) {
    console.log(`${x} running`)
  }
}

let cat = new Cat()

let animal_arr: Animals[] = [ch,cat]

animal_arr.forEach(item => {
  item.run(item.toString())
})

// 类的成员方法可以返回this，方便链式调用
// 也可以表现为多态，意思是既可以表现为父类，也可以表现为子类
class Workflow {
  step1() {
    return this
  }
  step2() {
    return this
  }
}

new Workflow().step1().step2()

class Myflow extends Workflow {
  myStep1() {
    return this
  }
}

new Myflow().step1().myStep1().step2()