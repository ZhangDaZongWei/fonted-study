### node.js

1. 保障node.js性能的稳定性
   > process.on('uncaughtExpection', callback) 可以处理未捕获的 throw Error 异常

   > process.on('unhandledRejection', callback) 用于处理未捕获的 promise reject 异常

   > 尽可能手动的为一些可能出现异常的代码片段加上 try...catch，如 JSON.parse
   
   > 为保证进程在系统收到信号时间时正常退出，通常我们会在 process.on('SIGTERM', callback) 去释放占用的资源