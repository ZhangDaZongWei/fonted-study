import { combineReducers } from 'redux';

const todos = (todos=[],action) => {
  switch(action.type) {
    case "ADD_TODO":
      return [...todos,{
        id: action.id,
        text: action.text,
        completed: false
      }]
      break
    case "TOGGLE_TODO":
      return todos.map(item => (
        item.id === action.id ? {...item, completed: !item.completed} : item
      ))
      break
    default: return todos
  }
}

const visibilityFilter = (visibilityFilter="SHOW_ALL",action) => {
  switch(action.type) {
    case "SET_VISIBILITY_FILTER":
      return action.filter
      break
    default: return visibilityFilter
  }
}

export default combineReducers({
  todos,
  visibilityFilter
})