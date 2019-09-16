const BrowserWindow = require('electron').remote.BrowserWindow

let btn = document.querySelector('.button')
let content = document.querySelector('.content')
btn.addEventListener('click',(event) => {
  // 主进程不能进行dom操作
  // 这里如果想让主进程进行响应，那么就要使用进程间的通信了
  // content.textContent = 'click...'
  let win = new BrowserWindow({
    width: 500,
    height: 300,
    frame: true,
  })

  win.loadFile('./render/test.html')

  win.on('closed',() => {
    win=null
  })

})