import React from 'react';
import PropTypes from 'prop-types';

const Header = ({ firstName, lastName }) => (
  <header>
    {firstName} {lastName}
  </header>
);

Header.defaultProps = {
  firstName: null,
  lastName: null,
};
Header.propTypes = {
  firstName: PropTypes.string,
  lastName: PropTypes.string,
};
export default Header;
