// store的作用：
// 维持应用的 state；
// 提供 getState() 方法获取 state；
// 提供 dispatch(action) 方法更新 state；
// 通过 subscribe(listener) 注册监听器;
// 通过 subscribe(listener) 返回的函数注销监听器。

import { createStore } from 'redux'
import  todoApp  from './reducer'
import { visibilityFilters, addTodo, toggleTodo, setVisibilityTodo } from './action'

// 创建一个store，第二个是option的，作为state的初始值

let store = createStore(todoApp)

// 获取state

let state = store.getState()

// 注册一个监听器，只要state变化就打印出state

const unsubscribe = store.subscribe(() => console.log('state: ',store.getState()))
 
// 发起一系列action，改变state

store.dispatch(addTodo('learn about action'))

store.dispatch(toggleTodo(0))

store.dispatch(setVisibilityTodo(visibilityFilters.SHOW_COMPLETED))

// 注销监听器

unsubscribe()

// redux的整体数据流为：调用dispatch ---> store将当前state和action传入reducer ---> 根reducer将单个reducer合并成一个state树 ---> store保存从根reducer返回的state