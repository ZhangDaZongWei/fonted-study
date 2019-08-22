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
  // 以？开头，然后是键值对的形式，不同参数用&分割
  // 去掉？
  let newSearch = search.slice(1)
  // 去掉“&”
  let newSearchArr = newSearch.split('&')
  // 去掉“=”
  let resultObj = []
  for(let i = 0; i < newSearchArr.length; i++) {
    let resultArr = newSearchArr[i].split('=')
    let key = resultArr[0], value = resultArr[1]
    resultObj.push({
      key,
      value
    })
  }
  console.log(resultObj)
}

let search = '?name=zhangzongwei&age=25'

getSearchArugments(search)