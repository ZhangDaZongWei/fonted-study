import React from 'react'
import ReactDOM from 'react-dom'

function Event(props) {
  return <div>study {props.name}</div>
}

// 1. React事件与原生事件一样
// 2. React不可以返回false去阻止事件

function ActionLink() {
  // e属于合成事件
  function handleClick(e) {
    console.log('handleClick!')
    e.preventDefault()
  }

  return (
    <a href='https://www.baidu.com' onClick={handleClick}>To baidu</a>
  )
}

class Toggle extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      status: true
    }
    // 为了在其他方法中使用this，必须绑定
    // this.handleClick = this.handleClick.bind(this)
  }

  handleClick() {
    console.log('handleClick running')
    this.setState({
      status: !this.state.status
    })
    console.log(this.state.status)
  }

  render() {
    return (
      <button onClick={(e) => this.handleClick(e)} type='button'>{this.state.status ? 'on' : 'off'}</button>
    )
  }
}

ReactDOM.render(
  <Toggle />,
  document.getElementById('root')
)