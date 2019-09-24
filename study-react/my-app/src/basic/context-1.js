import React from 'react'
import ReactDOM from 'react-dom'
import './combine.css'

// 1. 因打包工具会将所有的代码形成一个文件，这时会降低首次加载的速度，所以要实现需要时再加载即动态加载，这时要用到import()函数，它返回一个promise对象，也就是异步操作。
// 2. 还有一种动态加载的方案是 React.lazy，它接受一个执行import()函数的函数参数。它必须返回一个 Promise，该 Promise 需要 resolve 一个 defalut export 的 React 组件。
// 3. 使用Suspense组件来指示加载。
// 4. 使用MyErrorBoundary组件来捕获错误。
// 5. 基于路由的代码分割 React Router。
// 6. 利用中间文件解决 React.lazy 只能引用 export defalut 组件问题。

// -------------------------------------------------------------------

// 1. 使用context在整个组件树中传递数据

const ThemeContext = React.createContext('light')

class App extends React.Component {
  render() {
    return (
      <ThemeContext.Provider value='dark'>
        <Toolbar />
      </ThemeContext.Provider>
    )
  }
}

class Toolbar extends React.Component {
  render() {
    return (
      <div>
        <ThemeButton />
      </div>
    )
  }
}

class ThemeButton extends React.Component {
  // 以下代码含义是将ThemeButton类中的contextType属性会被重新赋值为一个由React.createContext()创建的Context对象，这使得你才可以使用 this.context
  static contextType = ThemeContext
  render() {
    return (
      <Button theme={this.context} />
    )
  }
}

class Button extends React.Component {
  render() {
    return (
      <button type='button' className={this.props.theme}>按钮</button>
    )
  }
}

class InputComponent extends React.Component {
  render() {
    return (
      <ThemeContext.Consumer>
        { value => <input type='text' placeholder={value} />}
      </ThemeContext.Consumer>
    )
  }
}


ReactDOM.render(
  <InputComponent />,
  document.getElementById('root')
)