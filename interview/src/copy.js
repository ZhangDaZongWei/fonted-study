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