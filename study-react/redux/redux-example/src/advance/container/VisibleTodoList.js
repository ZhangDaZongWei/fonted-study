import { connect } from 'react-redux';
import { toggleTodo } from '../store/actions';
import TodoList from '../components/TodoList';

const getVisibleTodoList = (todos,filter) => {
  switch(filter) {
    case "SHOW_ACTIVE":
      return todos.filter(item => !item.completed)
      break
    case "SHOW_COMPLETED":
      return todos.filter(item => item.completed)
    case "SHOW_ALL":
    default: return todos
  }
}

const mapStateToProps = (state,ownProps) => {
  return {
    todos: getVisibleTodoList(state.todos, ownProps.visibilityFilter)
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onTodoClick: (index) => {
      dispatch(toggleTodo(index))
    }
  }
}

const VisibleTodoList = connect(mapStateToProps,mapDispatchToProps)(TodoList)

export default VisibleTodoList