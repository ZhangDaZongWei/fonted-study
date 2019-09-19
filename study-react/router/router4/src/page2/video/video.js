import React, { Component } from 'react';
import { Route, Link } from 'react-router-dom';
import Flutter from './flutter';
import Vue from './vue';
import Redux from './redux';

function Video() {
  return (
    <div>
      <ul className='nav'>
        <li><Link to='/video/flutter'>Flutter</Link></li>
        <li><Link to='/video/vue'>Vue</Link></li>
        <li><Link to='/video/redux'>Redux</Link></li>
      </ul>
      <div className='content'>
        <Route path='/video/flutter' component={Flutter} />
        <Route path='/video/vue' component={Vue} />
        <Route path='/video/redux' component={Redux} />
      </div>
    </div>
  )
}

export default Video