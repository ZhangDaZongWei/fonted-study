// 展示每一条评论

import React from 'react';
import './css/comment.css'

function Comment(props) {

  return (
    <div className='comment-wrapper'>
      <span>{props.comment.username}：</span>
      <span>{props.comment.content}</span>
    </div>
  )
}

export default Comment