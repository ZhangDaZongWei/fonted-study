/**
 * nodeProxy中的目标服务器
 */

const http = require('http')

http.createServer((req,res) => {
  let receiveData = ""
  req.on("data",(data) => {
    receiveData += data
  })
  req.on("end",() => {
    res.writeHead(200,{
      'Content-type': 'text/plain'
    })
    res.end(JSON.stringify(receiveData))
  })
}).listen('4000',() => console.log('target server running in port 4000'))