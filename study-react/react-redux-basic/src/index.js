import React,{ Component } from 'react';
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types';
import Header from './header';
import Content from './content';
import ThemeSwitch from './themeSwitch';
import './index.css';
import * as serviceWorker from './serviceWorker';


// react-redux的结合, 即使context和redux的结合, context可以产生共享状态, redux可以追踪状态

const createStore = (reducer) => {
  let state = null
  const listeners = []
  const subScribe = (listener) => listeners.push(listener) 
  const getState = () => state
  const dispatch = (action) =>{ 
    state = reducer(state,action)
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

const store = createStore(reducer)

class Index extends Component {

  // 声明context
  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {
      store
    }
  }

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

ReactDOM.render(<Index />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
