// content pure component 

import React,{ Component } from 'react';

class Content extends Component {

  static defaultProps = {
    themeColor: ''
  }

  render() {
    return (
      <div style={{color: this.props.themeColor}}>
        React.js小书内容
      </div>
    )
  }
}

export default Content