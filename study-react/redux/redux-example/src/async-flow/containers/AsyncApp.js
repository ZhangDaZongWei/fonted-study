import React, { Component, memo, useEffect } from 'react';
import { connect, useSelector, useDispatch } from 'react-redux';
import { selectSubreddit, invalidateSubreddit, fetchPostsIfNeeded } from '../store/actions';
import Picker from '../components/Picker';
import Posts from '../components/Posts';

// 使用react-redux Hook API
const AsyncApp = memo(() => {
  const subreddit = useSelector((state) => state.selectSubreddit)
  const { 
    isFetch, 
    lastUpdate, 
    didInvalidate,
    items:posts 
  } = useSelector((state) => state.postsBySubreddit[subreddit]) || {
    isFetch: true,
    items: []
  }
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchPostsIfNeeded(subreddit))
  },[subreddit])

  function handleChange(subreddit) {
    dispatch(selectSubreddit(subreddit))
  }

  function handleRefreshClick() {
    dispatch(invalidateSubreddit(subreddit))
    dispatch(fetchPostsIfNeeded(subreddit))
  }
  return (
    <div>
        <Picker
          value={subreddit}
          onChange={handleChange}
          options={['reactjs', 'frontend']}
        />
        <p>
          {
            lastUpdate &&
            <span>Last Updated at: {new Date(lastUpdate).toLocaleTimeString()}</span>
          }
        </p>
        {
          !isFetch &&
          <button onClick={handleRefreshClick}>reFresh</button>
        }
        {isFetch && <h2>Loading...</h2>}
        {
          posts.length ?
            <Posts posts={posts} /> :
            <h2>Empty</h2>
        }
      </div>
  )
})

// class AsyncApp extends Component {

//   componentWillReceiveProps(nextProps) {
//     const { selectSubreddit } = nextProps
//     const { dispatch } = this.props
//     if (selectSubreddit !== this.props.selectSubreddit) {
//       dispatch(fetchPostsIfNeeded(selectSubreddit))
//     }
//   }

//   componentDidMount() {
//     const { dispatch, selectSubreddit } = this.props
//     dispatch(fetchPostsIfNeeded(selectSubreddit))
//   }

//   handleChange(subreddit) {
//     const { dispatch } = this.props
//     dispatch(selectSubreddit(subreddit))
//   }

//   handleRefreshClick(subreddit) {
//     const { dispatch } = this.props
//     dispatch(invalidateSubreddit(subreddit))
//     dispatch(fetchPostsIfNeeded(subreddit))
//   }

//   render() {
//     const { selectSubreddit, isFetch, lastUpdate, posts } = this.props
//     return (
//       <div>
//         <Picker
//           value={selectSubreddit}
//           onChange={(msg) => this.handleChange(msg)}
//           options={['reactjs', 'frontend']}
//         />
//         <p>
//           {
//             lastUpdate &&
//             <span>Last Updated at: {new Date(lastUpdate).toLocaleTimeString()}</span>
//           }
//         </p>
//         {
//           !isFetch &&
//           <button onClick={() => this.handleRefreshClick(selectSubreddit)}>reFresh</button>
//         }
//         {isFetch && <h2>Loading...</h2>}
//         {
//           posts.length ?
//             <Posts posts={posts} /> :
//             <h2>Empty</h2>
//         }
//       </div>
//     )
//   }
// }

// const mapStateToProps = (state) => {
//   const { selectSubreddit, postsBySubreddit } = state
//   const { isFetch, didInvalidate, lastUpdate, items } = postsBySubreddit[selectSubreddit] || {
//     isFetch: true,
//     items: []
//   }
//   return {
//     selectSubreddit,
//     isFetch,
//     didInvalidate,
//     lastUpdate,
//     posts: items
//   }
// }

// export default connect(mapStateToProps)(AsyncApp);
export default AsyncApp;