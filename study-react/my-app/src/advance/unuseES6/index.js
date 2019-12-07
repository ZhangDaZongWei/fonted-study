import React from 'react';

// 不使用ES6，就要使用 create-react-class 模块
var createReactClass = require('create-react-class');

var UnES6Class = createReactClass({

  // 定义默认defaultProps属性
  getDefaultProps: function() {
    return {
      name: '张宗伟'
    }
  },

  render: function() {
    return <div>{this.props.name}</div>
  }
})

var UnES6App = createReactClass({

  // 初始化state
  getInitialState: function() {
    return {
      name: '段书晴'
    }
  },

  // 组件中的方法会自动绑定到this实例
  handleClick: function() {
    this.setState({
      name: '张宗伟'
    })
  },

  render: function() {
    return <div>
      <UnES6Class name={this.state.name} />
      <button onClick={this.handleClick}>change name</button>
    </div>
  }
})
 
export default UnES6App;