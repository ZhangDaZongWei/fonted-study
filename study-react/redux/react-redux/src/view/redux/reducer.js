import { ADD_TODO, TOGGLE_STATUS ,VISIBILITY_FILTERS } from './actionType';
import {deepCopy} from '../utils/deepCopy';

const defaultState = {
  todoList: [],
  status: ''
}

export const reducer = (state = defaultState, action) => {
  switch (action.type) {
    case ADD_TODO:
      return {
        status: 'all',
        todoList: [...deepCopy(state.todoList),{
          name: action.value,
          status: 'incomplete'
        }]
      }
    case TOGGLE_STATUS:
      // 这要考虑两点，一是改变状态；二是哪个todo状态被改变，这个肯定通过index
      let newState = deepCopy(state)
      const { index, status } = action.value
      if (status === 'completed') {
        newState.todoList[index].status = 'incomplete'
      } else {
        newState.todoList[index].status = 'completed'
      }
      return {
        ...state,
        todoList: newState.todoList
      }
    case VISIBILITY_FILTERS:
      return {
        ...state,
        status: action.value
      }
    default:
      return state
  }
}