// 数组扁平化

// 递归
let arr = [1,2,3,[4,5,6,[7,8,9]]]

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

console.log(flatArr2(arr))
