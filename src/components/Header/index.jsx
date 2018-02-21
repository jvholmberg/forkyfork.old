import React from 'react';
import PropTypes from 'prop-types';

import Navbar from '../Navbar';
import NavButton from '../NavButton';

import './Header.scss';

const Header = (props) => {
  const { current } = props;
  return (
    <header className="Header_Container">
      <Navbar>
        <NavButton current={current} to="/">Home</NavButton>
        <NavButton current={current} to="/login">Login</NavButton>
      </Navbar>
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
