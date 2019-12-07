import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom';
// import App from './app';
import App2 from './app2';
import App from './route/index';

ReactDOM.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>, 
  document.getElementById('root'));
