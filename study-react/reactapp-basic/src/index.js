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

const appState = {
  title: {
    text: 'React 小书',
    color: 'tomato'
  },
  content: {
    text: '介绍React的一本好书',
    color: 'pink'
  }
}
 
function dispatch(state,action) {
  switch(action.type) {
    case 'TEXT':
      state.text = action.text
      break
    case 'COLOR':
      state.color = action.color
      break
    default: 
  }
}

function renderApp(appState) {
  renderTitle(appState.title)
  renderContent(appState.content)
}

function renderTitle(title) {
  let titleDom = document.getElementById('title')
  titleDom.innerHTML = title.text
  titleDom.style.color = title.color
}

function renderContent(content) {
  let contentDom = document.getElementById('content')
  contentDom.innerHTML = content.text
  contentDom.style.color = content.color
}


dispatch(appState.title,{type: 'TEXT',text: 'hahaha'})
dispatch(appState.content,{type: 'COLOR',color: 'red'})
renderApp(appState)
