import React,{ Component } from 'react';
import PropTypes from 'prop-types';

// 高阶组件connect, 和context打交道

export const connect =  (WrapperedComponent) => {
  class Connect extends Component {

    // 取得store
    static contextType = {
      store: PropTypes.object
    }

    constructor() {
      super()
      this.state={
        themeColor: ''
      }
    }

    componentWillMount() {
      this._updateThemeColor()
      const { store } = this.context
      store.subScribe(() => this._updateThemeColor())
    }

    _updateThemeColor() {
      const { store } = this.context
      const { themeColor } = store.getState()
      this.setState({
        themeColor
      })
    }

    render() {
      return (
        <WrapperComponent themeColor={this.state.themeColor} />
      )
    }
  }


  return Connect
}