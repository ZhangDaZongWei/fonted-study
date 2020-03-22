/**
 * 类型兼容, X 兼容 Y：X(目标类型) = Y(原类型)
 * 关于类型兼容的设计：结构化的设计，即侧重点在于它的成员，成员符合条件就可以兼容，而不管其是那种类型
 * 在比较两个结构时，是递归比较
 * 结构之间：成员少的兼容成员多的，如接口，类
 * 函数之间：参数多的兼容参数少的
 */

// 结构化设计
interface Structor {
  name: string,
  address: {privence: {
    city: string,
    country: string
  }}
}

class StructorClass {
  name: string = ''
  // 这与Structor中定义的不同，所以下面会报错
  address: {
    privence: string
  } = {
    privence: ''
  }
}

// structor是Structor类型，然而却可以赋值为类的实例
let structor: Structor
// 报错
// structor = new StructorClass()

interface Event {
  timestamp: string
}

interface MouseEvent extends Event {
  m: number
  n: number
}

interface KeyEvent extends Event {
  keyCode: number
}

function listenseEvent(handler: (e: Event) => void) {}

// 关闭strictFunctionTypes时不报错
// listenseEvent((e: MouseEvent) => {})
// or
listenseEvent((e: Event) => { console.log((e as MouseEvent).m + (e as MouseEvent).n) })
// or
listenseEvent(((e: MouseEvent) => {}) as (e: Event) => void)

// string 兼容 null
let com_s = 'str'
// com_s = null

/**
 * 接口兼容
 * 属性少的兼容属性多的，即鸭式定理
 */

interface Com_A {
  a: any,
  b: any
}

interface Com_B {
  a: any,
  b: any,
  c: any
}

let com_a: Com_A = {
  a: 1,
  b: 2
}

let com_b: Com_B = {
  a: 1,
  b: 2,
  c: 3
}

// Com_A 兼容 Com_B
com_a = com_b

/**
 * 函数兼容
 * 1. 参数个数，多的兼容少的
 * 2. 固定参数，可选参数和剩余参数
 *    固定参数兼容可选参数和剩余参数
 *    可选参数兼容固定参数和剩余参数
 *    剩余参数兼容固定参数和可选参数
 * 3. 参数类型，当然要相同了
 * 4. 复杂类型
 * 5. 返回值类型，相同或为其子类型
 * 6. 函数重载，最终实现的函数要符合上面的规则
 */

type Com_fun = (x: number, y: number) => void

function com_handle(handler: Com_fun) { return handler }

let handle = (x:number) => {}
let handle2 = (x: number, y: number, c: number) => {}
let handle3 = (x: null) => {}

com_handle(handle)
// handle2的参数多于Com_fun, 所以报错
// com_handle(handle2)
// 参数类型不兼容
// com_handle(handle3)

let com_fun = (x: number, y: number) => {}
let com_fun2 = (x?: number, y?: number) => {}
let com_fun3 = (...rest: number[]) => {}

// 固定参数兼容
com_fun = com_fun2
com_fun = com_fun3
// 可选参数兼容
// com_fun2 = com_fun
// com_fun2 = com_fun3
// 剩余参数兼容
com_fun3 = com_fun
com_fun3 = com_fun2

// 复杂类型
interface Point {
  x: number,
  y: number
}

interface Point2 {
  x: number,
  y: number,
  c: number
}

let point_fun = (x: Point) => {}
let point_fun2 = (x: Point2) => {}

// 会报错，除非关闭strictFunctionTypes
// point_fun = point_fun2
point_fun2 = point_fun

// 返回值类型

let ret_fun = (x: number) => ({
  name: 'zhang',
  age: 25
})

let ret_fun2 = (x: number) => ({
  name: 'duan',
  age: 23,
  addr: 'henan'
})

ret_fun = ret_fun2
// 报错
// ret_fun2 = ret_fun

/**
 * 枚举
 * 1. 枚举和数字之间是兼容的, 字符串要求更严
 * 2. 枚举与枚举之间的值是不兼容的
 */

enum Fruit {
  Apple,
  Banana = 'banana'
}

let fruit_a: Fruit.Apple = 2
let fruit_b: number = Fruit.Apple

/**
 * 类
 * 1. constructor和静态成员不参与比较, 与接口一样少的兼容多的
 * 2. 当有私有成员或者受保护成员时，只有父子实例可以兼容(同样遵循鸭式定理)，其他之间不可兼容
 */

class Com_class {
  constructor() {}
  static firstname: string = 'zhang'
  id: number = 0
  private age: number = 25
}

class Com_class2 {
  constructor(x: number) {}
  static x: number = 1
  id: number = 1
  // addr: string = 'addr'
  private age: number = 23
}

let com_class = new Com_class()
let com_class2 = new Com_class2(2)

// com_class = com_class2
// com_class2 = com_class

// 子类继承
class Com_class3 extends Com_class {
  // addr: string = ''
}

let com_class3 = new Com_class3()
com_class3 = com_class
com_class = com_class3

/**
 * 泛型
 * 为指定泛型类型时，就当作any来比较
 */

interface Com_gen<T> {
  // value: T
}

let com_gen: Com_gen<Number> = {}
let com_gen2: Com_gen<Number> = {}
com_gen = com_gen2

// 接口中没有内容，相互兼容
// 有成员时不兼容
// com_gen = com_gen2
// com_gen2 = com_gen

// 泛型函数
let Com_genFun = <T>(x: T): T => {
  return x
}

let Com_genFun2 = <U>(x: U): U => x

// 当未确定具体类型时，相互兼容
Com_genFun = Com_genFun2
Com_genFun2 = Com_genFun