import React from 'react';
import PropTypes from 'prop-types';

import Navigation from './Navigation';
import NavigationButton from './NavigationButton';

import './Header.scss';

const Header = (props) => {
  const { current } = props;
  console.log(props);
  return (
    <header className="Header_Container">
      <Navigation>
        <NavigationButton current={current} to="/">Home</NavigationButton>
        <NavigationButton current={current} to="/login">Login</NavigationButton>
      </Navigation>
    </header>
  );
};
Header.defaultProps = {
  current: '/',
};
Header.propTypes = {
  current: PropTypes.string,
};
export default Header;
