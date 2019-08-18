// smart 组件

import React, {Component} from 'react';
import CommentInput from './commentInput';
import CommentList from './commentList';

class CommentApp extends Component {

  render() {
    return (
      <div>
        <CommentInput />
        <CommentList />
      </div>
    )
  }
}

export default CommentApp