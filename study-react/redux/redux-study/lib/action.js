"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.addTodo = addTodo;
exports.toggleTodo = toggleTodo;
exports.setVisibilityTodo = setVisibilityTodo;
exports.visibilityFilters = exports.SET_VISIBILITY_FILTER = exports.TOGGLE_TODO = exports.ADD_TODO = void 0;
// 通常情况下，会将action的type定义为一个常量。
// 一般情况下，action对象中包含type（必填），payload，error，meta。当error为true时，payloa必然为new Error(),meta表示一些额外的信息。
const ADD_TODO = 'ADD_TODO';
exports.ADD_TODO = ADD_TODO;
const TOGGLE_TODO = 'TOGGLE_TODO';
exports.TOGGLE_TODO = TOGGLE_TODO;
const SET_VISIBILITY_FILTER = 'SET_VISIBLE_FILTER';
exports.SET_VISIBILITY_FILTER = SET_VISIBILITY_FILTER;
const visibilityFilters = {
  SHOW_ALL: 'SHOW_ALL',
  SHOW_COMPLETED: 'SHOW_COMPLETED',
  SHOW_ACTIVE: 'SHOW_ACTIVE' // const action1 = {
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

};
exports.visibilityFilters = visibilityFilters;

function addTodo(text) {
  return {
    type: ADD_TODO,
    text
  };
}

function toggleTodo(index) {
  return {
    type: TOGGLE_TODO,
    index
  };
}

function setVisibilityTodo(filter) {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  };
} // 一般创建action时，会触发dispatch，方式为将action传给dispatch即可，也可以封装函数自动触发
// dispatch(createAction('eat'))
// const addTodo = function(text) {
//   return dispatch(createAction1(text))
// }
// const toggleTodo = (index) => dispatch(createAction2(index))
// addTodo('eat')
// toggleTodo(2)