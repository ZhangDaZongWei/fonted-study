// reducer是描述state在触发action后是如何变化的，
// 即(previousState, action) => newState，是纯函数。不要在reducer中做如下操作：
// 修改传入参数；
// 执行有副作用的操作，如 API 请求和路由跳转；
// 调用非纯函数，如 Date.now() 或 Math.random()。


import { combineReducers } from 'redux';
import {visibilityFilters, ADD_TODO, TOGGLE_TODO, SET_VISIBILITY_FILTER} from './action'

// 设置初始state

// const initState = {
//   todo: [],
//   VisibilityFilter: VisibilityFilters.SHOW_ALL
// }

// 不要改变原来的state，保证它是纯函数！
// 在不知道什么情况下，一定要返回旧的state
// 拆分reducer

const { SHOW_ALL } = visibilityFilters

function todos(state=[],action) {
  switch(action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          text: action.text,
          completed: false
        }
      ]
      break
    case TOGGLE_TODO:
      return state.map((item,index) => {
        if (index === action.index) {
         return (
           {
             ...item,
             completed: !item.completed
           }
         )
        }
        return item
      })
      break
    default:
      return state
  }
}

function visibilityFilter(state=SHOW_ALL,action) {
  if (action.type === SET_VISIBILITY_FILTER) {
    return action.filter
  }
  return state
}

// 合成一个整体reducer
// function todoApp(state={},action) {
//   return {
//     todos: todos(state.todos,action),
//     visibilityFilter: visibilityFilter(state.visibilityFilter,action)
//   }
// }

// 上述函数也可以使用combineReducers()生成

const todoApp = combineReducers({
  todos,
  visibilityFilter
})

export default todoApp