/**
 * 服务端渲染
 */

const express = require('express')
const React = require('react')
const ReactDOMServer = require('react-dom/server')
const {App} = require('./app/index')
const app = express()
app.use(express.static("dist"))

app.get('/',(req,res) => {
  const htmlStr = ReactDOMServer.renderToString(
    React.createElement(App)
  )
  res.send(`
    <!DOCTYPE html>
    <html>
      <title>serverRender</title>
      <body>
        <div id='root'>${htmlStr}</div>
        <script src='./index.js' />
      </body>
    </html>
  `)
})

app.listen(8000,() => {
  console.log('server running in port 8000')
})