import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class Header extends Component {

  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super()
    this.state = {
      themeColor: ''
    }
  }

  componentWillMount() {
    const { store } = this.context
    this._updateThemeColor()
    store.subScribe(() => this._updateThemeColor())
  }

  _updateThemeColor() {
    const { store } = this.context
    const themeColor = store.getState().themeColor
    this.setState({
      themeColor
    })
  }

  render() {
    return (
      <div>
        <h1 style={{color: this.state.themeColor}}>React.js小书</h1>
      </div>
    )
  }
}

export default Header