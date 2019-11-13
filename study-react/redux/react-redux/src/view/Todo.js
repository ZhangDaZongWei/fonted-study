// todo组件是用来渲染单独一项todo

import React from 'react';

export const Todo = (props) => {

  let item = props.item
  let onClick = props.onClick
  
  return (
    <div className='todo' onClick={() => {
      if (onClick) {
        onClick()
      }
    }}>
      {
        item.status === 'incomplete' ?
        <span>👋</span> :
        <span>👌</span>
      }
      <span className={`content ${item.status === 'completed' ? 'contented' : ''}`}>{item.name}</span>
    </div>
  )
}