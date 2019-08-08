// 用于展示评论输入框

import React, {Component} from 'react';
import './css/commentInput.css'

class CommentInput extends Component {
  
  render() {
    return (
      <div className='comment-input'>
        <div className='comment-input_field'>
          <label htmlFor='username'>用户名：</label>
          <input type='text' name='username' />
        </div>
        <div className='comment-input_field'>
          <label  htmlFor='username'>评论内容：</label>
          <textarea></textarea>
        </div>
        <div className='comment-input_button'>
          <button>发布</button>
        </div>
      </div>
    )
  }
}

export default CommentInput