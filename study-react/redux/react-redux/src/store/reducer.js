import { GET_DEFAULTSTATE, CHANGE_INPUT,  ADD_TODO, DEL_TODO } from './actionType';

const defaultState = {
  inputValue: 'add todo',
  data: [
    '晚八点回家',
    '晚九点回家',
    '晚十点休息'
  ]
}

// 业务逻辑在里面
// reducer是纯函数，就是说返回值只有传入的参数决定
export default (state=defaultState, action) => {

  // console.log('action: ',action)
  // reducer里只能接受state，不能改变state
  switch(action.type) {
    case GET_DEFAULTSTATE:
      return {
        ...state,
        data: action.value
      }
    case CHANGE_INPUT:
      return {
        data: [...state.data],
        inputValue: action.value
      }
    case ADD_TODO:
      return {
        ...state,
        data: [action.value,...state.data]
      }
    case DEL_TODO:
      let data = [...state.data]
      data.splice(action.value,1)
      return {
        ...state,
        data
      }
    default:
      return state
  }
} 