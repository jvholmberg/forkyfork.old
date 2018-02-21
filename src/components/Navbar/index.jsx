import React from 'react';
import PropTypes from 'prop-types';

import './Navbar.scss';

const Navbar = props => (
  <nav className="Navbar_Container">
    <ul className="Navbar_Container_List">
      { props.children }
    </ul>
  </nav>
);
Navbar.defaultProps = {
  children: React.Element,
};
Navbar.propTypes = {
  children: PropTypes.node,
};

export default Navbar;
