/**
 * Babel是什么？
 *  1. babel是一个JavaScript编译器。一看到编译器就要扯上编译原理了，可惜没学好，因为确实有点儿难。
 * Babel能做什么？
 *  1. 当然是转译了，不过它只转译新标准引入的语法：
 *    1. 箭头函数
 *    2. let / const
 *    3. 解构
 *    而对于新标准引入的全局变量、部分原生对象新增的原型链上的方法，
 *    就不会转译了，这时就需要使用ployfill：
 *    1. 全局变量： promise、symbol、weakmap、set
 *    2. includes
 *    3. generator函数
 * Babel是如何工作的呢？
 *  1. 解析(parsing)：将代码字符串解析成抽象语法树AST
 *  2. 转换(Transformation)：对抽象语法树进行转换操作
 *  3. 生成(Code Generation)：根据变换后的抽象语法树再生成代码字符串
 *  也可以见babel.png
 * 介绍一下AST是怎么来的呢？
 *  1. 分词：将整个代码字符串分割成语法单元数组/最小单元
 *     js中的语法单元主要包括：
 *     1. 关键字：const、let、var等
 *     2. 标识符：定义的变量，也可能是true、false常量
 *     3. 运算符
 *     4. 数字
 *     5. 空格
 *     6. 注释：对于注释来说，知道是注释就行了，不用关心起具体内容
 *  2. 语法分析：建立分析语法单元之间的关系，其实就是对语句和表达式的识别，
 *     并建立起它们之间的联系
 */

// 以console.log("xyz")为例，写一个分词器
// 具体思想是对于上述表达式看作一个字符串，然后对字符进行遍历分词分类
// 那么对于上述来讲具体的分类有：标点符号、标识符、字符串，空格

const tokenizer = (input) => {
  let token = []
  let punctuators = ['.','(',')','=',',',';']

  let current = 0
  
  // 循环遍历输入的字符串
  while(current < input.length) {
    let char = input[current]
  
    // 先区分标点符号
    if (punctuators.indexOf(char) !== -1) {
      token.push({
        type: 'punctuators',
        value: char
      })
      // 自增current，并回到原点继续
      current++
      continue
    }

    // 区分空格，不需要添加到token里
    let WHITESPACE = /\s/
    if (WHITESPACE.test(char)) {
      current++
      continue
    }

    // 区分标识符，标识符一般以英文大小写字母、$、_开始
    // 但是注意标识符可不止一个字符哦，所以要在内部循环
    if (/[a-zA-Z\$\_]/.test(char)) {
      let value = ''
      while(/[a-zA-Z0-9\$\_]/.test(char)) {
        value += char
        char = input[++current]
      }
      token.push({
        type: 'Identifier',
        value
      })
      continue
    }

    // 区分数字,同样数字也不止一个
    if (/[0-9]/.test(char)) {
      let value = ''
      while(/[0-9]/.test(char)) {
        value += char
        char = input[++current]
      }
      token.push({
        type: 'Numeric',
        value
      })
      continue
    }

    // 区分字符串，字符串一般以'或者"开头，并以其结尾
    if (char === "'") {
      let value = ''
      char = input[++current]
      while(char !== "'") {
        value += char
        char = input[++current]
      }

      current++

      token.push({
        type: 'String',
        value
      })
      continue
    }

    // 如果都不符合就抛出异常
    throw new TypeError('Unexpected char：' + char)
  }

  return token

}

console.log(tokenizer("console.log('xyz')；"))

/**
 * 生成AST之后是如何转换的呢？
 *  1. 插件plugins：应用于babel的整个转译过程中，尤其是第二个阶段Transformation，
 *     如果这个阶段不使用任何插件，则babel会原样输出代码，所以呢，看出来了吧，babel
 *     的转译必须靠插件
 *     1. presets：这是babel官方做得一些预设的插件集，这样我们直接使用就可以了
 *        每年每个preset只编译当年通过的内容。babel-preset-env相当于ES2015、
 *        ES2016、ES2017及最新版本
 *     2. 插件当然要使用piugins字段了。注意哦，这里引入插件的时候可以使用相对路径
 *     3. plugins和preset的优先级，当然了，它们共同作用于一个节点时才区分先后：
 *        plugins在先，而且它内部的插件执行顺序是是从前往后，很符合平常逻辑
 *        preset在后，但是它内部的插件执行顺序是从后往前，很奇葩吧
 * Babel常用API
 *  1. @babel/core：babel的编译器，核心API都在这里面，如transform、parse
 *  2. @babel/cli：cli命令行工具，就是能在命令行使用babel选项
 *  3. @babel/node：可以直接在node环境中，运行ES6代码
 *  4. babylon：babel的解析器
 *  5. babel-traverse：用于对AST的遍历，维护了整棵树的状态，并且负责替换、移除和添加节点
 *  6. babel-types：用于AST节点的Lodash式工具库 ，包含了构造、验证以及变换 AST 节点的方法
 *  7. babel-generator：Babel 的代码生成器，它读取 AST 并将其转换为代码和源码映射（sourcemaps）
 *        
 */