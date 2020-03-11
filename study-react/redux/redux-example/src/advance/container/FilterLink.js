import React from 'react';
import { connect } from 'react-redux';
import { NavLink } from 'react-router-dom';
// import {setVisibilityFilter} from '../store/actions';
// import Link from '../components/Link';

const FilterLink = ({filter,children}) => {
  return (
      <NavLink to={filter === "SHOW_ALL" ? "/" : `/${filter}`} activeStyle={{
        textDecoration: "none",
        color: "tomato"
      }}>{children}</NavLink>
  )
}

// const mapStateToProps = (state,ownProps) => {
//   return {
//     active: ownProps.filter === state.visibilityFilter
//   }
// }

// const mapDispatchToProps = (dispatch,ownProps) => {
//   return {
//     onLinkClick: () => {
//       dispatch(setVisibilityFilter(ownProps.filter))
//     }
//   }
// }

// const FilterLink = connect(mapStateToProps,mapDispatchToProps)(Link)

export default FilterLink 