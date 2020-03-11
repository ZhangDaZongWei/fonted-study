/**
 * 1. window.location保留了文档的位置信息，提供了一些导航信息，这就提供一些操作文档位置的属性(接口)
 */

 // 获取window.location.search的查询参数，并存入一个对象中

const getSearchArugments = (search) => {
  'use strict'
  // 以？开头，然后是键值对的形式，不同参数用&分割
  // 去掉？
  // 当字符串为空时，slice的结果同样为空字符串
  let newSearch = search.slice(1)
  // 去掉“&”
  // 当字符串为空时，split的结果不为空，其中包括一个空字符串，也就是长度为1
  let newSearchArr = newSearch.split('&')
  // 去掉“=”
  let resultObj = []
  for(let i = 0; i < newSearchArr.length; i++) {
    let resultArr = newSearchArr[i].split('=')
    console.log('resultArr: ',resultArr)
    // 访问数组时，如果下标超出数组的长度，则返回undefined
    let key = resultArr[0], value = resultArr[1]
    resultObj.push({
      key,
      value
    })
  }
  console.log(resultObj)
}

// 对于上面的判断过程，有一些不完善的地方；
// 1. 传入函数的参数(字符串)，有可能长度为0，但是不会出现报错，但是不符合预期，浪费资源
// 故改造如下：
const advanceGetSearchArugments = (search) => {
  // 因为对于实际情况来说，只有search的长度大于1才可行
  let resultObj = {}
  if (search.length > 1) {
    let newSearch = search.slice(1)
    let newSearchArr = newSearch.split('&')
    for (let i=0; i < newSearchArr.length; i++) {
      // 在处理“name=”时，得出的是['name','']比较神奇
      let resultArr = newSearchArr[i].split('=')
      // 没错，这儿也需要大于1
      if (resultArr.length > 1) {
        // 这里的对象指的是key作为对象的键，value作为对象的值
        resultObj[resultArr[0]] = resultArr[1]
      }
    }
  } else {
    throw new TypeError('传入的参数不符合要求！')
  }
  
  return resultObj
}

let search = '?name=zhangzongwei&age=25'

console.log('result: ',advanceGetSearchArugments(search))

// 使用匿名构造函数

const resultObj = new (function(search) {
  if (search.length > 1) {
    let newSearch = search.slice(1)
    let newSearchArr = newSearch.split('&')
    for (let i=0; i < newSearchArr.length; i++) {
      let resultArr = newSearchArr[i].split('=')
      if (resultArr.length > 1) {
        this[resultArr[0]] = resultArr[1]
      }
    }
  } else {
    throw new TypeError('传入的参数不符合要求！')
  }
})(search)

console.log('obj: ',resultObj)