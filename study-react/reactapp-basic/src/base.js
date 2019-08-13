import React, {Component} from 'react'
import PropTypes from 'prop-types'

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


// 列表渲染，JSX中{}包含数组时，React会将其一个个罗列出来渲染到页面上
// 一定要对数组的每个元素加上key，且它必须唯一，这样可以减少DOM操作

// 在整个挂载的生命周期中，constructor用与初始化状态，willMount用于启动状态，didMount用于操作DOM, componentWillUnmount用于数据清理

class LifeCycle extends Component {
  constructor() {
    super()
    this.state={
      date: new Date()
    }
  }

  componentWillMount() {
    this.timer = setInterval(() => {
      this.setState({
        date: new Date()
      })
    },1000)
  }

  render() {
    return (
      <div>
        现在的时间是：{this.state.date.toLocaleTimeString()}
      </div>
    )
  }
}


// 更新时候的生命周期
// 1. shouldComponentUpdate(nextProps, nextState)：你可以通过这个方法控制组件是否重新渲染。如果返回 false 组件就不会重新渲染。这个生命周期在 React.js 性能优化上非常有用。
// 2. componentWillReceiveProps(nextProps)：组件从父组件接收到新的 props 之前调用。
// 3. componentWillUpdate()：组件开始重新渲染之前调用。
// 4. componentDidUpdate()：组件重新渲染并且把更改变更到真实的 DOM 以后调用。

// React中的DOM操作
// 必须在DOM元素插入到页面之后才能进行操作DOM

class Ref extends Component {

  componentDidMount() {
    this.input.focus()
  }

  render() {
    return (
      <input type='text' ref={(input) => this.input = input } />
    )
  }
}


// React中嵌套结构
// 通过props.children来获取嵌套的结构, props.children是一个数组结构，所以可以通过角标来访问它, 非常的灵活

class Children extends Component {

  render() {
    return (
      <div className='wrapper'>
        <title>React js</title>
        <section className='silder'>
          {this.props.children[0]}
        </section>
        <section className='content'>
          {this.props.children[1]}
        </section>
      </div>
    )
  }
}

class Parent extends Component {
  
  render() {
    return (
      <Children>
        <div>I am silder</div>
        <div>I am content</div>
        <div>I am footer</div>
      </Children>
    )
  }
}


// dangerouslySetHTML 和 style 属性
// 因为React中的JSX表达式都进行转义处理, 所以传入HTML时,是被看着字符串看待的, 而dangerouslySetHTML则来处理这种情况

class DangerouslySetHTML extends Component  {
  constructor() {
    super() 
    this.state = {
      content: '<h1>React.js 小书</h1>'
    }
  }

  render() {
    return (
      <div dangerouslySetInnerHTML={{__html: this.state.content}}>
      </div>
    )
  }
}



// 使用propTypes验证传入的props参数

class PropTypesChildren extends Component {
  static defaultProps = {
    content: {
      name: 'zhangdazongwei',
      age: 25
    }
  }

  static propTypes = {
    content: PropTypes.object
  }

  render() {
    const { content } = this.props
    return (
      <div>
        <span>{content.name}: </span>
        <span>{content.age}</span>
      </div>
    )
  }
}

class PropTypesParent extends Component {

  render() {
    return (
      <PropTypesChildren content={{name: '段书晴',age: 23}} />
    )
  }
}

export default PropTypesParent