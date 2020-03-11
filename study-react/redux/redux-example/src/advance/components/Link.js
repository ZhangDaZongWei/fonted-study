import React, { memo } from 'react';
import PropTypes from 'prop-types';

const Link = memo(({ active, children, onLinkClick }) => {
  if (active) return (<span>{children}</span>)
  return (
    <button style={{margin: '0 5px'}} onClick={(e) => {
      e.preventDefault()
      onLinkClick()
    }}>{children}</button>
  )
})

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onLinkClick: PropTypes.func.isRequired
}

export default Link