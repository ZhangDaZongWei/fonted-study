/**
 * 1. 路由就是请求不同的地址，返回不同的页面内容，一般是后端操作的，其过程是这样的：
 *  1. 浏览器发出请求
 *  2. 服务器监听到某个端口发过来的url，并解析
 *  3. 根据服务器设定好的路由配置，返回相应的数据（html，json，图片等）
 *  4. 浏览器收到数据后，根据content-type字段去决定如何解析数据
 * 2. 所以，大概来讲，前端向后端请求资源时，就是通过“路由”的方式，而请求页面只是其中一种功能而已
 * 
 * 3. 为什么会出现前端路由呢？
 *  1. 整个流程：ajax(带来异步交互，不用整个刷新页面) ---> 异步交互更高级的体验SPA(单页面应用)，交互不用刷新，连路由调转都不用刷新了 ---> 为了实现上述功能，前端路由登场
 * 4. 路由的实现形式：
 *  1. hash, 因为url后加#并不回刷新页面，并且还会触发hashChange事件
 *    1. window.location保留了文档的位置信息，提供了一些导航信息，这就提供一些操作文档位置的属性(接口)
 *  2. history
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
      // 在处理“name=”时，得出的是['name','']比较神奇
      let resultArr = newSearchArr[i].split('=')
      // 没错，这儿也需要大于1
      if (resultArr.length > 1) {
        // 这里的对象指的是key作为对象的键，value作为对象的值
        this[resultArr[0]] = resultArr[1]
      }
    }
  } else {
    throw new TypeError('传入的参数不符合要求！')
  }
})(search)

console.log('obj: ',resultObj)