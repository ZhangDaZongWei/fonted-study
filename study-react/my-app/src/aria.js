import React from 'react'
import ReactDOM from 'react-dom'

class CustomTextInput extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    return (
      <div>
        <input type='text' ref={this.props.textInput} />
      </div>
    )
  }
}

class Parent extends React.Component {
  constructor(props) {
    super()
    this.textInput = React.createRef()
  }

  handleClick() {
    this.textInput.current.focus()
  }

  render() {
    return (
      <div>
        <CustomTextInput textInput={this.textInput} />
        <button onClick={this.handleClick.bind(this)}>点击聚焦</button>
      </div>
    )
  }
}

ReactDOM.render(
  <Parent />,
  document.getElementById('root')
)