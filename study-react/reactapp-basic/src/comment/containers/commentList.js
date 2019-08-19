// smart 组件

import React, {Component} from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import { initComments, delComment } from '../reducers/comments'
import CommentList from '../components/commentList';

class CommentListContainer extends Component {

  static propTypes = {
    comments: PropTypes.array,
    initComments:PropTypes.func,
    deteleComment: PropTypes.func
  }

  // componentWillMount() {
  //   this._loadComments()
  // }

  // _loadComments() {
  //   let comments = localStorage.getItem('comments')
  //   comments = comments ? JSON.parse(comments) : []
  //   this.props.initComments(comments)
  // }

  handleDetele(index) {
    const {comments} = this.props
    const newComments = comments.splice(index,1)
    localStorage.setItem('comments', JSON.stringify(newComments))
    if (this.props.deteleComment) {
      this.props.deteleComment(index)
    }
  }

  render() {
    return (
      <CommentList 
        comments={this.props.comments} 
        onHandleDetele={() => this.handleDetele()} 
      />
    )
  }
}

const mapStateToProps = (state) => {
  return {
    comments: state.comments
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    // initComments: (comments) => {
    //   dispatch(initComments(comments))
    // },
    deteleComment: (index) => {
      dispatch(delComment(index))
    }
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(CommentListContainer)