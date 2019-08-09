// 用于展示评论列表

import React from 'react';
import Comment from './comment'

function CommentList(props) {

  return (
    <div className='list-wrapper'>
      {
        props.comments.map((item,index) => (
          <Comment comment={item} key={index} />
        ))
      }
    </div>
  )
}

export default CommentList