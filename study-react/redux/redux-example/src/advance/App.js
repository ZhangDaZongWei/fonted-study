import React from 'react';
import AddTodo from './container/AddTodo';
import VisibleTodoList from './container/VisibleTodoList';
import Footer from './components/Footer';

function App({match}) {
  const {filter} = match.params
  return (
    <div>
      <AddTodo />
      <VisibleTodoList visibilityFilter={!filter ? "SHOW_ALL" : filter} />
      <Footer />
    </div>
  )
}

export default App