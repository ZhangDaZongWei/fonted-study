import React, { Component } from 'react';

/**
 * setState(updater[,callback])到底是异步还是同步的？
 * 1. 在合成事件和生命周期中，setState是“异步”的。这里的异步并不是指异步代码，
 *    而是指合成事件和生命周期函数是在更新之前，所以拿不到立即更新的值，但是可以
 *    第二个参数的回调拿到
 * 2. setState的批量更新，即对同一个值连续调用setState时，后面的会覆盖前面的值，
 *    这样只会取最后一个设置的值
 * 3. 在原生事件和setTimeOut中，setState是同步的，批量更新也不会后面覆盖前面
 * 4. 当setState传入updater去更新state时，都是最新的！但是传入的callback是在更新
 *    后才执行
 */

class SetState extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      val: 0
     }
    this.btn = React.createRef()
  }

  handleClick() {
    this.setState({
      val: this.state.val + 1
    })
    this.setState({
      val: this.state.val + 2
    })
    this.setState({
      val: this.state.val + 3
    })
    this.setState((state,props) => {
      return {val: state.val + 3}
    },() => {
      console.log('callback val: ', this.state.val)
    })
    console.log('event val: ', this.state.val)
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({
        val: this.state.val + 1
      })
      this.setState({
        val: this.state.val + 1
      })
      console.log('life val: ', this.state.val)
    },0)
    this.btn.current.addEventListener('click',() => {
      this.setState({
        val: this.state.val + 2
      })
      console.log('originEvent val: ', this.state.val)
    })
  }

  render() { 
    return ( 
      <div>
        <div>{this.state.val}</div>
        <button onClick={() => this.handleClick()}>increment</button>
        <button ref={this.btn}>originIncrement</button>
      </div>
     );
  }
}
 
export default SetState;