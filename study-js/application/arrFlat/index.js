// 数组扁平化

// 递归
let arr = [1,'2','3',[4,5,6,[7,8,9]]]

// 第一种方式
let flatedArr = []

function flatArr(arr) {
  for (let i of arr) {
    if (!Array.isArray(i)) {
      flatedArr.push(i)
    } else {
      flatArr(i)
    }
  }
}

// 第二种方式

function flatArr2(arr) {
  let result = []

  for (let i of arr) {
    if (Array.isArray(i)) {
      result = result.concat(flatArr2(i))
    } else {
      result.push(i)
    }
  }

  return result
}

// console.log(flatArr2(arr))

// toString()
// 缺点是对于数组中包含对象的情况不适用

function flatArr3(arr) {
  let str = arr.toString()
  console.log('str: ',str)
  let result = str.split(',').map(item => Number(item))
  console.log('result: ', result)
}

// reduce()

function flatArr4(arr) {
  // 包含递归，一定要return出去
  return result = arr.reduce((acc,curr) => 
    acc.concat(Array.isArray(curr) ? flatArr4(curr) : curr)
  ,[])
}

// console.log(flatArr4(arr))

// 扩展运算符

function flatArr5(arr) {
  i = 1
  while(arr.some(item => Array.isArray(item))) {
    arr = [].concat(...arr)
    console.log(i, arr)
    i++
  }

  return arr
}

flatArr5(arr)