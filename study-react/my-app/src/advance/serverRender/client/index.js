const React = require('react')
const ReactDOM = require('react-dom')
const {App} = require('../app/index')

ReactDOM.render(
  React.createElement(App),
  document.getElementById('app')
)