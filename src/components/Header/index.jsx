import React from 'react';

import Navigation from './Navigation';
import NavigationButton from './NavigationButton';

import './Header.scss';

const Header = () => (
  <header className="Header_Container">
    <Navigation>
      <NavigationButton to="/">Home</NavigationButton>
      <NavigationButton to="/login">Login</NavigationButton>
    </Navigation>
  </header>
);

// Header.defaultProps = {
//   firstName: null,
//   lastName: null,
// };
// Header.propTypes = {
//   firstName: PropTypes.string,
//   lastName: PropTypes.string,
// };
export default Header;
