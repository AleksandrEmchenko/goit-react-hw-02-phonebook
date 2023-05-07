import React from "react";
import PropTypes from "prop-types";


function Filter({value, onChange}) {
  return (
    <label>
      Find contacts by name
      <input type="text" name="filter" value={value} onChange={onChange}/>
    </label>
  );
}
export default Filter;

Filter.propTypes = {
  value: PropTypes.string,
  onChange: PropTypes.func,
}