// themeSwitch pure component
import React,{ Component } from 'react';

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

export default ThemeSwitch