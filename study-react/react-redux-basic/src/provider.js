import React,{ Component } from 'react';
import PropTypes from 'prop-types';

// 抽离出index中关于store的部分放入此
class Provider extends Component {

  static defaultProps = {
    store: {}
  }

  static childContextTypes = {
    store: PropTypes.object
  }

  getChildContext() {
    return {
      store: this.props.store
    }
  }

  render() {
    return (
      <div>
        {this.props.children}
      </div>
    )
  }
}

export default Provider