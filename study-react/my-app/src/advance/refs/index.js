import React, { Component } from 'react';

// 注重的是refs的转发
// 即一个组件接收一个ref，然后转发到其子组件中，实现在父组件中使用子组件内部的refs

class RefsApp extends Component {
  constructor(props) {
    super(props);
    this.buttonRef = React.createRef()
    this.state = {}
  }

  componentDidMount() {
    console.log('button refs: ', this.buttonRef)
  }

  render() { 
    return ( 
      <div>
        <FancyButton ref={this.buttonRef} />
      </div>
    );
  }
}

const FancyButton = React.forwardRef((props, ref) => (
  <button ref={ref}>按钮</button>
))


export default RefsApp;