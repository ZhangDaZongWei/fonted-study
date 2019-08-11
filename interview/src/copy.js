// 深拷贝和浅拷贝
// 深拷贝是指对于非基本类型的变量，则递归至基本类型变量后。再复制，即新对象和旧对象是完全隔离的，互不影响。
// 浅拷贝是指只对第一层进行拷贝，即当遇到引用类型时，则复制其引用，所以新对象随着旧对象改变

// 浅拷贝的例子
// for...in, Object.assign, 扩展运算符... , Array.property.slice, Array.property.concat等

let obj = {
  name: '段书晴',
  age: 23,
  habit: ['dance','study','game']
}

let objArr = []

for (let i in obj) {
  objArr.push(obj[i])
}

console.log('objArr: ', objArr)

let newObj = {
  ...obj
}

console.log('newObj: ',newObj)

obj.habit.push('love')

console.log('objArr: ', objArr)

console.log('newObj: ',newObj)

// 深拷贝的例子，它需要另外实现

let deepClone = JSON.parse(JSON.stringify(obj))

console.log('deepClone: ', deepClone)

obj.habit.push('me')

console.log('deepClone: ', deepClone)

// 上述使用JSON来处理，会存在很多问题
// 因为JSON的有效值的类型 int string Boolean null object array 不能为function undefined 对象实例 变量
// 所以在对象序列化JSON时，会忽略掉值为function undefined
// 另外对于symbol类型也会忽略
// 不能正确处理reg类型, 有的也说包括Date类型, 但是如下测试结果并没有问题
// 无法处理循环引用, 会出现报错

const i = 'hahaha'
const timer = new Date()
console.log('timer: ',timer)

const jsonObj = {
  name: 'zhangzongwei',
  age: function() { return 25 },
  address: undefined,
  company: new Object(),
  habit: i,
  timer,
  grade: Symbol('zhangzongwei'),
  reg: /123/
}

console.log('jsonObj to Json: ', JSON.stringify(jsonObj))
console.log('timerObj to Json: ', JSON.parse(JSON.stringify(timer)))