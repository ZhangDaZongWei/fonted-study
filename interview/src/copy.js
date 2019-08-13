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

// 深拷贝的实现

// 以下是只判断对象类型，不包括一些包装对象类型如Array，Number，Boolean等

function isRealObject(arg) {
  return Object.prototype.toString.call(arg) === '[Object Object]'
}

// 判断是否是对象，当然还有包括数组，所以采用typeof

function isObject(arg) {
  return typeof arg === 'object' && arg != null
}

// 1. 简单的浅拷贝的实现

function copy(source) {
  // 2. 此实现有很多问题，例如如果传入基本类型，包括null，defined，不能返回对象吧，传入数组不能返回对象吧
  // 所以是基本类型包括null，defined直接返回
  if (!isObject(source)) return source

  // 对数组做兼容
  let target = Array.isArray(source) ? [] : {}

  for (let key in source) {
    target[key] = source[key]
  }

  return target
}

const source1 = {
  name: 'zhangzongwei',
  age: 25,
  apprance: {
    tall: 170
  }
}

const copy1 = copy(source1)

console.log('copy1: ',copy1)

source1.apprance.weight = 130

console.log('copy1: ',copy1)

const copy2 = copy(null)

console.log('copy2: ',copy2)

const copy3 = copy(undefined)

console.log('copy3: ',copy3)

const copy4 = copy([1,2,3])

console.log('copy4: ',copy4)

// 深拷贝的实现

// 1. 深拷贝就是在原来的浅拷贝的基础上，当值为引用类型时，进行递归调用

// 2. 还有循环引用的情况，很难处理，这里使用哈希表(就是散列表)和数组，将所有遍历的引用属性和其对应的target都存起来，如果有就直接返回
// 没有则继续，这样防止了死循环
// 使用哈希表出现了问题？以下是数组形式
// 遍历数组，找出已经存在的项
function isExist(arr,obj) {
  for (let i=0; i<arr.length; i++) {
    if (arr[i].source === obj) {
      return arr[i].target
    }
    return null
  }
}

// 3. 引用丢失的情况也是用第二种方式解决的

function deepCopy(source,hash =[]) {
  if (!isObject(source)) return source

  if (isExist(hash,source)) return isExist(hash,source)

  let target = Array.isArray(source) ? [] : {}
  hash.push({
    source: source,
    target: target
  })

  for (let key in source) {
    if (isObject(source[key])) {
      target[key] = deepCopy(source[key],hash)
    } else {
      target[key] = source[key]
    }
  }
  return target
}

const deepCopy1 = deepCopy(source1)

console.log('deepCopy1: ',deepCopy1)

source1.apprance.look = 'nice'

console.log('deepCopy1: ', deepCopy1)

source1.reference = source1

const deepCopy2 = deepCopy(source1)

console.log('deepCopy2: ',deepCopy2)
