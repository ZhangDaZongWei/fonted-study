import React,{ Component } from 'react';
import connect from './connect'

class Header extends Component {

  constructor() {
    super()
    this.state = {
      themeColor: this.props.themeColor || ''
    }
  }

  render() {
    return (
      <div>
        <h1 style={{color: this.state.themeColor}}>React.js小书</h1>
      </div>
    )
  }
}

let HeaderConnect = connect(Header)
export default HeaderConnect