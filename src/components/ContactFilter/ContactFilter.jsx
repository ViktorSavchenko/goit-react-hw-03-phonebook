import React from "react";
import PropTypes from 'prop-types';
import './ContactFilter.css';

function ContactFilter({ value, onContactFilter }) { 
  return (
    <label className="Search-label">
      Find contact by name:
      <input
        className="Search-input"
        type="text"
        name="filter"
        placeholder="Rosie Simpson"
        value={value}
        onChange={onContactFilter }
        />
    </label>
  )
};

ContactFilter.propTypes = {
  value: PropTypes.string,
  onContactFilter: PropTypes.func.isRequired
};

export default ContactFilter;