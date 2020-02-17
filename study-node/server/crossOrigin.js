/**
 * 用于跨域操作的服务
 */

const http = require('http')
// 解析url 
const urlTool = require('url')

const data = {
  name: "zhangzongwei",
  age: 25
}

// 运行每个服务
const runServer = (server,serverName) => {
  server().listen(80,() => console.log(`${serverName} running in port 80`))
}

// jsonp
const jsonpServer = () => {
  return http.createServer((req,res) => {
    res.writeHead(200,{ 'Content-Type': 'text/plain' })
    const params = urlTool.parse(req.url,true)
    let str = ""
    if (params.query && params.query.callback) {
      str=`${params.query.callback}(${JSON.stringify(data)})`
    }
    console.log("str: ",str)
    res.end(str)
  })
}

// CORS
const corsServer = () => {
  return http.createServer((req,res) => {
    let receiveData = ""
    req.on('data',(data) => {
      receiveData += data
    })
    req.on("end",() => {
      res.writeHead(200,{
        'Content-Type': 'text/plain',
        'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
        'Access-Control-Allow-Methods': 'GET,PUT'
      })
      res.end(JSON.stringify(receiveData))
    })
  })  
}

// node proxy
// 这是个代理作用的服务器
const nodeProxy = () => {
  return http.createServer((req,res) => {
    res.writeHead(200,{
      'Content-Type': 'text/plain',
      'Access-Control-Allow-Origin': 'http://127.0.0.1:5500',
      'Access-Control-Allow-Methods': 'GET,POST'
    })
    let receiveData = ""
    req.on('data',(data) => {
      receiveData += data
    })
    req.on("end",() => {
      // 转发到别的服务器
      const requestServer = http.request(
        {
          host: '127.0.0.1',
          port: 4000,
          url: '/',
          method: req.method,
          headers: req.headers
        },
        serverResponse => {
          let responseData = ''
          serverResponse.on("data",(data) => {
            responseData += data
          })
          serverResponse.on("end",() => {
            res.end(responseData)
          })
        }
      )
      requestServer.write(receiveData)
      requestServer.end()
    })
  })
}

// runServer(jsonpServer,"jsonpServer")
// runServer(corsServer,"corsServer")
runServer(nodeProxy,"nodeProxy")
