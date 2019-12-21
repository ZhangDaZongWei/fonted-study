import React, {Component} from 'react';

class SyntheticEvent extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      event: null
     }
  }

  handleClick(e) {
    e.persist()
    console.log('event: ',e)
    console.log('event type: ',e.type)
    setTimeout(() => {
      console.log('async event: ',e)
    }, 1000);
    this.setState({
      event: e
    })
  }

  componentDidUpdate() {
    console.log('state event: ',this.state.event)
  }

  render() { 
    return ( 
      <div>
        <button onClick={(e) => this.handleClick(e)}>点击</button>
      </div>
     );
  }
}
 
export default SyntheticEvent;