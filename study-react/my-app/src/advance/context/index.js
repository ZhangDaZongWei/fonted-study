import React, { Component } from 'react';
import ButtonExtra from './buttonExtra';

/**
 * context: 组件树共用数据
 */

 // 创建一个context
 // 这个context这个页面的组件都可以使用
const themeContext = React.createContext('light')

export class ContextComponent extends Component {

  render() {
    return (
      // context对象会返回一个Provider，使用它可以设置context值以覆盖默认值
      // 可以嵌套
      <themeContext.Provider value='dark'>
        {/* <Button /> */}
        {/* <ButtonFun /> */}
        <ButtonExtra />
      </themeContext.Provider>
    )
  }
}

class Button extends Component {

  // 获取context的第一种方式
  // 取值是最近的Provider，若没有Provider就使用默认值
  // static contextType = themeContext

  render() { 
    console.log('context index: ', this.context)

    return ( 
      <button>按钮</button>
     );
  }
}

// 获取context的第二种方式
// class.contextType，很明显contextType是挂载在类上的
Button.contextType = themeContext

// 上面是类组件获取context的方式，那么对于函数式组件呢？

function ButtonFun(props) {
  return (
    // 声明一个消费者，context.consumer组件中必须是一个函数
    <themeContext.Consumer>
      {value => <button>{value}</button>}
    </themeContext.Consumer>
  )
}

// 这里只是导出了context.consumer, 还可以导出直接context
export  const ThemeCustomer = themeContext.Consumer;

// -----------------------------------------------------------

// 上面只是使用context，对于包含了Provider的组件来说，修改context的值很容易
// 但是对于在嵌套组件中修改呢？不可能在一层一层地传递吧，这时需要借助函数

const themeContext1 = React.createContext({
  // 默认值
  theme: 'skyblue',
  // 设置一个处理函数
  handleTheme: () => {}
})

export class ContextComponent1 extends Component {

  static contextType = themeContext1

  constructor(props) {
    super(props)
    this.state = { 
      theme: 'skyblue',
      handleTheme: this.handleTheme
    }
  }

  handleTheme = () => {
    this.setState((state) => {
      return {
        theme: state.theme === 'skyblue' ? 'tomato' : 'skyblue'
      }
    })
  }

  render() {
    return (
      <themeContext1.Provider value={this.state}>
        <ButtonWrapper />
      </themeContext1.Provider>
    )
  }
}

class ButtonWrapper extends Component {
  render() {
    return (
      <Button1 />
    )
  }
}

function Button1() {

  return (
    <themeContext1.Consumer>
      {({theme,handleTheme}) => (
        <button 
          style={{
            backgroundColor: theme
          }}
          onClick={handleTheme}
        >按钮</button>
      )}
    </themeContext1.Consumer>
  )
}

// -----------------------------------------------------
// 消费多个context：使用context嵌套即可

