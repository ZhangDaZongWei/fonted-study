/**
 * action其实就是记录state如何变化以及传递数据给state
 */

export const ADD_TODO = 'ADD_TODO'

export const TOGGLE_TODO = 'TOGGLE_TODO'

export const SET_VISIBILITY_FILTER = 'SET_VISIBLE_FILTER'

export const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE'
}

// const action1 = {
//   type: ADD_TODO,
//   text: 'eat'
// }

// const action2 = {
//   type: TOGGLE_TODO,
//   index: 2
// }

// const action3 = {
//   type: SET_VISIBLE_FILTER,
//   visible: 'show_all'
// }

// action 创建函数，只是一个纯函数,返回一个action

export function addTodo(text) {
  return (
    {
      type: ADD_TODO,
      text
    }
  )
}

export function toggleTodo(index) {
  return (
    {
      type: TOGGLE_TODO,
      index
    }
  )
}

export function setVisibilityTodo(filter) {
  return (
    {
      type: SET_VISIBILITY_FILTER,
      filter
    }
  )
}



