// 对象接口
interface List {
  // 只读属性
  readonly id: Number;
  name: String;
  // 加上了索引
  // [x: string]: any
  // 可选属性
  age?: Number;
  getName(): void
}

interface Result {
  data: List[]
}

function render(result:Result) {
  result.data.forEach(item => {
    console.log(item.id, item.name, item.getName())
  });
}

// 当不作数据类型约束时，其中可以添加其他的属性，原因是ts采用了“鸭式变形法”(一种动态语言风格)，如下：
// 当作数据类型约束时，则不可添加
let result = {
  data: [
    {id: 0, name: 'zhangzongwei', sex: '男', getName: () => {}},
    {id: 1, name: 'duanshuqing', getName: () => {}}
  ]
}

render(result)

// 当将数据直接传入render时，也不可以添加其他属性，有三种解决方式：
// 1. 添加类型断言：明确地告诉编译器数据的类型
render({
  data: [
    {id: 0, name: 'zhangzongwei', sex: '男', getName: () => {}},
    {id: 1, name: 'duanshuqing', getName: () => {}}
  ]
} as Result)

// or
// 这种方式在React中会出现歧义
render(<Result>{
  data: [
    {id: 0, name: 'zhangzongwei', sex: '男', getName: () => {}},
    {id: 1, name: 'duanshuqing', getName: () => {}}
  ]
})

// 2. 在接口中使用索引，见接口List
// 3. 第三种就是将数据赋值给一个变量，再传入函数即可

// 不确定接口中有多少个属性，可以使用索引
// 数字索引
interface StringArr {
  [x: number]: string
}

let char : StringArr = {
  0: 'me'
}

// 字符串索引
interface Names {
  [y: string]: string;
}

// 两者可以混用，number返回的属性值一定要和string返回的属性值一样
// 因为当通过number索引时，也是先转换为string再去索引，所以返回的属性值类型要相同
interface Age {
  [x: string]: string,
  [y: number]: string
}

let nameObj : Names = {
  firstName: 'zongwei',
  1: 'zhang'
}

// 字符串有两种访问方式
console.log(nameObj['firstName'],nameObj.firstName)


// 函数接口
interface Add {
  (x: number, y: number) : number
}

let inter_add : Add = (x:number, y:number) => x+y

// 使用类型别名，关键字type声明，即给函数类型另起一个名字
type Add2 = (x: number, y: number) => number

let inter_add2 : Add2 = (x: number, y: number) => x+y

// 混合接口
interface Lib {
  // 匿名
  (): void;
  version: string;
  getVersion(x: string): void
}

function createLib() {
  let lib : Lib = (() => {}) as Lib
  lib.version = '1.0'
  lib.getVersion = (ver: string) => ver
  return lib
}

let lib = createLib()
lib()
console.log('version: ',lib.getVersion('1.0'))