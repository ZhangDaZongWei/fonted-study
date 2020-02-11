import React, {memo} from 'react';
import PropTypes from 'prop-types';

const Todo = memo(({onClick,text,completed}) => {
  return (
    <li
      style={{textDecoration: completed ? "line-through" : "none"}}
      onClick={onClick}
    >{text}</li>
  )
})

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  text: PropTypes.string.isRequired,
  completed: PropTypes.bool
}

export default Todo