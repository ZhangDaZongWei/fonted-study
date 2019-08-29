// const arr = new Array()

const randNum = (min,max) => {
  // ceil向上取整
  min = Math.ceil(min)
  // floor向下取整
  max = Math.floor(max)

  return Math.floor(Math.random() * (max - min)) + min
}

// 递归的方法

function insertArr(arr) {
  arr = arr || []
  if (arr.length == 5) {
    return arr
  }
  let number =  Math.floor(Math.random() * (32 - 2)) + 2
  if (number in arr) {
    return insertArr(arr)
  }
  arr.push(number)
  return insertArr(arr)
}

console.log(insertArr())