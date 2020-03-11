import React, {Component} from 'react';
import { store } from '../store/index';
import { addAction } from '../store/actionCreator';

class Input extends Component {

  constructor(props) {
    super(props)
    this.state = {
      inputValue: ''
    }
    this.handleInput = this.handleInput.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  handleInput(e) {
    this.setState({
      inputValue: e.target.value
    })
  }

  handleClick() {
    const {inputValue} = this.state
    if (!inputValue.trim()) {
      alert('please input valid value !')
    } else {
      store.dispatch(addAction({name: inputValue,status:'active'}))
    }
    this.setState({
      inputValue: ''
    })
  }

  componentDidMount() {
    const that = this
    window.addEventListener('keydown', (e) => {
      if (e.keyCode === 13) {
        that.handleClick()
      }
    })
  }

  render() {
    return (
      <div className="input">
        <input value={this.state.inputValue} onChange={this.handleInput} />
        <button onClick={this.handleClick}>Add Todo</button>
      </div>
    )
  }
}

export default Input