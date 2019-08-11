// 用于展示评论列表

import React, {Component} from 'react'
import PropTypes from 'prop-types'
import Comment from './comment'

class CommentList extends Component {

  static propsTypes = {
    comments: PropTypes.array,
    onHandleDetele: PropTypes.func
  }

  static defaultProps = {
    comments: []
  }

  handleDetele(index) {
    if (this.props.onHandleDetele) {
      this.props.onHandleDetele(index)
    }
  }


  render() {
    const { comments } = this.props
    return (
      <div className='list-wrapper'>
        {
          comments.map((item,index) => (
            <Comment 
              comment={item} 
              onHandleDetele={() => this.handleDetele(index)}
              key={index} 
            />
          ))
        }
      </div>
    )
  }
}

export default CommentList