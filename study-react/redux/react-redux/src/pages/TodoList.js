import React, { Component } from 'react';
import { connect } from 'react-redux';
import { 
  getDefaultState3,
  changeInputAction,
  addTodoAction,
  delTodoAction
 } from '../store/actionCreator';

import TodoListUI from './TodoListUI.js'; 

// 逻辑组件
class TodoList extends Component {

  componentDidMount() {
   const { initDefaultState } = this.props
   initDefaultState()
  }

  render() { 

   const { inputValue, data, handleChange, handleAddTodo, handleDelTodo } = this.props
    return ( 
      <TodoListUI 
        inputValue={inputValue} 
        data={data} 
        onChange={(msg) => handleChange(msg)}
        onAddTodo={(msg) =>  handleAddTodo(msg)}
        onDelTodo={(msg) => handleDelTodo(msg)}
      />
     );
  }
}

// 连接，将state映射成props
const stateToProps = (state) => {
  return {
    inputValue: state.inputValue,
    data: state.data
  }
}

// 改变store
const dispatchToProps = (dispatch) => {
  return {
    initDefaultState() {
      dispatch(getDefaultState3())
    },
    handleChange(msg) {
      dispatch(changeInputAction(msg))
    },
    handleAddTodo(msg) {
      dispatch(addTodoAction(msg))
    },
    handleDelTodo(msg) {
      dispatch(delTodoAction(msg)) 
    }
  }
}
 
// 可以看出来，TodoList是作为connect的子组件，这样的方式其实就是UI和逻辑进行分离
export default connect(stateToProps,dispatchToProps)(TodoList);