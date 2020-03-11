import React from 'react'
import ReactDOM from 'react-dom'
import './index2.css'

// 1. 组件可以接受任意 props，包括基本数据类型，React 元素以及函数
const LovePersons = (props) => {
  return (
    <div>
      <p className={'top-' + props.love}>{props.top}</p>
      <p className={'next-' + props.you}>{props.next}</p>
    </div>
  )
}

ReactDOM.render(
  <LovePersons 
    love='love' 
    you='you' 
    top={ <h1>L O V E</h1>} 
    next={ <h1>Y O U</h1> } 
  />,
  document.getElementById('root')
)