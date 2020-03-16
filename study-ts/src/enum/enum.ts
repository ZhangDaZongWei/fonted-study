// 数字枚举
// 里面元素是递增的，也可以给元素设置初始值
enum Role {
  Reporter=1,
  Developer=3,
  Maintainer,
}

console.log('role: ', Role)

// 字符串枚举
enum Message {
  success = 'success',
  fail = 'fail'
}

console.log('message: ', Message.success, Message)

// 异构枚举
enum Answer {
  Y,
  N = 'no',
  T=1,
  F
}

console.log('answer: ', Answer)

// 枚举成员的性质
enum Char {
  // const member
  a,
  b,
  c = a,
  d = 1+2,
  // compute member
  e = [1,2,3].length,
  f = Math.random()
}

console.log("char: ", Char)

// 常量枚举
const enum Info {
  name,
  age
}

console.log('info: ', Info.name)

// 自定义枚举类型
enum E {a, b}
enum F {a=1, b=2}
enum H {a='a', b='b'}

let e_a : E = 3
let e_b : E.b = 4
console.log('E: ', e_a === e_b, E)

// 字符串类型只能赋已有的值
let h_a : H = H.a
// 若还属于枚举成员则只能是这个成员的值
let h_b : H.b = H.b

// 环境枚举
declare enum Enum {
  x=1,
  y,
  z=3
}