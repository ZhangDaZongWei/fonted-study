import React, { Component } from 'react';

class Button extends Component {

  constructor(props) {
    super(props)
    this.state = {
      status: ''
    }
  }

  handleClick(status) {
    this.setState({
      status
    })
    const { onGetStatus } = this.props
    onGetStatus(status)
  }

  render() {
    const style = {
      margin: '0 5px'
    }
    return (
      <div className="button">
        <button 
          style={{
            margin: '0 5px',
            fontWeight: this.state.status === "all" ? "bold" : "500"
          }} 
          onClick={this.handleClick.bind(this, "all")}
        >All</button>
        <button 
          style={{
            margin: '0 5px',
            fontWeight: this.state.status === "active" ? "bold" : "500"
          }}  
          onClick={this.handleClick.bind(this, "active")}
        >Active</button>
        <button 
          style={{
            margin: '0 5px',
            fontWeight: this.state.status === "completed" ? "bold" : "500"
          }}  
          onClick={this.handleClick.bind(this, "completed")}
        >Completed</button>
      </div>
    )
  }
}

export default Button