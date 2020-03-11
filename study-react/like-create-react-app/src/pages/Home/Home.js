import React, { Component } from 'react';

class Home extends Component {

  constructor() {
    super()
    this.state={
      counter: 0
    }
  }
  handleAdd() {
    this.setState({
      counter: this.state.counter + 1
    })
  }
  render() {
    return (
      <div>
        <h1>Home twice Counter</h1>
        <p>计数器：{this.state.counter}</p>
        <button onClick={this.handleAdd.bind(this)}>Add</button>
      </div>
    )
  }
}

export default Home;