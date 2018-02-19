import React from 'react';

const TextInput = () => (
  <span>
    {this.props.label}
    <input
      type="text"
      placeholder={this.props.placeholder}
      onChange={this.props.onchange}
    />
  </span>
);

TextInput.defaultProps = {
  label: null,
  hint: null,
  onClick: null,
  onChange: null,
};

export default TextInput;
