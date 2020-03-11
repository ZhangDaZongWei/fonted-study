import React, { Component } from 'react';

// 错误边界，是一种React组件，用来优雅地处理错误
// 可以捕获并打印发生在其子组件树任何位置的 JavaScript 错误，并且，它会渲染出备用 UI
// 错误边界在渲染期间、生命周期方法和整个组件树的构造函数中捕获错误
// 无法捕获的错误： 事件处理，异步代码，服务端渲染，自身错误
// 对于事件处理器的错误，使用try...catch即可
// 注意这只在打包之后的生产环境中有效！

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { backUp: false }
  }

  // 首先定义两个生命周期函数
  // 用来渲染出备用UI
  static getDerivedStateFromError(error) {
    // 改变state.backup
    // 注意这里的改变方式不一样
    return { backUp: true }
  }

  // 用来打印错误
  componentDidCatch(err,info) {
    console.log('出现了错误：',err,info)
  }

  render() { 
    if (this.state.backUp) {
      return <div>你的页面出现了问题！</div>
    }
    return this.props.children;
  }
}


class ErrorContent extends Component {

  constructor(props) {
    super(props)
    this.state={
      count: 0
    }
  }

  handleClick() {
    this.setState((state) => (
      {
        count: state.count+1
      }
    ))
  }

  render() {
    if (this.state.count === 5) {
      throw new Error('this page is crash!')
    }
    return (
      <>
        <p onClick={() => this.handleClick()}>{this.state.count}</p>
      </>
    )
  }
}

class ErrorApp extends Component {
  render() { 
    return ( 
      <ErrorBoundary>
        <ErrorContent />
      </ErrorBoundary>
     );
  }
}
 
export default ErrorApp;