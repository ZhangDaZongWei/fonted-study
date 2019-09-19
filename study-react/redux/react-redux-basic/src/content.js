import React,{ Component } from 'react';
import {connect} from 'react-redux';

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

const mapStateToProps = (state) => {
  return {
    themeColor: state.themeColor
  }
}

Content = connect(mapStateToProps)(Content)

export default Content