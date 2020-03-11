function show(content) {
  window.document.querySelector('.app').innerHTML = 'Hello ! ' + content
}

// 通过commonJS导出show函数
module.exports = show