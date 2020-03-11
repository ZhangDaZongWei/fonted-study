import React from 'react';
import PropTypes from 'prop-types';

function Posts(props) {
  const { posts } = props
  return (
    <ul>
      {
        posts.map((item,index) => (
          <li key={`${item}-${index}`}>{item.title}</li>
        ))
      }
    </ul>
  )
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts