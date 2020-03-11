import React from 'react'
import ReactDOM from 'react-dom'

// 1. React元素是不可变对象，一旦被创建，你就无法更改它的子元素或者属性。
//  唯一的方式是创建一个全新的元素，并将其传入 ReactDOM.render()。
// 2. ReactDOM只会更新改变的部分

function tick() {
  const element = (
    <div>
      <h1>Hello World!</h1>
      <h2>It is {new Date().toLocaleTimeString()}</h2>
    </div>
  )
  ReactDOM.render(element,document.getElementById('root'))
}

setInterval(tick,1000)