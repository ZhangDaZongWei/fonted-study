// 服务端代码
// 需要设置：
// Content-type：'text/event-stream'
// Cache-control：'no-cache'(不设置缓存)

const http = require('http')

http.createServer(function (req,res){
  console.log('url: ',req.url)
  res.writeHead(200,{
    "Content-Type": "text/event-stream",
    "Cache-Control": "no-cache",
    "Connection": "keep-alive",
    "Access-Control-Allow-Origin": "*"
  })

  res.write("retry: 10000\n")
  res.write("event: Connecttime\n")
  res.write("data: " + (new Date()) + "\n\n")
  res.write("data: " + (new Date()) + "\n\n")

  setInterval(function() {
    res.write("data: " + (new Date()) + "\n\n")
  },1000)
}).listen(5501,'127.0.0.1')