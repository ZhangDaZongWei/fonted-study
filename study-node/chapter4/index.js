/**
 * 网络编程HTTP(令人激动的你终于来了！)
 *  1. 使用的两种方式：
 *     1. 作为服务端使用时，创建一个HTTP服务器，监听HTTP客户端请求并返回响应
 *     2. 作为客户端使用时，发起一个HTTP请求，并接受响应的数据
 */

 const http = require('http')

//  在服务端编写一个服务
// createServer创建一个服务器，然后调用listen去监听。来一个请求，传入的函数就执行一次，同样是事件机制
http.createServer((request,response) => {
  response.writeHead(200,{ 'Content-type': 'text-plain' })
  response.end('Hello World')
}).listen(8124)
