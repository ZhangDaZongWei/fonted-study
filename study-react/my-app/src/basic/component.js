import React from 'react'
import ReactDOM from 'react-dom'

// 1. 函数组件和class组件
// 2. 组件中的props是一个对象，并且不可更改，组件名首字母必须大写
// 3. 组件可以嵌套和提取

function Welcome(props) {
  return <h1>Welcome! {props.name}</h1>
}

const element = (
  <Welcome name="zhangzongwei"></Welcome>
)

// 4. state是私有的，不要直接更新state，而要使用setState；state更新是异步的; setState会被合并；
// state可以作为props传递给子组件
// 5. 生命周期方法: componentDidMount()在组件渲染到DOM中后一直运行，
// componentWillUnmount()在组件卸载时运行

class Time extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      date: new Date(),
      counter: 0
    }
  }

  updateTime() {
    this.setState({
      date: new Date()
    })
  }

  updateCounter() {
    this.setState((state,props) => ({
      counter: state.counter + props.increment
    }))
  }

  componentDidMount() {
    this.timeID = setInterval(() => {
      this.updateTime()
    }, 1000)
    this.updateCounter()
  }

  componentWillUnmount() {
    clearInterval(this.timeID)
  }

  render() {
    return (
      <div>
        <h1>Hello World!</h1>
        <h2>It is {this.state.date.toLocaleTimeString()}</h2>
        <h1>计数器</h1>
        <h2>{this.state.counter}</h2>
      </div>
    )
  }
}

function App() {
  return (
    <div>
      <Time increment={2}/>
      <Time increment={2}/>
      <Time increment={2}/>
    </div>
  )
}

// 6. 数据流单向向下

ReactDOM.render(
  <App />,
  document.getElementById('root')
)