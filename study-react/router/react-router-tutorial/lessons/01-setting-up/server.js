import React from 'react';
// 使用它去挂载app到html节点上
import { renderToString } from 'react-dom/server';
// 使用它们匹配路由url，并且渲染它
import { match, RouterContext } from 'react-router';
import routes from './modules2/routes';


var express = require('express')

var path = require('path')

var compression = require('compression')

var app = express()

app.use(compression())

app.use(express.static(path.join(__dirname,'public')))

// app.get('*', function(req,res) {
//   res.sendFile(path.join(__dirname,'public','index.html'))
// })

app.get('*', (req, res) => {
  // match the routes to the url
  match({ routes: routes, location: req.url }, (err, redirect, props) => {
    if (err) {
      res.status(500).send(err.message)
    } else if (redirect) {
      res.redirect(redirect.pathname + redirect.search)
    } else if (props) {
      // `RouterContext` is what the `Router` renders. `Router` keeps these
      // `props` in its state as it listens to `browserHistory`. But on the
      // server our app is stateless, so we need to use `match` to
      // get these props before rendering.
      const appHtml = renderToString(<RouterContext {...props}/>)
  
      // dump the HTML into a template, lots of ways to do this, but none are
      // really influenced by React Router, so we're just using a little
      // function, `renderPage`
      res.send(renderPage(appHtml))
    } else {
      res.status(404).send('Not Found')
    }
  })
})

function renderPage(appHtml) {
  return `
    <!doctype html public="storage">
    <html>
    <meta charset=utf-8/>
    <title>My First React Router App</title>
    <link rel=stylesheet href=/index.css>
    <div id=app>${appHtml}</div>
    <script src="/bundle.js"></script>
   `
}

var PORT = process.env.PORT || 8080

app.listen(PORT,function() {
  console.log('listen localhost: ' + PORT)
})