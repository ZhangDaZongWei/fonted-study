import React, { Component } from 'react';

// 不强制使用JSX，直接使用React.createElement(component,props,...children)
// 这里使用快捷方式，创建快捷方式
const e = React.createElement

class UnUseJsx extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return ( 
      e('div',null,`张宗伟`)
     );
  }
}
 
export default UnUseJsx;