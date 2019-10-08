// 添加TODO组件
import React, { Component } from 'react';

export default class AddTodo extends Component {

  handleChange(e) {

  }

  handleClick() {

  }

  render() {
    return (
      <div className='addTodo'>
        <input type='text' placeholder='Please input a todo' onChange={(e) => this.handleChange(e)}></input>
        <button onClick={() => this.handleClick()}>Add Todo</button>
      </div>
    )
  }
}