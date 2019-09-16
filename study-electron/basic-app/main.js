// 运行main.js中的进程称为主进程，一个electron应用有且只有一个主进程
// 每个electron中的web页面运行在它自己的渲染进程中
// 两者的关系是: 主进程中使用BrowserWindow创建的页面,都在自己的渲染进程中运行,同生共死。另外，web页面中不可操作GUI相关的API，如果真的要操作，则需使用进程之间的通信(IPC)，如ipcRenderer 和 ipcMain模块发送消息，使用 remote模块进行RPC方式通信
/**
 * electron can do:
 * 1. 可以使用所有的node.js API和node.js模块
 * 2. 主进程模块，渲染进程模块，主进程和渲染进程共用模块。这里需要注意的是，渲染进程中有一个remote模块,可以直接调用主进程的模块，大大简化了进程间通信
 * 
 */


// 此文件运行在主进程中
const { app, BrowserWindow } = require('electron')
const fs = require('fs')

function createWindow() {
  // win就是一个页面实例，当它销毁之后，所对应的渲染进程也就被终止了
  let win = new BrowserWindow({
    width: 800,
    height: 600,
    webPreferences: {
      nodeIntegration: true
    }
  })

  win.loadFile('./render/index.html')

  // 打开开发者工具
  win.webContents.openDevTools()

  // 监听对应窗口关闭事件
  win.on('closed', () => {
    win = null
  })
}

app.on('ready',createWindow)

// 监听全部窗口关闭事件 
app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
})

app.on('activate', () => {
  if (win === null) {
    createWindow()
  }
})

