// 函数定义方式
function func(x: number, y: number) {
  return x+y
}

let func2 = (x:number, y:number) => x+y
// 定义但是没有实现
let func3: (x: number, y: number) => number
interface Func4 {
  (x: number, y: number): number
}
type Func5=(x:number, y: number) => number

// 可选参数, 必须位于必须参数的后面
function optionFun(x: number, y?: number) {
  return y ? x+y : x
}

console.log('optionFun: ', optionFun(1,2))

// 参数默认值
// 最后一个有默认值的参数可以不赋值
function defaultValFun(x:number, y=0, z: number, j=2) {
  return x + y + z + j
}

console.log('defaultValFun: ', defaultValFun(1,undefined,3))

// 不确定参数的数量, 使用剩余参数
function restFun(x: number, ...rest: number[]) {
  return x + rest.reduce((pre,curr) => pre+curr)
}

console.log("restFun: ", restFun(1,2,3))

// 函数重载
// 编译的时候会生成一个重载函数列表，逐个匹配
function reloadFun(...rest: number[]) : number
function reloadFun(...rest: string[]) : string
function reloadFun(...rest: any[]) : any {
  if (typeof rest[0] === 'number') return rest.reduce((pre, curr) => pre+curr)
  return rest.join('')
}

console.log('reloadFun: ', reloadFun('a','b','c'))

// this
let fun_obj = {
  name: 'zhangzongwei',
  getName: function() {
    return () => {
      console.log('name: ', this.name)
    }
  }
}

fun_obj.getName()()

// 可以指定this的类型
interface Fun_obj2 {
  name: string,
  // 指定this为Fun_obj2类型
  getName(this: Fun_obj2): () => void
}

let fun_obj2: Fun_obj2 = {
  name: 'zhangzongwei',
  getName: function(this: Fun_obj2) {
    return () => {
      console.log('name2: ', this.name)
    }
  } 
}

fun_obj2.getName()()

// 当this的类型指定为void，说明this不为任何类型
function handler(callback: (this: void, event: string) => void) {
  callback('event')
}

function callback(this: void, event: string) {
  console.log('event: ', event)
}

// 箭头函数没有this，它的this是最内层function函数中的this
let callback2 = (event: string) => {
  console.log('event2: ', event)
}

handler(callback)
handler(callback2)