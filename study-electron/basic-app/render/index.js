const { shell, remote, ipcRenderer } = require('electron')
const os = require('os')
const {BrowserWindow} = remote
const path = require('path')

let btn = document.querySelector('.button')
let content = document.querySelector('.content')
let focusBtn = document.querySelector('.focus-button')
let openFileBtn = document.querySelector('.openFile-button')
let openLinkBtn = document.querySelector('.openLink-button')
let noteBtn = document.querySelector('.note-button')
let pathBtn = document.querySelector('.path-button')
let pathContent = document.querySelector('.path-content')
let trayBtn = document.querySelector('.tray-button')
let dragFile = document.querySelector('.drag-file')
let linkBtn = document.querySelector('.link-button')
btn.addEventListener('click',(event) => {
  // 主进程不能进行dom操作
  // 这里如果想让主进程进行响应，那么就要使用进程间的通信了
  // content.textContent = 'click...'
  const modalPath = path.join('file://',__dirname,'test.html')

  const hideFocusBtn = () => {
    focusBtn.classList.add('disappear')
    focusBtn.classList.remove('appear')
    focusBtn.removeEventListener('click',() => console.log('hide'))
  }

  const showFocusBtn = () => {
    focusBtn.classList.add('appear')
    focusBtn.classList.remove('disappear')
    focusBtn.addEventListener('click',clickHandler)
  }

  let win = new BrowserWindow({
    width: 500,
    height: 300
  })

  // 监听窗口大小和位置的变化
  win.on('resize',updateReply)
  win.on('move',updateReply)

  // 监听窗口的聚焦和失焦
  win.on('blur',showFocusBtn)
  win.on('focus',hideFocusBtn)

  // 监听窗口的崩溃
  win.webContents.on('crashed',() => {
    const options = {
      type: 'info',
      title: '渲染器进程崩溃',
      message: '此页面已经崩溃',
      buttons: ['重载','关闭']
    }

    dialog.showMessageBox(options,(index) => {
      if (index === 0) win.reload()
      else win.close()
    })

  })

  // 监听窗口关闭，进而销毁win实例
  win.on('closed',() => {
    win=null
  })

  win.loadURL(modalPath)
  win.show()

  function updateReply() {
    content.textContent = `大小：${win.getSize()} 位置：${win.getPosition()}`
  }

  function clickHandler() {
    win.focus()
  }

})

openFileBtn.addEventListener('click',(e) => {
  shell.showItemInFolder(os.homedir())
})

openLinkBtn.addEventListener('click', (e) => {
  shell.openExternal('https://baidu.com')
})

noteBtn.addEventListener('click',(e) => {
  const note = {
    title: '基本通知',
    body: '简短的通知内容',
    // icon: 可以带图像
  }
  const myNote = new window.Notification(note.title,note)
  myNote.onclick = () => {
    console.log('通知被点击！')
  }
})

pathBtn.addEventListener('click', (e) => {
  console.log('click...')
  // 给主进程发送消息
  ipcRenderer.send('open-file-dialog')
})

// 接收主进程消息
ipcRenderer.on('selected-directory',(e,path) => {
  pathContent.textContent = `你选择的文件路径为: ${path}`
})

// 判断托盘是否生效
let trayOn = false

trayBtn.addEventListener('click', (e) => {
  if (trayOn) {
    trayOn = false
    trayBtn.textContent = '放入托盘'
    ipcRenderer.send('remove-tray')
  } else {
    trayOn = true
    trayBtn.textContent = '移除托盘'
    ipcRenderer.send('put-in-tray')
  }
})

dragFile.addEventListener('dragstart',(e) => {
  e.preventDefault()
  ipcRenderer.send('ondragstart',__filename)
})

linkBtn.addEventListener('click', (e) => {
  const pageDirectory = __dirname.replace('app.asar','app.asar.unpacked')
  const pagePath = path.join('file://',pageDirectory,'link.html')
  shell.openExternal(pagePath)
})