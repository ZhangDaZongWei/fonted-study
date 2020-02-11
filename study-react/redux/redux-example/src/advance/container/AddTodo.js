import React from 'react';
import { connect } from 'react-redux';
import { addTodo } from '../store/actions';

let AddTodo = ({dispatch}) => {
  let input

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault()
        if (!input.value.trim()) {
          alert("please input vaild value !")
          input.value = ''
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}
    >
      <input ref={(node) => input = node} />
      <button type="submit">Add Todo</button>
    </form>
  )
}

AddTodo = connect()(AddTodo)

export default AddTodo