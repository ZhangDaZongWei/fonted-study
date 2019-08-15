import React,{ Component } from 'react';
import PropTypes from 'prop-types';

class ThemeSwitch extends Component {

  static contextTypes = {
    store: PropTypes.object
  }

  constructor() {
    super()
    this.state = {
      themeColor: ''
    }
  }

  changeThemeColor(color) {
    const { store } = this.context
    store.dispatch({type: 'CHANGE_COLOR',themeColor: color})
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

export default ThemeSwitch