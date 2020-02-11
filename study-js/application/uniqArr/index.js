/**
 * 数组去重
 */

const arr1 = [1,2,3,2,4,5,5,6]
const arr2 = [
  {name:"zhang",age: 25},
  {name:"duan",age: 24},
  {name:"zhang",age: 26}
]

const uniqArr = (arr,key) => {
  if (!key) {
    return [...new Set(arr)]
  }
  return [...new Map(arr.map(item => [item[key],item])).values()]
}

console.log('arr1 uniq: ', uniqArr(arr1))
console.log('arr2 uniq: ', uniqArr(arr2,'name'))