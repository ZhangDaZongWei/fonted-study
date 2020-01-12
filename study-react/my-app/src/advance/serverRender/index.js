/**
 * 服务端渲染
 */

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const app = express()

const App = class extends React.Component {
  constructor() {
    super()
  }

  render() {
    return (
      React.createElement('div',null,'Hello React ServerRender!')
    )
  }
}

app.get('/',(req,res) => {
  const htmlStr = ReactDOMServer.renderToString(
    React.createElement(App)
  )
  res.send(htmlStr)
})

app.listen(8000,() => {
  console.log('server running in port 8000')
})