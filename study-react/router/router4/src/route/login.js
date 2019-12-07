import React from 'react';
import { Route } from 'react-router-dom';

function Login() {
  return (
    <Route path='/login' render={() => <div> login page </div>}></Route>
  )
}