// import React from 'react';
// import ReactDOM from 'react-dom';
// import App from './App';
// import Props from './base';
// import LifeCycle from './base'
// import Ref from './base'
// import Parent from './base'
// import DangerouslySetHTML from './base'
// import PropTypesParent from './base'
// import ContextParent from './advance';
// import CommentApp from './comment/commentApp'
// import * as serviceWorker from './serviceWorker';

// ReactDOM的作用就是将JSX生成的JS对象构造成DOM树,然后插入到页面特定的位置
// 那为什么不将JSX直接渲染成DOM结构呢? 原因有二:
// 1. 因为不一定会将一个表示 UI 的结构和信息的对象插入到浏览器的普通页面上,也有可能会在canvas,App上
// 2. 将JSX编译成JS对象后，方便了数据变化，组件更新的操作，可以用算法较快地比较两个JS对象，比操作DOM要快


// ReactDOM.render(<ContextParent />, document.getElementById('root'));

// 上面这段代码会干些什么事情呢？
// 1. 首先编译成
// ReactDOM.render(
//   React.createElement(CommentApp, null), 
//   document.getElementById('root')
// ) 

// 2. 其实是React.createElement先实例化一个CommentApp，然后调用render方法渲染；ReactDOM 用渲染后的 JavaScript 对象来构建真正的 DOM 元素，再插入到页面中。
// 3. React.js 将组件渲染，并且构造 DOM 元素然后塞入页面的过程称为组件的挂载。React对待每个组件都有这样的一个过程。

// constructor --> will mount --> render --> did mount


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
// serviceWorker.unregister();


// redux实现
// redux是解决“模块（组件）之间需要共享数据”和“数据可能被任意修改导致不可预料的结果”之间的矛盾
// 如果都可以无限制的,不可测地修改appState, 那么整个维护和调试都很难了, 所以要对修改appState的动作进行限制,并且能检测到.
// 故引进一个dispatch函数, 所有修改必须经过它

// 抽离出appState和dispatch, 全都放到store中, 最后定义一个函数createStore来生成store, 使得它可以复用

// 使用观察者模式实现数据更新后自动刷新页面
// 此刷新页面非常消耗性能, 有的数据根本就没有改变, 更新就不合适了, 则可以实现新旧数据的比较, 进而判断需不需要更新
// 此判断新旧都是新复制出一个state，相当于浅复制

// 还可以将state和stateChange合并到一起, 即如果state不为空则依据action进行操作, 如果为空则返回初始值; 最后把stateChange函数叫做reducer
// 它是一个纯函数, 它需要做的就是初始化state和改变state

const stateChange = (state,action) => {
  if (!state) {
    return {
      title: {
        text: 'React 小书',
        color: 'tomato'
      },
      content: {
        text: '介绍React的一本好书',
        color: 'pink'
      }
    }
  }
  switch(action.type) {
    case 'TEXT':
      return {
        ...state,
        title: {
          ...state.title,
          text: action.text
        }
      }
      break
    case 'COLOR':
      return {
        ...state,
        title: {
          ...state.title,
          color: action.color
        }
      }
      break
    default: return state
  }
}

const createStore = (stateChange) => {
  let state = null
  const listeners = []
  const subScribe = (listener) => listeners.push(listener) 
  const getState = () => state
  const dispatch = (action) =>{ 
    state = stateChange(state,action)
    listeners.forEach(item => item())
  }
  // 初始化state
  dispatch({})
  return {
    getState,
    dispatch,
    subScribe
  }
}
 

function renderApp(newState,oldState={}) {
  if (newState === oldState) return
  console.log('app...')
  renderTitle(newState.title,oldState.title)
  renderContent(newState.content,oldState.content)
}

function renderTitle(newTitle,oldTitle={}) {
  if (newTitle === oldTitle) return
  console.log('title...')
  let titleDom = document.getElementById('title')
  titleDom.innerHTML = newTitle.text
  titleDom.style.color = newTitle.color
}

function renderContent(newContent,oldContent={}) {
  if (newContent === oldContent) return
  console.log('content...')
  let contentDom = document.getElementById('content')
  contentDom.innerHTML = newContent.text
  contentDom.style.color = newContent.color
}


let store = createStore(stateChange)
// 初始化,oldState
let oldState = store.getState()
store.subScribe(() => {
  let newState = store.getState()
  renderApp(newState,oldState)
  oldState = newState
})

renderApp(store.getState())
store.dispatch({type: 'TEXT',text: 'hehehe'}) 
store.dispatch({type: 'COLOR',color: 'red'})

