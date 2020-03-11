import { ADD, UPSTATUS } from './actionCreator'

export function todoApp(state,action) {
  switch(action.type) {
    case ADD:
      return {
        ...state,
        todos: [
          ...state.todos,
          action.text
        ]
      }
      break
    case UPSTATUS:
      let newTodos = [...state.todos]
      newTodos[action.index].status = "completed"
      return {
        ...state,
        todos: newTodos
      } 
      break
    default: return state
  }
}