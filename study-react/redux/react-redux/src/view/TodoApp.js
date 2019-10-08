// App的入口文件
import React from 'react';
import AddTodo from './AddTodo';
import TodoList from './TodoList';
import VisibilityFilters from './VisibilityFilters';
import './style.css';

export const TodoApp = () => {
  return (
    <div className='todoApp'>
      <AddTodo />
      <TodoList />
      <VisibilityFilters />
    </div>
  )
}