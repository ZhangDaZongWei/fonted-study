"use strict";

var _redux = require("redux");

var _reducer = _interopRequireDefault(require("./reducer"));

var _action = require("./action");

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// store的作用：
// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 方法更新 state；
// 通过 subscribe(listener) 注册监听器;
// 通过 subscribe(listener) 返回的函数注销监听器。
// 创建一个store，第二个是option的，作为state的初始值
let store = (0, _redux.createStore)(_reducer.default); // 获取state

let state = store.getState(); // 注册一个监听器，只要state变化就打印出state

const unsubscribe = store.subscribe(() => console.log('state: ', store.getState())); // 发起一系列action，改变state

store.dispatch((0, _action.addTodo)('learn about action'));
store.dispatch((0, _action.toggleTodo)(0));
store.dispatch((0, _action.setVisibilityTodo)(_action.visibilityFilters.SHOW_COMPLETED));