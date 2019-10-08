// todolist展示组件，但是它还要依据VisibilityFilters的选择状态

import React, { Component } from 'react';
import { Todo } from './Todo';

export default class TodoList extends Component {

  render() {
    
    const todoList = [
      {
        status: true,
        content: '吃饭'
      },
      {
        status: false,
        content: '睡觉'
      },
      {
        status: true,
        content: '工作'
      },
      {
        status: false,
        content: '休息'
      },
    ]

    return (
      <div className='todoList'>
        {
          todoList.map((item,index) => (
            <Todo item={item} key={`${item}-${index}`} />
          ))
        }
      </div>
    )
  }
}

