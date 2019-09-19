import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import { createStore } from 'redux';
import { Provider } from 'react-redux';
// import Provider from './provider';
import Header from './containers/header';
import Content from './containers/content';
import ThemeSwitch from './containers/themeSwitch';
import './index.css';
import * as serviceWorker from './serviceWorker';


// react-redux的结合, 即使context和redux的结合, context可以产生共享状态, redux可以追踪状态

// 这时header组件和content组件里有很多相同的逻辑, 则可以使用高阶组件包裹提取这些逻辑
// 还有每个子组件都依赖于context, 就导致它的复用性很低, 不便于移植
// 复用性低的组件就是, 只依赖于外界的props和内部的state, 其他的都不能影响到它

// 原来的createStore
// const createStore = (reducer) => {
//   let state = null
//   const listeners = []
//   const subScribe = (listener) => listeners.push(listener) 
//   const getState = () => state
//   const dispatch = (action) =>{ 
//     state = reducer(state,action)
//     listeners.forEach(item => item())
//   }
//   // 初始化state
//   dispatch({})
//   return {
//     getState,
//     dispatch,
//     subScribe
//   }
// }

const reducer = (state,action) => {
  if (!state) {
    return {
      themeColor: 'red'
    }
  }
  switch(action.type) {
    case 'CHANGE_COLOR':
      return {
        ...state,
        themeColor: action.themeColor
      }
      break
    default: return state
  }
}

// 使用react-redux库的createStore
const store = createStore(reducer)

class Index extends Component {

  render() {
    return (
      <div>
        <Header />
        <Content />
        <ThemeSwitch />
      </div>
    )
  }

}

ReactDOM.render(
  <Provider store={store}>
    <Index />
  </Provider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
