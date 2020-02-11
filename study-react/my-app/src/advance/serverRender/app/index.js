const React = require('react')

exports.App = class extends React.Component {
  constructor() {
    super()
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(e) {
    console.log(e.target.innerHTML)
  }

  render() {
    return (
      React.createElement('div',
      {onClick: this.handleClick},
      'Hello React ServerRender!')
    )
  }
}