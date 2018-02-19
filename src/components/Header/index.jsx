import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';

import './Header.scss';

const Header = ({ firstName, lastName }) => (
  <header className="Header_Container">
    {firstName} {lastName}
    <Navigation />
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
