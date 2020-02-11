import fetch from 'cross-fetch';

export const REQUEST_POST = "REQUEST_POST"
export const RECEIVE_POST = "RECEIVE_POST"
export const SELECT_SUBREDDIT = "SELECT_SUBREDDIT"
export const INVALIDATE_SUBREDDIT = "INVALIDATE_SUBREDDIT"

export function selectSubreddit(subreddit) {
  return {
    type: SELECT_SUBREDDIT,
    subreddit
  }
}

export function invalidateSubreddit(subreddit) {
  return {
    type: INVALIDATE_SUBREDDIT,
    subreddit
  }
}

export function requestPost(subreddit) {
  return {
    type: REQUEST_POST,
    subreddit
  }
}

export function receivePost(subreddit,json) {
  return {
    type: RECEIVE_POST,
    subreddit,
    posts: json,
    receiveDate: Date.now()
  }
}

export function fetchPosts(subreddit) {
  return (dispatch) => {
    dispatch(requestPost(subreddit))
    return fetch(` http://www.mocky.io/v2/5e3290a3320000610094cefa`)
           .then((res) => res.json(),(err) => console.log('request err: ',err))
           .then((res) => dispatch(receivePost(subreddit,res)))
  }
}

export function shouldFetchPosts(state,subreddit) {
  const post = state.postsBySubreddit[subreddit]
  if (!post) {
    return true
  } else if (post.isFetching) {
    return false
  } else {
    return post.didInvalidate
  }
}

export function fetchPostsIfNeeded(subreddit) {
  return (dispatch,getState) => {
    if (shouldFetchPosts(getState(),subreddit)) {
      return dispatch(fetchPosts(subreddit))
    }
  }
}