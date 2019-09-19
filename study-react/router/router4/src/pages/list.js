import React, { Component } from 'react';

class List extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      id: ''
     }
  }

  render() { 
    return ( <div>
      I am List. my id is {this.state.id}
    </div> );
  }

  // props接收值
  componentDidMount() {
    console.log('props: ',this.props)
    const { params: {id} } = this.props.match
    this.setState({
      id
    })
  }
}
 
export default List;