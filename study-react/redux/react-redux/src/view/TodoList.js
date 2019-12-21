// todolist展示组件，但是它还要依据VisibilityFilters的选择状态

import React, { Component } from 'react';
import store from './redux/store';
import { toggleStatusAcion } from './redux/actionCreator';
import { Todo } from './Todo';

export default class TodoList extends Component {

  constructor() {
    super()
    this.state = store.getState()
    // 订阅
    store.subscribe(() => this.changeState())
  }

  // 改变
  changeState() {
    this.setState(store.getState())
  }

  handleClick(item,index) {
    store.dispatch(toggleStatusAcion({
      status: item.status,
      index
    }))
  }

  render() {
    
    const {status,todoList} = this.state
    if (!todoList.length) {
      return (<div>赶紧添加你的todo列表吧<span role="img" aria-label="img">😆</span></div>)
    }

    const incomplete = todoList.filter(item => item.status === 'incomplete')
    const completed = todoList.filter(item => item.status === 'completed')
    let content = ''
    switch(status) {
      case 'all':
        content = todoList
        break
      case 'incomplete':
        if (!incomplete.length) {
          return <div>哇噻！你的todo list已经完成了</div>
        } else {
          content = incomplete
        }
        break
      case 'completed':
        if (!completed.length) {
          return <div>嘿！赶紧去完成todo list吧</div>
        } else {
          content = completed
        }
        break
      default: return <div>没有符合的状态！</div>
    }

    return (
      <div className='todoList'>
        {
          content.map((item,index) => {
            return <Todo item={item} onClick={() => this.handleClick(item,index)} key={`${item}-${index}`} />
          })
        }
      </div>
    )
  }
}

