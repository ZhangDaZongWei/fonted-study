/**
 * 网络编程HTTP(令人激动的你终于来了！)
 *  1. 使用的两种方式：
 *     1. 作为服务端使用时，创建一个HTTP服务器，监听HTTP客户端请求并返回响应
 *     2. 作为客户端使用时，发起一个HTTP请求，并接受响应的数据
 *  2. HTTP请求。本质上是一个数据流，有请求头(header)和请求体(body)组成，注意header和body之间有一个空行。HTTP请求再发送给服务器时，可以认为是按顺序
 *     一个一个字节以数据流的形式进行的。通常在服务端使用回调函数中request参数获取请求的信息，除了将request当作对象外，还可以作为一个只读数据流
 *  3. 
 */

 const fs = require('fs')
 const http = require('http')

//  在服务端编写一个服务
// createServer创建一个服务器，然后调用listen去监听。来一个请求，传入的函数就执行一次，同样是事件机制
// http.createServer((request,response) => {
//   response.writeHead(200,{ 'Content-type': 'text-plain' })
//   response.end('Hello World')
// }).listen(8124)

// 使用createServer的request参数获取到请求信息
// 证明request参数也可以作为一个只读数据流

// const ws = fs.createWriteStream('./files/request.txt')

function getRequest() {
  http.createServer((request,response) => {
    console.log('request: ', request)
    
    let body = []

    const header = request.headers
    const method = request.method

    request.on('data',chunk => {
      body.push(chunk)
    })

    request.on('end',() => {
      body = Buffer.concat(body)
      console.log('body: ',body.toString())
    })

    response.writeHead(200,{ 'Content-type': 'text-plain' })
    response.end('Hello World')

  }).listen(80)
}

getRequest()