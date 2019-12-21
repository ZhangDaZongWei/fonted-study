import React from 'react';
import ReactDOM from 'react-dom';
// import NormalState from './basic/normalState';
// import App from './advance/aria/aria';
// import MyComponent from './advance/split/index';
// import HookExample from './hook/index';
// import {ContextComponent,ContextComponent1} from './advance/context/index';
// import ErrorApp from './advance/error/index';
// import RefsApp from './advance/refs/index';
// import UnES6App from './advance/unuseES6/index';
// import UnUseJsx from './advance/unUseJSX/index';
import SyntheticEvent from './advance/Synthetic';

let ref = ReactDOM.render(
  <SyntheticEvent />,
  document.getElementById('root')
)

console.log('index ref: ', ref)