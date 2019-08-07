import React, {Component} from 'react';

// render()返回一个JSX元素，
// JSX中可以出入任何js表达式，包括标签内部和属性
// 因class是关键字，所以用className代替；for也是关键字用htmlFor代替
// JSX就是JS对象，所以可赋值给变量，或者作为函数的返回值

class Render extends Component {

}

// 当监听事件的时候，前面加上on前缀，并采用驼峰写法就行了，但是只能用在普通标签上
// 事件都有event对象，但React的event对象经过封装
// 当调用事件方法的时候，并不是通过对象的方法调用，而是通过函数调用，所以打印this为undefined。需要通过bind绑定

class Event extends Component {

  clickButton(e) {
    console.log('event: ',e)
    console.log('this: ',this)
  }

  render() {
    return (
      <div>
        <button type='button' onClick={this.clickButton}>按钮</button>
      </div>
    )
  }
}


// state和setState，state是一个对象，表示数据的状态，在constructor里进行初始化
// 调用setState函数时，是改变state，并重新调用render方法，它接受一个对象和函数作为参数
// setState传入一个对象时，并不会马上修改state，它先存在一个更新队列中，稍后才会将新的状态提取出来合并到state中
// 而传入函数时，setState将上一个state传入进来，这时你就可以依据上一次的state进行一些操作，然后再返回新的state去更新
// React会将js事件循环中的消息队列中同一消息中的setState进行合并，然后再render页面，所以并不会有性能问题。
class State extends Component {

  static defaultProps={
    text: '按钮'
  }
  constructor() {
    super()
    this.state={
      count: 0
    }
  }

  clickButton() {
    this.setState({
      count: 1
    })
    console.log('state: ', this.state.count)
    this.setState((preState) => {
      return {
        count: ++preState.count
      }
    })
  }

  render() {
    return (
      <div>
        <button type='button' onClick={this.clickButton.bind(this)}>{this.props.text}</button>
      </div>
    )
  }
}

// props配置项，父组件传入子组件，让可定制性更高，可以是js任何类型的值，它是一个对象
// 在子组件中可以设置默认props，即静态变量defaultProps用来初始化
// props是不可变的，唯一改变的方式就是当父组件传入的props改变时，才会改变

// state和props的区别，state是保存组件内部的状态，props是外部控制内部组件的状态
// props可以控制state
// 有state的组件叫有状态组件，但是应尽量少写有状态组件
// 有一种函数式组件，只能接受外部参数，就是React提倡写无状态组件的证明

class Props extends Component {

  render() {
    return (
      <State text='段书晴' />
    )
  }
}

export default Props

// 列表渲染，JSX中{}包含数组时，React会将其一个个罗列出来渲染到页面上
// 一定要对数组的每个元素加上key，且它必须唯一，这样可以减少DOM操作