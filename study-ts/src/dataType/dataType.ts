let bool : boolean | undefined | null = true
let num : Number | undefined | null = 1
let s : String = 'zhang'

let n : null = null
let undef : undefined = undefined
// undefined和null是所有类型的子类型，应当可以赋值给其他类型
// 但是必须设置strictNullChecks为false
// 第二种方式就是设置联合类型，如上，此时strictNullChecks为true，或未设置
bool = undefined
num = null

// 数组
let arr : number[] = [1,2,3]
let arr2 : Array<number> = [1,2,3]
let arr3 : Array<number | string | boolean> = [1,2,3,'arr',true]

// 元组tuple，即规定好了元素数据类型和个数
let tuple : [number,string] = [1,'tuple']
// 可以push越界
tuple.push(3)
// 但是不可以越界访问
// tuple[2]

// 函数
let add = (a : number, b : number) => a + b
// 可以指定函数返回值类型，但是ts有自动推导功能，所以一般不用指定
let add2 = (a : number, b : number) : number => a + b
// 还可以定义一个函数，但是不需要立即实现它
let add3: (x : number, y : number) => number
// 实现它，但是形参的名称可以不一样
add3 = (a : number, b : number) => a + b

// 对象
let obj : Object = { x: 1, y: 2}
// 这样的定义方式不允许修改属性值
// obj.x = 3
let obj2 : { x: number, y: number} = { x: 1, y: 2}
obj2.x = 3

// symbol
let sym : Symbol = Symbol()

// void，是操作符，使任何表达式返回undefined
// 如下的函数的返回值就是void类型
let noReturn = () => {}
// 必须设置strictNullChecks为false
// let unusable: void = null
// unusable = undefined

// 不指定任何类型，就为any类型，与js变量一样
let any: any
any = 1
any = 2

// never类型
// 会抛出错误的函数
let err = (x: number) => {
  throw new Error("")
}
// 死循环函数
let loop = () => {
  while(true) {}
}