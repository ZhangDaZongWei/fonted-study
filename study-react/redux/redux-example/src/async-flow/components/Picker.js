import React from 'react';
import PropTypes from 'prop-types';

function Picker(props) {
  const { value, options, onChange } = props
  return (
    <div>
      <h1>{value}</h1>
      <select onChange={(e) => onChange(e.target.value)} value={value}>
        {
          options.map((item,index) => (
            <option value={item} key={`${item}-${index}`}>{item}</option>
          ))
        }
      </select>
    </div>
  )
}

Picker.propTypes = {
  value: PropTypes.string.isRequired,
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onChange: PropTypes.func.isRequired
}

export default Picker