import React from 'react'
import ReactDOM from 'react-dom'

// 1. JSX果然很灵活
// 2. 循环必须有key，而且key要设置在map里的元素中

const list = [1,2,3,4,5,6]
// const liItem = list.map(num => <li>{num}</li>)

function YieldList(props) {
  const liItem = props.list.map(num => <li key={num}>{num}</li>)

  return (
    <div>
      <ul>{liItem}</ul>
      <p>{props.className}</p>
    </div>
  )
}

function List() {
  return (
    <div>
      <YieldList className='class' list={list} />
    </div>
  )
}

ReactDOM.render(
  <List />,
  document.getElementById('root')
)