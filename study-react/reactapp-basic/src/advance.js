import React, { Component } from 'react'
import PropTypes from 'prop-types'
// 高阶组件 就是一个函数，传给它一个组件，它返回一个新的组件
// 它的作用就是为了代码的复用, 将一些共同的逻辑抽离出来, 并通过props传递数据

// context 类似状态提升, 就是在顶级组件声明, 然后可以在任意子组件中引用, 但是尽量少使用

class ContextParent extends Component {


  constructor() {
    super()
    this.state={
      color: 'tomato'
    }
  }
  
  render() {
    return (
      <ContextChildren />
    )
  }
}

class ContextChildren extends Component {

  render() {
    return (
      <ContextGrandson />  
    )
  }
}

class ContextGrandson extends Component {


  render() {
    return (
      <div style={{color: this.context.color}}>
        <h1>React.js 小书</h1>
      </div>
    )
  }
}

export default ContextParent