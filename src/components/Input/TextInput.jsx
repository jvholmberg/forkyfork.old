import React from 'react';
import PropTypes from 'prop-types';

const TextInput = ({
  label, placeholder, onChange, onClick,
}) => (
  <span>
    {label}
    <input
      type="text"
      placeholder={placeholder}
      onChange={onChange}
      onClick={onClick}
    />
  </span>
);

TextInput.propTypes = {
  label: PropTypes.string,
  placeholder: PropTypes.string,
  onClick: PropTypes.string,
  onChange: PropTypes.string,
};
TextInput.defaultProps = {
  label: null,
  placeholder: null,
  onClick: null,
  onChange: null,
};

export default TextInput;
