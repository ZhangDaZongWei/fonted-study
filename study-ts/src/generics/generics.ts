/**
 * 泛型：字面意思就是广泛的数据类型。在定义时不确定类型，在实现时才确定
 * 一般用于函数参数不确定时，提供的一种解决方法
 * 泛型也是函数参数，不是代表值，而是代表类型
 */

function log<T>(str: T): T {
  console.log('log: ', str)
  return str
}

// 实现时确定类型
log<string[]>(['a','b','c'])
log('abc')

// 也可以使用type别名
type Log = <T>(str: T) => T
let myLog: Log = log

/**
 * 泛型接口
 * 1. 可以使用泛型约束内部某一函数成员
 * 2. 可以直接使用泛型约束接口内部所有成员，这时需要注意，在实现接口时要指定具体类型
 */

// 很明显这是一个函数接口
interface Say {
  <T>(str: T): T
}

let say: Say = log

// 所有成员
// 可以指定默认类型
interface Say2<T = Number> {
  (str: T): T
}

// 指定了具体类型
let say2: Say2<Number> = log
say2(1)

/**
 * 泛型类
 * 1. 不能约束类的静态成员
 * 2. 可以直接使用泛型约束类内部所有成员，这时需要注意，在实现接口时要指定具体类型
 * 泛型约束
 * 当想要访问函数参数的属性时：
 * 1. 需要通过接口对泛型进行约束
 * 2. 依据具体的属性设置类型
 */
interface Length {
  length: number
}

class Run<T> {
  // 数组就有length属性
  run(value: T[]): T[] {
    console.log('class: ', value)
    // 为继承Length接口之前会报错
    console.log('class: ', value.length)
    return value
  }
  name: T[] = []
  // static成员报错
  // static say(value: T):T {
  //   return value
  // }
}

let run: Run<String> = new Run()
let run2 = new Run<String>()
let run3 = new Run()
// run,run2只能传入约束好的值
run.name = ['zhangzongwei']
run.run(['1'])
run2.name = ['zhangzongwei']
run2.run(['2'])
// 可以传入任意值
run3.name = ['zhangzongwei']
run3.run (['str'])

// 约束泛型例子
class A {
  name: string = 'A'
  age: number = 25
}

class Gen_B {
  name: string = 'B'
  // 没有age就会报错
  age: number = 24
}

class C extends A {}

function getType<T extends A>(con: new () => T): T {
  return new con()
}

console.log('class name: ', getType(Gen_B).name)