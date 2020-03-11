import React from 'react'
import ReactDOM from 'react-dom'

// 实现监听表单输入的demo
// 1. React中input和textarea一样，都是通过value来填充文本

class ListenForm extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ''
    }
    // this.handleChange = this.handleChange.bind(this)
    // this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert('submit value: ' + this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>{this.state.value}</label>
        <input type='text' value={this.state.value} placeholder='please input' onChange={this.handleChange} />
        <input type='submit' value='提交' />
      </form>
    )
  }
}

// 实现一个选择水果的demo

class ListenSelect extends React.Component {
  constructor() {
    super()
    this.state = {
      value: ['orange','pear']
    }
  }

  handleChange = (e) => {
    this.setState({
      value: e.target.value
    })
  }

  handleSubmit = (e) => {
    e.preventDefault()
    alert('choose fruite: ' + this.state.value)
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <select multiple={true} value={this.state.value} onChange={this.handleChange}>
          <option value='orange'>橘子</option>
          <option value='apple'>🍎</option>
          <option value='pear'>梨子</option>
        </select>
        <input type='submit' value='提交' />
      </form>
    )
  }
}

class Reservation extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      isGoing: true,
      numberOfGuests: 2
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    const target = event.target;
    const value = target.type === 'checkbox' ? target.checked : target.value;
    const name = target.name;

    this.setState({
      [name]: value
    });

    console.log(name,this.state[name])
  }

  render() {
    return (
      <form>
        <label>
          参与:
          <input
            name="isGoing"
            type="checkbox"
            checked={this.state.isGoing}
            onChange={this.handleInputChange} />
        </label>
        <br />
        <label>
          来宾人数:
          <input
            name="numberOfGuests"
            type="number"
            value={this.state.numberOfGuests}
            onChange={this.handleInputChange} />
        </label>
      </form>
    );
  }
}
ReactDOM.render(
  <Reservation />,
  document.getElementById('root')
)