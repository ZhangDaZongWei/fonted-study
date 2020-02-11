import React,{Component} from 'react';
import {store} from './store/index';
import Input from './components/Input';
import List from './components/List';
import Button from './components/Button';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      todos: store.getState().todos,
      status: 'all'
    }
    this.getNewState = this.getNewState.bind(this)
    this.cancelScribe = store.subscribe(this.getNewState)
  }

  getNewState() {
    const {todos} = store.getState()
    const {status} = this.state
    let newTodos = todos
    if (status !== "all") {
      newTodos = todos.filter(item => item.status === status)
    }
    this.setState({
      todos: newTodos
    })
  }

  getStateStatus(status) {
    this.setState({                                                   
      status
    },() => this.getNewState())
  }

  componentWillUnmount() {
    this.cancelScribe()
  }

  render() {
    return (
      <div className="App">
        <Input />
        <List content={this.state.todos} />
        <Button onGetStatus={(msg) => this.getStateStatus(msg)} />
      </div>
    );
  }
}

export default App;
