import {combineReducers} from 'redux';
import { REQUEST_POST, RECEIVE_POST, SELECT_SUBREDDIT, INVALIDATE_SUBREDDIT } from './actions';

function selectSubreddit(selectSubreddit = "react.js", action) {
  switch (action.type) {
    case SELECT_SUBREDDIT:
      return action.subreddit
      break
    default: return selectSubreddit
  }
}

function posts(posts={
  isFetch: false,
  didInvalidate: false,
  items: []
}, action) {
  switch (action.type) {
    case REQUEST_POST:
      return {
        ...posts,
        isFetch: true,
        didInvalidate: false
      }
      break
    case RECEIVE_POST:
      return {
        ...posts,
        isFetch: false,
        didInvalidate: false,
        items: action.posts,
        lastUpdate: action.receiveDate
      }
      break
    case INVALIDATE_SUBREDDIT:
      return {
        ...posts,
        didInvalidate: true
      }
      break
    default: return posts
  }
}

function postsBySubreddit(postsBySubreddit={},action) {
  switch(action.type) {
    case REQUEST_POST:
    case RECEIVE_POST:
    case INVALIDATE_SUBREDDIT:
      return {
        ...postsBySubreddit,
        [action.subreddit]: posts(postsBySubreddit[action.subreddit],action)
      }
      break
    default: return postsBySubreddit
  }
}

export default combineReducers({
  selectSubreddit,
  postsBySubreddit
})