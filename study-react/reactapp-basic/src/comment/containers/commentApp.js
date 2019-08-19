// smart 组件

import React, {Component} from 'react';
import CommentInput from './commentInput';
import CommentList from './commentList';
import '../css/commentApp.css'

class CommentApp extends Component {

  render() {
    return (
      <div className='wrapper'>
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}

export default CommentApp