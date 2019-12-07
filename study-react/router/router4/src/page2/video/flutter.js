import React from 'react';
import { Route } from 'react-router-dom';

function Flutter({match}) {
  console.log('flutter: ', match.url)
  return (
    <Route path='' component={Content}/>
  )
}

function Content() {
  return (
    <div>Flutter Video</div>
  )
}

export default Flutter