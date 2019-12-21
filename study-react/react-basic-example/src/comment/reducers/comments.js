// comments的reducer

// reducer 就是用来描述数据的形态和相应的变更
// 对于评论来说, 需要的操作是：添加、删除、初始化

const ADD_COMMENT = 'ADD_COMMENT'
const DEL_COMMENT = 'DEL_COMMENT'
const INIT_COMMENT = 'INIT_COMMENT'

const commentsReducer = (state,action) => {
  if (!state) {
    return {
      // 这样写，是为了去掉初始化
      comments: localStorage.getItem('comments') ? JSON.parse(localStorage.getItem('comments')) : []
    }
  }
  switch(action.type) {
    // case INIT_COMMENT:
    //   return {
    //     comments: action.comments
    //   }
    //   break
    case ADD_COMMENT:
      return {
        comments: [...state.comments,action.comment]
      }
    case DEL_COMMENT:
      return {
        comments: [...state.comments].splice(action.index,1)
      }
    default: return state
  }
} 

// action creator

const initComments = (comments) => {
  return {
    type: INIT_COMMENT,
    comments
  }
}

const addComment = (comment) => {
  return {
    type: ADD_COMMENT,
    comment
  }
}

const delComment = (index) => {
  return {
    type: DEL_COMMENT,
    index
  }
}

export  { commentsReducer, initComments, addComment, delComment }