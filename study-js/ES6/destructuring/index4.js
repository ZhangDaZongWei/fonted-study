/**
 * 1. 对于编辑器来说，一个式子到底是模式还是表达式，必须解析到(或解析不到)等号才能知道。
 * 2. 变量声明语句，模式不能使用圆括号。函数参数也属于变量声明，不能带圆括号。
 * 3. 将整个模式或者半个模式放在圆括号中，会导致报错。
 * 4. 可以使用圆括号的情况只有一种, 赋值语句的非模式部分，可以使用圆括号。
 */

 /**
  * 用途:
  * 5. 交换变量的值
  * 6. 从函数返回多个值
  * 7. 方便地将一组参数与变量名对应起来
  * 8. 提取JSON数据
  * 9. 函数参数的默认值
  */

  /**
   * 10. 任何部署了Iierator接口的对象，都可以用for...of循环遍历。
   * 11. Map结构原生支持Iterator接口。Map类型数据具有键值(key,value),可以使用解构赋值取得key,value,也可以取得其中之一。
   * 12. 取得输入模块的制定方法。
   */
const map = new Map()
map.set('first','hello')
map.set('second','world')
for (let [key,value] of map) {
  console.log(key + ' ' + value)
}

const { SourceMapConsumer, SourceNode } = require("source-map")