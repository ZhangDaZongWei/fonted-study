// 主文件
const replace = require('./replace')

function index(content) {
  // 提供缓存加速
  if (this.cacheable) {
    this.cacheable()
  }
  return replace(content)
}

module.exports = index