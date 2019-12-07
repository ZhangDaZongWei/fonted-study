import React from 'react';
import { Redirect } from 'react-router-dom';

function Content(props) {
  return (
    <div>
      {props.extra}
      <Redirect to='/login'>登录</Redirect>
    </div>
  )
}

export default Content;