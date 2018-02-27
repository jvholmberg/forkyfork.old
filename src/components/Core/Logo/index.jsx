import React from 'react';
import PropTypes from 'prop-types';

import './style.scss';

const GetClassName = ({
  large, medium, small, className,
}) => {
  let ret = 'Logo';
  if (className) ret = `${ret} ${className}`;
  if (large) ret = `${ret} Large`;
  else if (medium) ret = `${ret} Medium`;
  else if (small) ret = `${ret} Small`;

  return ret;
};

const Logo = ({
  large, medium, small, className,
}) => (
  <i className={
    GetClassName({
      large, medium, small, className,
    })}
  />
);
Logo.propTypes = {
  large: PropTypes.bool,
  medium: PropTypes.bool,
  small: PropTypes.bool,
  className: PropTypes.string,
};
Logo.defaultProps = {
  large: false,
  medium: false,
  small: false,
  className: '',
};
export { Logo }; // eslint-disable-line
