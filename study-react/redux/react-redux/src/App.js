import React, { Component } from 'react';
import {store} from './store/store';
import { 
    // getDefaultState,
    // getDefaultState2,
    getDefaultState3,
    changeInputAction, 
    addTodoAction, 
    delTodoAction
   } from './store/actionCreator';
import AppUI from './AppUI.js'; 

// 逻辑组件
class App extends Component {
  constructor(props) {
    super(props);
    // 初始值
    this.state = store.getState()
    // 订阅，当数据改变时，将更新
    store.subscribe(() => this.storeChange())
  }

  storeChange() {
    this.setState(store.getState())
  }

  handleChange(msg) {
    // 传递给store，其实自动推送到reducer
    store.dispatch(changeInputAction(msg))
  }

  handleAddTodo() {
    store.dispatch(addTodoAction(this.state.inputValue))
  }

  handleDelTodo(msg) {
    store.dispatch(delTodoAction(msg))
  }

  componentDidMount() {
    // getDefaultState2()(store.dispatch)
    store.dispatch(getDefaultState3())
  }

  render() { 

   const { inputValue, data } = this.state
    return ( 
      <AppUI 
        inputValue={inputValue} 
        data={data} 
        onChange={(msg) => this.handleChange(msg)}
        onAddTodo={() => this.handleAddTodo()}
        onDelTodo={(msg) => this.handleDelTodo(msg)}
      />
     );
  }
}
 
export default App;