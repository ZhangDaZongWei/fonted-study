import React,{ Component } from 'react';
import PropTypes from 'prop-types';
import connect from './connect'

class ThemeSwitch extends Component {

  static defaultProps = {
    onChangeThemeColor: null
  }

  changeThemeColor(color) {
    const { onChangeThemeColor } = this.props
    if (onChangeThemeColor) {
      onChangeThemeColor(color)
    }
  }


  render() {
    return (
      <div style={{marginTop: '30px'}}>
        <button 
          style={{backgroundColor: 'red',color: 'white',border: 'none',marginRight: '10px'}}
          onClick = {() => this.changeThemeColor('red')}
        >红色</button>
        <button 
          style={{backgroundColor: 'blue',color: 'white',border: 'none'}}
          onClick = {() => this.changeThemeColor('blue')}
        >蓝色</button>
      </div>
    )
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    onChangeThemeColor: (color) => {
      dispatch({type: 'CHANGE_COLOR',themeColor: color})
    }
  }
}

ThemeSwitch = connect(null,mapDispatchToProps)(ThemeSwitch)

export default ThemeSwitch