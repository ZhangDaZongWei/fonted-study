// 将 // @require '../style/index.css' 转换为 require('../style/index.css')

function replace(content) {
  return content.replace(/(\/\/ +@require) *(('|").+('|")).*/,'require($2);')
}

module.exports = replace;