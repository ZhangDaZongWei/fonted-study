// 外部js文件

let i = 0

function timedCount() {
  setInterval(function() {
    i++
    // 这个函数很关键，是向页面发送消息的
    postMessage(i)
  },1000)
}

timedCount()