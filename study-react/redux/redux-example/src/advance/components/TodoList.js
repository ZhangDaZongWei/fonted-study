import React, {memo} from 'react';
import PropTypes from 'prop-types';
import Todo from './Todo';

const TodoList = memo(({todos,onTodoClick}) => {
  return (
    <ul>
      {
        todos.map((todo,index) => (
          <Todo 
            {...todo}
            onClick={() => onTodoClick(index)}
            key={todo.id}
          ></Todo>
        ))
      }
    </ul>
  )
})

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      text: PropTypes.string.isRequired,
      completed: PropTypes.bool.isRequire
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

export default TodoList