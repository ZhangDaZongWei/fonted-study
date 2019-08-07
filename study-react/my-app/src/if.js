import React from 'react'
import ReactDOM from 'react-dom'

// 1. React条件渲染和js的 if 和 条件运算符 一样
// 2. 若不渲染或隐藏React元素时，return null 即可

function Welcome() {
  return (
    <h1>Welcome back!</h1>
  )
}

function Sign() {
  return (
    <h1>Please sign up!</h1>
  )
}

class Greet extends React.Component {

  render() {
    if (this.props.isLogin) {
      return (
        <div>
          <Welcome />
        </div>
      )
    } else {
      return (
        <div>
          <Sign />
        </div>
      )
    }
  }
}

class ChangeGreet extends React.Component {
  constructor() {
    super()
    this.state = {
      isLogin: true
    }
  }

  handleClick = () => {
    this.setState({
      isLogin: !this.state.isLogin
    })
  }

  render() {
    return (
      <div>
        <Greet isLogin={this.state.isLogin} />
        <button onClick={this.handleClick}>click change</button>
      </div>
    )
  }
}

ReactDOM.render(
  <ChangeGreet />,
  document.getElementById('root')
)