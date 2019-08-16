import React,{ Component } from 'react';
import connect from './connect'

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

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

Header = connect(mapStateToProps)(Header)
export default Header