// header pure component

import React,{ Component } from 'react';

class Header extends Component {

  static defaultProps = {
    themeColor: ''
  }

  render() {
    return (
      <div>
        <h1 style={{color: this.props.themeColor}}>React.js小书</h1>
      </div>
    )
  }
}

export default Header