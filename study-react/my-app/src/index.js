import React from 'react'
import ReactDOM from 'react-dom'

// 实现一个点击按钮改变样式的组件

// 自我实现版本
const themes = {
 light: {
   foreColor: '#000',
   backColor: 'red'
 },
 dark: {
   foreColor: '#fff',
   backColor: 'tomato'
 }
}

const ThemesContext = React.createContext(themes.light)

// class ButtonChange extends React.Component {
//   static contextType = ThemesContext

//   constructor() {
//     super()
//     this.state = {
//       currentTheme: themes.light
//     }
//   }

//   changeTheme() {
//     console.log('running...')
//     this.setState({
//       currentTheme: this.state.currentTheme === themes.light ? themes.dark : themes.light
//     })
//   }
  
//   render() {
//     console.log('currentTheme: ',this.state.currentTheme)
//     return (
//       <ThemesContext.Provider value={this.state.currentTheme}>  
//         <button 
//           style={{ backgroundColor: this.context.backColor, color: this.context.foreColor }}
//           onClick={this.changeTheme.bind(this)}
//         >Change</button>
//       </ThemesContext.Provider>
//     )
//   }
// }

// 参考版本 分为 theme button changeStyle app

class Button extends React.Component {
  static contextType = ThemesContext
  render() {
    let props = this.props
    let context = this.context
    console.log('context: ',context)
    return (
      <button {...props} type='button' style={{backgroundColor: context.backColor}} >
        按钮
      </button>
    )
  }
}

class ChangeButton extends React.Component {
  render() {
    const props = this.props
    return (
      <Button onClick = {props.changeTheme} />
    )
  }
}

class App extends React.Component {

  constructor() {
    super()
    this.state = {
      theme: themes.light
    }
  }

  toggle() {
    this.setState({
      theme: this.state.theme === themes.light ? themes.dark : themes.light
    })
  }

  render() {
    return(
      <ThemesContext.Provider value={this.state.theme}>
        <ChangeButton changeTheme={this.toggle.bind(this)} />
      </ThemesContext.Provider>
    )
  }
}

// ReactDOM.render(
//   <App />,
//   document.getElementById('root')
// )