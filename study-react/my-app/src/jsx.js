import React from 'react'
import ReactDOM from 'react-dom'

// 1. JSX是js语法的扩展
// 2. JSX语法里大括号{}中盛放js表达式

const name = 'duanshuqing'
const element = <h1>Hello,{name}</h1>


// 3. JSX也是表达式，意味着可以将JSX赋值给变量，作为参数，或者返回

function linkLove(n1,n2) {
  const text = <h1>{n1} love {n2}</h1>
  return text
}

// 4. JSX语法添加标签属性时，要么用''/""的字符串字面量形式，要么就是{}形式，后者一般用于js表达式。
// 5. JSX语法中使用camelCase（小驼峰命名）表示属性，如class变成className
// 6. JSX语法中可以嵌套
// 7. JSX表达式--->React.createElement()--->React元素--->渲染为DOM

const element1 = React.createElement(
  'h1',
  {className: 'greeting'},
  'Hello World'
)

ReactDOM.render(
  element1,
  document.getElementById('root')
)