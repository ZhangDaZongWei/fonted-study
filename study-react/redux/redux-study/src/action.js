// 通常情况下，会将action的type定义为一个常量。
// 一般情况下，action对象中包含type（必填），payload，error，meta。当error为true时，payloa必然为new Error(),meta表示一些额外的信息。

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

// 一般创建action时，会触发dispatch，方式为将action传给dispatch即可，也可以封装函数自动触发

// dispatch(createAction('eat'))

// const addTodo = function(text) {
//   return dispatch(createAction1(text))
// }

// const toggleTodo = (index) => dispatch(createAction2(index))

// addTodo('eat')
// toggleTodo(2)



