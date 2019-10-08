import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { store } from './store/store';
import 'antd/dist/antd.css'
// import App from './App';
// import TodoList from './pages/TodoList';
import { TodoApp } from './view/TodoApp';

import './index.css';

// ReactDOM.render(
  // Provider里面的组件都共享store里的值
  // <Provider store={store}>
  //   <TodoList />
  // </Provider>
  // , document.getElementById('root'));


  ReactDOM.render(
    <TodoApp />,
    document.getElementById('root')
  )