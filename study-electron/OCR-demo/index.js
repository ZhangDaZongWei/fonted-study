// 入口文件
const path = require('path')
let appRoot = path.join(__dirname,'')

// 动态编译react代码
require('electron-compile').init(appRoot,require.resolve('./app/main'))