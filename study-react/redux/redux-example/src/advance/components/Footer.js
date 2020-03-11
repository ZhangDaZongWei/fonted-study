import React,{memo} from 'react';
import FilterLink from '../container/FilterLink';

const Footer = () => {
  return (
    <div>
      Show:{" "}
      <FilterLink filter="SHOW_ALL">All</FilterLink> {" "}
      <FilterLink filter="SHOW_ACTIVE">Active</FilterLink> {" "}
      <FilterLink filter="SHOW_COMPLETED">Comoleted</FilterLink>
    </div>
  )
}

export default Footer