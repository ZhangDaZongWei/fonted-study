// todo组件是用来渲染单独一项todo

import React from 'react';

export const Todo = (props) => {

  let item = props.item
  
  return (
    <div className='todo'>
      {
        item.status ?
        <span>👌</span> :
        <span>👋</span>
      }
      <span className='content'>{item.content}</span>
    </div>
  )
}