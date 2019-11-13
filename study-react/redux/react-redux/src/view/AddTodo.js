// 添加TODO组件
import React, { Component } from 'react';
import store from './redux/store';
import { addTodoAction } from './redux/actionCreator';

export default class AddTodo extends Component {

  constructor() {
    super()
    this.state = {
      inputValue: ''
    }
  }

  handleChange(e) {
    let inputValue = e.target.value
    if (inputValue.trim()) {
      this.setState({
        inputValue
      })
    }
  }

  handleClick() {
    let { inputValue } = this.state
    if (inputValue) {
      store.dispatch(addTodoAction(inputValue))
    }
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